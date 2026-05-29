export interface AvatarState {
  id: string; // Unique ID for each saved slot
  faceShape: 'round' | 'pointed' | 'oval' | 'chubby' | 'squared';
  skinTone: string; // Hex color
  
  // Independent front & back hair
  frontHair: 'bangs_straight' | 'bangs_kiki' | 'bangs_parted' | 'bangs_haku' | 'bangs_messy' | 'bangs_braided' | 'cap_newsboy' | 'cap_aviator' | 'curls' | 'none';
  backHair: 'bob_short' | 'long_flowing' | 'pony_high' | 'straight_haku' | 'wavy_messy' | 'short_nausicaa' | 'braid_side' | 'bun_tight' | 'bald';
  hairColor: string; // Hex color
  hairHighlightColor: string; // Secondary hex highlights
  hairHighlightEnabled: boolean; // toggle
  
  // Eyes
  eyeStyle: 'wide_curious' | 'cool_almond' | 'gentle_oval' | 'spirited_star' | 'sleepy_half' | 'determined_bold' | 'spirit_no_face';
  eyeColor: string; // Hex color
  eyeSpacing: number; // 35 - 75
  eyeY: number; // 130 - 200
  eyeScaleX: number; // Width multiplier (0.6 - 1.5)
  eyeScaleY: number; // Height multiplier (0.6 - 1.5)
  eyeAngle: number; // Rotation in degrees (-20 to 20)
  
  // Eyebrows
  eyebrowsStyle: 'thick' | 'thin' | 'oval_dots' | 'expressive_arched';
  eyebrowsY: number; // Offset from eye: -30 to -5
  eyebrowsAngle: number; // Rotation: -25 to 25
  eyebrowsColor: string; // Hex color
  
  // Ears
  earStyle: 'human' | 'elf_pointed' | 'totoro_fluffy' | 'cat_ears_hair';
  earSize: number; // 0.6 - 1.5
  earringStyle: 'none' | 'emerald_teardrop' | 'gold_ring' | 'red_bead';
  
  // Nose
  noseStyle: 'button' | 'hook' | 'rounded' | 'line' | 'snout_totoro' | 'pointed_witch';
  noseY: number; // 180 - 240
  noseScale: number; // 0.6 - 1.4
  noseWidth: number; // 0.6 - 1.4
  
  // Mouth
  mouthStyle: 'happy_open' | 'gentle_smile' | 'neutral_line' | 'surprised_o' | 'cheeky_tongue' | 'broad_grin' | 'determined_pout';
  mouthY: number; // 230 - 290
  mouthScale: number; // 0.6 - 1.4
  mouthWidth: number; // 0.6 - 1.4
  
  // Face Markings & Details
  faceMarkings: 'none' | 'san_paint' | 'ashitaka_curse' | 'freckles' | 'cheek_bandaid';
  blushAmount: number; // Opacity 0 - 100
  blushColor: string; // Hex color
  
  // Vestiti ed Accessori
  clothingStyle: 'kiki_tunic' | 'chihiro_stripes' | 'howl_cardigan' | 'sheeta_jewel' | 'sailor_uniform' | 'adventurers_jacket' | 'forest_cape';
  clothingColor: string; // Primary shirt color
  accessoryStyle: 'none' | 'kiki_bow' | 'sophie_hat' | 'totoro_leaf' | 'round_glasses' | 'goggles_aviator' | 'flower_crown';
  accessoryX: number; // Horizontal offset (-50 to 50)
  accessoryY: number; // Vertical offset (-50 to 50)
  accessoryScale: number; // Scale factor (0.5 to 2.0)
  accessoryRotation: number; // Rotation angle (-180 to 180)
  
  // Scene
  background: 'meadow' | 'flying_castle' | 'cozy_bakery' | 'spirit_forest' | 'seaside_train' | 'starry_night' | 'sunset_port' | 'transparent';
  characterName: string;
  characterRole: string;
}

export interface GhibliBackstory {
  backstory: string;
  quotes: string[];
  magicItemName: string;
  magicItemEffects: string;
  personalityTraits: string[];
}
