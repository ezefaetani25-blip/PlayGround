#!/usr/bin/env bash
# Build and serve the static Cubehaven site in the foreground.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="${PROJECT_DIR:-$SCRIPT_DIR}"
PROJECT_DIR="$(cd "$PROJECT_DIR" && pwd)"
PORT="${PORT:-3000}"
DIST_DIR="$PROJECT_DIR/dist"
METADATA_DIR="${OPENCODE_WEB_DIR:-${RUNNER_TEMP:-/tmp}/omgithub-web}"

if ! [[ "$PORT" =~ ^[0-9]+$ ]] || (( PORT < 1 || PORT > 65535 )); then
  echo "PORT must be an integer between 1 and 65535 (got '$PORT')." >&2
  exit 1
fi

timed() {
  local label="$1"
  shift
  local start_ns end_ns status
  start_ns="$(date +%s%N)"
  "$@" && status=0 || status=$?
  end_ns="$(date +%s%N)"
  printf '[timing] %s: %d ms\n' "$label" "$(( (end_ns - start_ns) / 1000000 ))" >&2
  return "$status"
}

deps_hash() {
  if [[ -f "$PROJECT_DIR/package-lock.json" ]]; then
    cat "$PROJECT_DIR/package.json" "$PROJECT_DIR/package-lock.json" | sha256sum | awk '{print $1}'
  else
    sha256sum "$PROJECT_DIR/package.json" | awk '{print $1}'
  fi
}

cd "$PROJECT_DIR"

timed "prepare metadata directory" mkdir -p "$METADATA_DIR"

hash="$(deps_hash)"
needs_install=false
if [[ ! -x "$PROJECT_DIR/node_modules/.bin/vite" ]]; then
  needs_install=true
fi
if [[ ! -f "$PROJECT_DIR/node_modules/.cubehaven-deps" ]] || [[ "$(cat "$PROJECT_DIR/node_modules/.cubehaven-deps")" != "$hash" ]]; then
  needs_install=true
fi
if [[ "$needs_install" == true ]]; then
  if [[ -f "$PROJECT_DIR/package-lock.json" ]]; then
    timed "install dependencies (npm ci)" npm ci --no-audit --no-fund
  else
    timed "install dependencies (npm install)" npm install --no-audit --no-fund
  fi
  printf '%s' "$hash" > "$PROJECT_DIR/node_modules/.cubehaven-deps"
else
  printf '[timing] install dependencies: skipped (cached)\n' >&2
fi

needs_build=false
if [[ ! -f "$DIST_DIR/index.html" ]]; then
  needs_build=true
fi
if [[ "$needs_build" == false ]]; then
  build_inputs=(package.json index.html)
  [[ -d src ]] && build_inputs+=(src)
  [[ -f package-lock.json ]] && build_inputs+=(package-lock.json)
  if [[ -n "$(find "${build_inputs[@]}" -newer "$DIST_DIR/index.html" -print -quit 2>/dev/null)" ]]; then
    needs_build=true
  fi
fi
if [[ "$needs_build" == true ]]; then
  timed "build static site (vite)" npm run build
else
  printf '[timing] build static site: skipped (up to date)\n' >&2
fi

if [[ ! -f "$DIST_DIR/index.html" ]]; then
  echo "Build output is missing $DIST_DIR/index.html." >&2
  exit 1
fi
DIST_DIR="$(cd "$DIST_DIR" && pwd)"

timed "write deployment-output.json" node -e '
  const fs = require("node:fs");
  const path = require("node:path");
  const [file, project, directory] = process.argv.slice(1);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify({ project, directory }));
' "$METADATA_DIR/deployment-output.json" "$PROJECT_DIR" "$DIST_DIR"

echo "[timing] serve: starting Vite preview on 0.0.0.0:$PORT" >&2
exec node "$PROJECT_DIR/node_modules/vite/bin/vite.js" preview --host 0.0.0.0 --port "$PORT" --strictPort
