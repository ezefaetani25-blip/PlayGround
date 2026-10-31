const all = (name) => ({ top: name, side: name, bottom: name });

function def(id, name, tiles, extra = {}) {
  return {
    id,
    name,
    tiles,
    solid: true,
    opaque: true,
    transparent: false,
    cutout: false,
    liquid: false,
    selfCull: false,
    glow: false,
    breakable: true,
    sound: 'stone',
    ...extra,
  };
}

export const BLOCKS = [
  def(0, 'Air', all('stone'), {
    solid: false,
    opaque: false,
    transparent: true,
    breakable: false,
    sound: 'none',
  }),
  def(1, 'Grass', { top: 'grass_top', side: 'grass_side', bottom: 'dirt' }, { sound: 'grass' }),
  def(2, 'Dirt', all('dirt'), { sound: 'dirt' }),
  def(3, 'Stone', all('stone'), { sound: 'stone' }),
  def(4, 'Cobblestone', all('cobble'), { sound: 'stone' }),
  def(5, 'Sand', all('sand'), { sound: 'sand' }),
  def(6, 'Sandstone', all('sandstone'), { sound: 'stone' }),
  def(7, 'Oak Log', { top: 'log_top', side: 'log_side', bottom: 'log_top' }, { sound: 'wood' }),
  def(8, 'Oak Planks', all('planks'), { sound: 'wood' }),
  def(9, 'Leaves', all('leaves'), {
    opaque: false,
    cutout: true,
    selfCull: true,
    sound: 'grass',
  }),
  def(10, 'Water', all('water'), {
    solid: false,
    opaque: false,
    transparent: true,
    liquid: true,
    selfCull: true,
    breakable: false,
    sound: 'water',
  }),
  def(11, 'Glass', all('glass'), {
    opaque: false,
    transparent: true,
    selfCull: true,
    sound: 'glass',
  }),
  def(12, 'Bricks', all('brick'), { sound: 'stone' }),
  def(13, 'Snow', all('snow'), { sound: 'snow' }),
  def(14, 'Gravel', all('gravel'), { sound: 'gravel' }),
  def(15, 'Bedrock', all('bedrock'), { sound: 'stone', breakable: false }),
  def(16, 'Glowstone', all('glowstone'), { glow: true, sound: 'glass' }),
  def(17, 'Stone Bricks', all('stone_bricks'), { sound: 'stone' }),
  def(18, 'White Wool', all('white'), { sound: 'wool' }),
  def(19, 'Red Wool', all('red'), { sound: 'wool' }),
  def(20, 'Blue Wool', all('blue'), { sound: 'wool' }),
  def(21, 'Yellow Wool', all('yellow'), { sound: 'wool' }),
  def(22, 'Green Wool', all('green'), { sound: 'wool' }),
  def(23, 'Orange Wool', all('orange'), { sound: 'wool' }),
  def(24, 'Black Wool', all('black'), { sound: 'wool' }),
  def(25, 'Purple Wool', all('purple'), { sound: 'wool' }),
  def(26, 'Cyan Wool', all('cyan'), { sound: 'wool' }),
];

export const AIR = 0;
export const WATER = 10;
export const GRASS = 1;
export const BEDROCK = 15;

export const DEFAULT_HOTBAR = [1, 8, 3, 12, 11, 5, 7, 9, 16];

/** Every block the creative library offers. */
export const PLACEABLE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

export function blockAt(id) {
  return BLOCKS[id] || BLOCKS[0];
}

/** Is this id a full opaque cube that should hide the face behind it? */
export function occludes(id) {
  return !!BLOCKS[id]?.opaque;
}
