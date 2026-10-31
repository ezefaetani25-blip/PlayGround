export const BLOCK = Object.freeze({
  AIR: 0,
  GRASS: 1,
  DIRT: 2,
  STONE: 3,
  COBBLE: 4,
  SAND: 5,
  LOG: 6,
  LEAVES: 7,
  PLANKS: 8,
  GLASS: 9,
  GLOWSTONE: 10,
  WATER: 11,
  SNOW: 12,
  BEDROCK: 13,
  BRICK: 14,
  GRAVEL: 15,
});

const allFaces = (tile) => ({ top: tile, side: tile, bottom: tile });

export const BLOCK_DEFS = Object.freeze({
  [BLOCK.AIR]: { name: 'Air', solid: false, opaque: false },
  [BLOCK.GRASS]: {
    name: 'Grass Block',
    tiles: { top: 'grass_top', side: 'grass_side', bottom: 'dirt' },
    particle: 0x7e9e4b,
    solid: true,
    opaque: true,
  },
  [BLOCK.DIRT]: { name: 'Dirt', tiles: allFaces('dirt'), particle: 0x7b583c, solid: true, opaque: true },
  [BLOCK.STONE]: { name: 'Stone', tiles: allFaces('stone'), particle: 0x85888a, solid: true, opaque: true },
  [BLOCK.COBBLE]: { name: 'Cobblestone', tiles: allFaces('cobblestone'), particle: 0x777a79, solid: true, opaque: true },
  [BLOCK.SAND]: { name: 'Sand', tiles: allFaces('sand'), particle: 0xd6c18d, solid: true, opaque: true },
  [BLOCK.LOG]: {
    name: 'Oak Log',
    tiles: { top: 'log_top', side: 'log_side', bottom: 'log_top' },
    particle: 0x80603a,
    solid: true,
    opaque: true,
  },
  [BLOCK.LEAVES]: { name: 'Oak Leaves', tiles: allFaces('leaves'), particle: 0x4c7d35, solid: true, opaque: true },
  [BLOCK.PLANKS]: { name: 'Oak Planks', tiles: allFaces('planks'), particle: 0xa77d4c, solid: true, opaque: true },
  [BLOCK.GLASS]: { name: 'Glass', tiles: allFaces('glass'), particle: 0xaad7dc, solid: true, opaque: false, transparent: true },
  [BLOCK.GLOWSTONE]: {
    name: 'Glowstone',
    tiles: allFaces('glowstone'),
    particle: 0xf0b458,
    solid: true,
    opaque: true,
    glow: true,
  },
  [BLOCK.WATER]: { name: 'Water', tiles: allFaces('water'), particle: 0x4f9dbb, solid: false, opaque: false, liquid: true },
  [BLOCK.SNOW]: { name: 'Snow', tiles: allFaces('snow'), particle: 0xe8f1f2, solid: true, opaque: true },
  [BLOCK.BEDROCK]: { name: 'Bedrock', tiles: allFaces('bedrock'), particle: 0x484b49, solid: true, opaque: true },
  [BLOCK.BRICK]: { name: 'Brick', tiles: allFaces('brick'), particle: 0x9a5543, solid: true, opaque: true },
  [BLOCK.GRAVEL]: { name: 'Gravel', tiles: allFaces('gravel'), particle: 0x8c877d, solid: true, opaque: true },
});

export const HOTBAR = Object.freeze([
  BLOCK.GRASS,
  BLOCK.STONE,
  BLOCK.COBBLE,
  BLOCK.SAND,
  BLOCK.LOG,
  BLOCK.LEAVES,
  BLOCK.PLANKS,
  BLOCK.GLASS,
  BLOCK.GLOWSTONE,
]);

export const ATLAS_TILES = Object.freeze([
  'grass_top',
  'grass_side',
  'dirt',
  'stone',
  'cobblestone',
  'sand',
  'log_side',
  'log_top',
  'leaves',
  'planks',
  'glass',
  'glowstone',
  'snow',
  'bedrock',
  'brick',
  'gravel',
]);

export function isSolid(id) {
  return Boolean(BLOCK_DEFS[id]?.solid);
}

export function isOpaque(id) {
  return Boolean(BLOCK_DEFS[id]?.opaque);
}

export function isLiquid(id) {
  return Boolean(BLOCK_DEFS[id]?.liquid);
}

export function isGlow(id) {
  return Boolean(BLOCK_DEFS[id]?.glow);
}

export function blockName(id) {
  return BLOCK_DEFS[id]?.name ?? 'Block';
}
