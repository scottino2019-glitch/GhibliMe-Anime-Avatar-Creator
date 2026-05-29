import React, { useState } from 'react';
import { AvatarState } from '../types';
import { 
  Smile, 
  Sparkles, 
  FolderHeart, 
  Shirt, 
  Compass, 
  Palette,
  RefreshCw,
  Sliders,
  Scissors,
  Save,
  Trash2,
  Heart
} from 'lucide-react';

interface SidebarControlsProps {
  avatar: AvatarState;
  onChange: (update: Partial<AvatarState>) => void;
  savedAvatars: AvatarState[];
  onSaveAvatar: (avatar: AvatarState) => void;
  onLoadAvatar: (avatar: AvatarState) => void;
  onDeleteAvatar: (id: string) => void;
}

const SKIN_COLORS = [
  { name: 'Porcellana', hex: '#FFF1E6' },
  { name: 'Pesca', hex: '#FFE5D9' },
  { name: 'Morbido Rosato', hex: '#FAD2E1' },
  { name: 'Dorata Ghibli', hex: '#E8C2AC' },
  { name: 'Ambrata', hex: '#D8B29C' },
  { name: 'Siena Solare', hex: '#C89F88' }
];

const HAIR_COLORS = [
  { name: 'Nero Corvino', hex: '#1E1F29' },
  { name: 'Castano Silvestre', hex: '#4F352E' },
  { name: 'Fulvo Ghibli', hex: '#783A20' },
  { name: 'Biondo Calcestruzzo', hex: '#ECC06A' },
  { name: 'Verde Haku', hex: '#2E6F56' },
  { name: 'Argento Sophie', hex: '#BBCCD4' },
  { name: 'Indaco Notte', hex: '#3D5A80' },
  { name: 'Rosso Ponyo', hex: '#E05A47' }
];

const HIGHLIGHT_COLORS = [
  { name: 'Sole Dorato', hex: '#FFE082' },
  { name: 'Rosa Bocciolo', hex: '#FF80AB' },
  { name: 'Azzurro Laguna', hex: '#80DEEA' },
  { name: 'Menta Fresca', hex: '#A7FFEB' },
  { name: 'Rame Caldo', hex: '#FFD180' },
  { name: 'Bianco Perla', hex: '#FFFFFF' }
];

const EYE_COLORS = [
  { name: 'Terra d’Ombra', hex: '#3A2E2B' },
  { name: 'Blu Sky', hex: '#4A90E2' },
  { name: 'Smeraldo di Howl', hex: '#3CA978' },
  { name: 'Oro Splendente', hex: '#CCA43B' },
  { name: 'Fuliggine di Caldaia', hex: '#22252A' },
  { name: 'Viola Crepuscolo', hex: '#60528A' }
];

const CLOTHING_COLORS = [
  { name: 'Blu della Brughiera', hex: '#1D263B' },
  { name: 'Verde Foglia d’Acero', hex: '#4B8B7B' },
  { name: 'Zafferano dei Campi', hex: '#FFBC0A' },
  { name: 'Rosa Orchidea', hex: '#EAA5B1' },
  { name: 'Rosso Scarlatto Mononoke', hex: '#A02B2D' },
  { name: 'Siena Antica', hex: '#8C5B4C' }
];

export const SidebarControls: React.FC<SidebarControlsProps> = ({ 
  avatar, 
  onChange,
  savedAvatars,
  onSaveAvatar,
  onLoadAvatar,
  onDeleteAvatar
}) => {
  const [activeTab, setActiveTab] = useState<'sguardo' | 'capelli' | 'fisionomia' | 'abito' | 'scena' | 'preservati'>('sguardo');

  const setRandomPreset = () => {
    const randomChoice = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
    const randomRange = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
    const randomFloatRange = (min: number, max: number): number => parseFloat((Math.random() * (max - min) + min).toFixed(2));

    const faceShapes: AvatarState['faceShape'][] = ['round', 'pointed', 'oval', 'chubby', 'squared'];
    const frontHairs: AvatarState['frontHair'][] = ['bangs_straight', 'bangs_kiki', 'bangs_parted', 'bangs_haku', 'bangs_messy', 'bangs_braided', 'cap_newsboy', 'cap_aviator', 'curls', 'none'];
    const backHairs: AvatarState['backHair'][] = ['bob_short', 'long_flowing', 'pony_high', 'straight_haku', 'wavy_messy', 'short_nausicaa', 'braid_side', 'bun_tight', 'bald'];
    const eyeStyles: AvatarState['eyeStyle'][] = ['wide_curious', 'cool_almond', 'gentle_oval', 'spirited_star', 'sleepy_half', 'determined_bold', 'spirit_no_face'];
    const eyebrowsStyles: AvatarState['eyebrowsStyle'][] = ['thick', 'thin', 'oval_dots', 'expressive_arched'];
    
    const earStyles: AvatarState['earStyle'][] = ['human', 'elf_pointed', 'totoro_fluffy', 'cat_ears_hair'];
    const earrings: AvatarState['earringStyle'][] = ['none', 'emerald_teardrop', 'gold_ring', 'red_bead'];
    
    const noseStyles: AvatarState['noseStyle'][] = ['button', 'hook', 'rounded', 'line', 'snout_totoro', 'pointed_witch'];
    const mouthStyles: AvatarState['mouthStyle'][] = ['happy_open', 'gentle_smile', 'neutral_line', 'surprised_o', 'cheeky_tongue', 'broad_grin', 'determined_pout'];
    const faceMarkingsOptions: AvatarState['faceMarkings'][] = ['none', 'san_paint', 'ashitaka_curse', 'freckles', 'cheek_bandaid'];
    
    const clothingStyles: AvatarState['clothingStyle'][] = ['kiki_tunic', 'chihiro_stripes', 'howl_cardigan', 'sheeta_jewel', 'sailor_uniform', 'adventurers_jacket', 'forest_cape'];
    const backgrounds: AvatarState['background'][] = ['meadow', 'flying_castle', 'cozy_bakery', 'spirit_forest', 'seaside_train', 'starry_night', 'sunset_port'];
    const accessoryStyles: AvatarState['accessoryStyle'][] = ['none', 'kiki_bow', 'sophie_hat', 'totoro_leaf', 'round_glasses', 'goggles_aviator', 'flower_crown'];

    const firstNames = ["Sora", "Koji", "Yuki", "Kaito", "Mei", "Shin", "Naoki", "Arren", "San", "Sheeta", "Kiki", "Sophie", "Chihiro", "Haku", "Jiro", "Fio"];
    const roles = ["Esploratore dei Venti", "Apprendista della Strega", "Custode dello Spirito", "Ingegnere del Castello", "Speditore del Vento", "Farista della Laguna", "Sognatore di Nuvole"];

    const chosenHair = randomChoice(HAIR_COLORS).hex;

    onChange({
      faceShape: randomChoice(faceShapes),
      skinTone: randomChoice(SKIN_COLORS).hex,
      frontHair: randomChoice(frontHairs),
      backHair: randomChoice(backHairs),
      hairColor: chosenHair,
      hairHighlightColor: randomChoice(HIGHLIGHT_COLORS).hex,
      hairHighlightEnabled: Math.random() > 0.6,
      eyeStyle: randomChoice(eyeStyles),
      eyeColor: randomChoice(EYE_COLORS).hex,
      eyeSpacing: randomRange(40, 70),
      eyeY: randomRange(140, 190),
      eyeScaleX: randomFloatRange(0.8, 1.3),
      eyeScaleY: randomFloatRange(0.8, 1.3),
      eyeAngle: randomRange(-12, 12),
      eyebrowsStyle: randomChoice(eyebrowsStyles),
      eyebrowsY: randomRange(-25, -8),
      eyebrowsAngle: randomRange(-15, 15),
      eyebrowsColor: chosenHair,
      earStyle: randomChoice(earStyles),
      earSize: randomFloatRange(0.75, 1.25),
      earringStyle: randomChoice(earrings),
      noseStyle: randomChoice(noseStyles),
      noseY: randomRange(190, 230),
      noseScale: randomFloatRange(0.75, 1.25),
      noseWidth: randomFloatRange(0.75, 1.25),
      mouthStyle: randomChoice(mouthStyles),
      mouthY: randomRange(240, 280),
      mouthScale: randomFloatRange(0.75, 1.25),
      mouthWidth: randomFloatRange(0.75, 1.25),
      faceMarkings: randomChoice(faceMarkingsOptions),
      blushAmount: randomRange(0, 80),
      blushColor: '#EAA5B1',
      clothingStyle: randomChoice(clothingStyles),
      clothingColor: randomChoice(CLOTHING_COLORS).hex,
      accessoryStyle: randomChoice(accessoryStyles),
      background: randomChoice(backgrounds),
      characterName: randomChoice(firstNames),
      characterRole: randomChoice(roles)
    });
  };

  const handleManualSave = () => {
    onSaveAvatar(avatar);
  };

  return (
    <div className="w-full bg-white/90 backdrop-blur-md rounded-3xl p-5 border border-amber-900/10 shadow-lg flex flex-col h-full max-h-[760px] overflow-hidden">
      {/* Title block */}
      <div className="mb-4">
        <h2 className="font-serif text-xl font-extrabold text-amber-950 flex items-center gap-2">
          <Sliders className="w-5 h-5 text-amber-800" />
          <span>Scolpitura Tratti Somatici</span>
        </h2>
        <p className="text-[11px] text-amber-900/50 uppercase tracking-widest font-mono font-bold">
          Configuratore Somatico Autonomo
        </p>
      </div>

      {/* Grid category selector */}
      <div className="grid grid-cols-6 gap-1 bg-amber-900/5 p-1 rounded-2xl mb-4 text-[10px]">
        <button
          onClick={() => setActiveTab('sguardo')}
          className={`py-2 rounded-xl font-bold transition-all flex flex-col items-center gap-1 cursor-pointer ${
            activeTab === 'sguardo' ? 'bg-amber-900 text-amber-50 shadow-sm' : 'text-amber-900/70 hover:bg-amber-900/5'
          }`}
        >
          <Smile className="w-4 h-4" />
          <span>Sguardo</span>
        </button>
        <button
          onClick={() => setActiveTab('capelli')}
          className={`py-2 rounded-xl font-bold transition-all flex flex-col items-center gap-1 cursor-pointer ${
            activeTab === 'capelli' ? 'bg-amber-900 text-amber-50 shadow-sm' : 'text-amber-900/70 hover:bg-amber-900/5'
          }`}
        >
          <Scissors className="w-4 h-4" />
          <span>Capelli</span>
        </button>
        <button
          onClick={() => setActiveTab('fisionomia')}
          className={`py-2 rounded-xl font-bold transition-all flex flex-col items-center gap-1 cursor-pointer ${
            activeTab === 'fisionomia' ? 'bg-amber-900 text-amber-50 shadow-sm' : 'text-amber-900/70 hover:bg-amber-900/5'
          }`}
        >
          <Palette className="w-4 h-4" />
          <span>Viso &amp; Orecchie</span>
        </button>
        <button
          onClick={() => setActiveTab('abito')}
          className={`py-2 rounded-xl font-bold transition-all flex flex-col items-center gap-1 cursor-pointer ${
            activeTab === 'abito' ? 'bg-amber-900 text-amber-50 shadow-sm' : 'text-amber-900/70 hover:bg-amber-900/5'
          }`}
        >
          <Shirt className="w-4 h-4" />
          <span>Vesti</span>
        </button>
        <button
          onClick={() => setActiveTab('scena')}
          className={`py-2 rounded-xl font-bold transition-all flex flex-col items-center gap-1 cursor-pointer ${
            activeTab === 'scena' ? 'bg-amber-900 text-amber-50 shadow-sm' : 'text-amber-900/70 hover:bg-amber-900/5'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Sfondi</span>
        </button>
        <button
          onClick={() => setActiveTab('preservati')}
          className={`py-2 rounded-xl font-bold transition-all flex flex-col items-center gap-1 cursor-pointer relative ${
            activeTab === 'preservati' ? 'bg-amber-900 text-amber-50 shadow-sm' : 'text-amber-800 hover:bg-amber-900/5'
          }`}
        >
          <FolderHeart className="w-4 h-4" />
          <span>Saves ({savedAvatars.length})</span>
        </button>
      </div>

      {/* Tab contents scroll pane */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-4 pb-4">
        {/* SGUARDO */}
        {activeTab === 'sguardo' && (
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-[14px] text-amber-950 uppercase tracking-wider">Morfologia Occhi</h3>
            
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { id: 'wide_curious', label: 'Spalancati (Chihiro/Ponyo)' },
                { id: 'cool_almond', label: 'Al mandorla (Howl/Haku)' },
                { id: 'gentle_oval', label: 'Gentile (Sheeta/Nausicaä)' },
                { id: 'spirited_star', label: 'Esuberante (Kiki/San)' },
                { id: 'sleepy_half', label: 'Sonnacchioso (Senza fretta)' },
                { id: 'determined_bold', label: 'Determinante (Fiero)' },
                { id: 'spirit_no_face', label: 'Massa di Spirito' }
              ].map((style) => (
                <button
                  key={style.id}
                  onClick={() => onChange({ eyeStyle: style.id as AvatarState['eyeStyle'] })}
                  className={`p-2 rounded-xl border text-[11px] font-bold text-left transition-all cursor-pointer leading-snug ${
                    avatar.eyeStyle === style.id 
                      ? 'border-amber-950 bg-amber-900/5 text-amber-950 ring-2 ring-amber-900/10' 
                      : 'border-amber-900/10 text-amber-900/80 hover:border-amber-900/40'
                  }`}
                >
                  👁️ {style.label}
                </button>
              ))}
            </div>

            {/* Occhi Sliders */}
            <div className="p-3 bg-stone-50 rounded-2xl border border-amber-900/5 space-y-3.5">
              {/* Spacing */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-amber-950">
                  <span>Distanza tra gli Occhi (Occhio-Occhio)</span>
                  <span className="text-[11px] font-mono opacity-70">{avatar.eyeSpacing}px</span>
                </div>
                <input
                  type="range"
                  min="36"
                  max="74"
                  value={avatar.eyeSpacing}
                  onChange={(e) => onChange({ eyeSpacing: parseInt(e.target.value) })}
                  className="w-full accent-amber-900 cursor-ew-resize h-1 bg-amber-900/15"
                />
              </div>

              {/* Height */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-amber-950">
                  <span>Altezza Verticale Occhi</span>
                  <span className="text-[11px] font-mono opacity-70">{avatar.eyeY}px</span>
                </div>
                <input
                  type="range"
                  min="130"
                  max="200"
                  value={avatar.eyeY}
                  onChange={(e) => onChange({ eyeY: parseInt(e.target.value) })}
                  className="w-full accent-amber-900 cursor-ew-resize h-1 bg-amber-900/15"
                />
              </div>

              {/* ScaleX */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-amber-950">
                  <span>Espansione Larghezza (Scale X)</span>
                  <span className="text-[11px] font-mono opacity-70">x{avatar.eyeScaleX}</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="150"
                  value={avatar.eyeScaleX * 100}
                  onChange={(e) => onChange({ eyeScaleX: parseInt(e.target.value) / 100 })}
                  className="w-full accent-amber-900 cursor-ew-resize h-1 bg-amber-900/15"
                />
              </div>

              {/* ScaleY */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-amber-950">
                  <span>Spessore Altezza (Scale Y)</span>
                  <span className="text-[11px] font-mono opacity-70">x{avatar.eyeScaleY}</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="150"
                  value={avatar.eyeScaleY * 100}
                  onChange={(e) => onChange({ eyeScaleY: parseInt(e.target.value) / 100 })}
                  className="w-full accent-amber-900 cursor-ew-resize h-1 bg-amber-900/15"
                />
              </div>

              {/* Rotazione / Tilt */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-amber-950">
                  <span>Inclinazione Iride/Inquadratura (Angolo)</span>
                  <span className="text-[11px] font-mono opacity-70">{avatar.eyeAngle}°</span>
                </div>
                <input
                  type="range"
                  min="-20"
                  max="20"
                  value={avatar.eyeAngle}
                  onChange={(e) => onChange({ eyeAngle: parseInt(e.target.value) })}
                  className="w-full accent-amber-900 cursor-ew-resize h-1 bg-amber-900/15"
                />
              </div>
            </div>

            {/* Colore Occhi Swatch */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-amber-950">Seleziona Tinta Iride</label>
              <div className="flex flex-wrap gap-2">
                {EYE_COLORS.map((col) => (
                  <button
                    key={col.hex}
                    onClick={() => onChange({ eyeColor: col.hex })}
                    className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer relative flex items-center justify-center ${
                      avatar.eyeColor.toLowerCase() === col.hex.toLowerCase() 
                        ? 'border-amber-900 scale-110 shadow-sm' 
                        : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: col.hex }}
                    title={col.name}
                  >
                    {avatar.eyeColor.toLowerCase() === col.hex.toLowerCase() && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white opacity-85" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* SOPRACCIGLIA */}
            <div className="space-y-3 pt-3 border-t border-amber-900/10">
              <h4 className="font-serif font-bold text-xs text-amber-950 uppercase tracking-widest">Sopracciglia Espressive</h4>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { id: 'thick', label: 'Folte' },
                  { id: 'thin', label: 'Sottili' },
                  { id: 'oval_dots', label: 'Monacali' },
                  { id: 'expressive_arched', label: 'Arcuate' }
                ].map((brow) => (
                  <button
                    key={brow.id}
                    onClick={() => onChange({ eyebrowsStyle: brow.id as AvatarState['eyebrowsStyle'] })}
                    className={`p-1.5 rounded-xl border text-[10px] font-bold text-center transition-all cursor-pointer ${
                      avatar.eyebrowsStyle === brow.id 
                        ? 'border-amber-950 bg-amber-900/5 text-amber-950' 
                        : 'border-amber-900/10 text-amber-900/80 hover:border-amber-900/40'
                    }`}
                  >
                    {brow.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-amber-950">Altezza</span>
                  <input
                    type="range"
                    min="-30"
                    max="-5"
                    value={avatar.eyebrowsY}
                    onChange={(e) => onChange({ eyebrowsY: parseInt(e.target.value) })}
                    className="w-full accent-amber-900 cursor-ew-resize h-1 bg-amber-900/15"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-amber-950">Inclinazione</span>
                  <input
                    type="range"
                    min="-25"
                    max="25"
                    value={avatar.eyebrowsAngle}
                    onChange={(e) => onChange({ eyebrowsAngle: parseInt(e.target.value) })}
                    className="w-full accent-amber-900 cursor-ew-resize h-1 bg-amber-900/15"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CAPELLI (Combinatorio Profondo) */}
        {activeTab === 'capelli' && (
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-[14px] text-amber-950 uppercase tracking-wider">Combinatore della Chioma</h3>
            <p className="text-[11px] text-amber-900/60 leading-relaxed font-sans">
              Combina liberamente la frangetta frontale con il taglio posteriore per generare un'acconciatura ghibli unica al mondo!
            </p>

            <div className="space-y-3 p-3.5 bg-stone-50 rounded-2xl border border-amber-900/5">
              {/* Front hair frangia */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-amber-950 block">💆 Frangia / Parte Anteriore delle fibre</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { id: 'bangs_straight', label: 'Bangs Dritta (Sophie)' },
                    { id: 'bangs_kiki', label: 'Bangs Sfalsata (Kiki)' },
                    { id: 'bangs_parted', label: 'Riga Centrale' },
                    { id: 'bangs_haku', label: 'Punta Tradizionale (Haku)' },
                    { id: 'bangs_messy', label: 'Messy Ribelle (San)' },
                    { id: 'bangs_braided', label: 'Riserba Intrecciata' },
                    { id: 'cap_newsboy', label: 'Berretto Coppola' },
                    { id: 'cap_aviator', label: 'Elmetto Aeronauta' },
                    { id: 'curls', label: 'Boccoli Ricci' },
                    { id: 'none', label: 'Nessuna Coda / Frontale' }
                  ].map((front) => (
                    <button
                      key={front.id}
                      onClick={() => onChange({ frontHair: front.id as AvatarState['frontHair'] })}
                      className={`p-1.5 rounded-xl border text-[10px] font-bold text-left transition-all cursor-pointer ${
                        avatar.frontHair === front.id 
                          ? 'border-amber-950 bg-amber-900/10 text-amber-950' 
                          : 'border-amber-900/10 text-amber-900/75 hover:border-amber-900/40'
                      }`}
                    >
                      {front.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Back hair taglio posteriore */}
              <div className="space-y-2 pt-2 border-t border-amber-900/5">
                <label className="text-xs font-bold text-amber-950 block">💇 Volume Posteriore / Codino</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { id: 'bob_short', label: 'Bob Classico Curvo' },
                    { id: 'long_flowing', label: 'Massa Lunga Ondulata' },
                    { id: 'pony_high', label: 'Coda Alta Libera' },
                    { id: 'straight_haku', label: 'Caschetto Netto (Haku)' },
                    { id: 'wavy_messy', label: 'Voluminosi Spettinati' },
                    { id: 'short_nausicaa', label: 'Taglio Corto Nausicaä' },
                    { id: 'braid_side', label: 'Intreccio Laterale' },
                    { id: 'bun_tight', label: 'Chignon Raccolto' },
                    { id: 'bald', label: 'Capelli Cortissimi / Calvo' }
                  ].map((back) => (
                    <button
                      key={back.id}
                      onClick={() => onChange({ backHair: back.id as AvatarState['backHair'] })}
                      className={`p-1.5 rounded-xl border text-[10px] font-bold text-left transition-all cursor-pointer ${
                        avatar.backHair === back.id 
                          ? 'border-amber-950 bg-amber-900/10 text-amber-950' 
                          : 'border-amber-900/10 text-amber-900/75 hover:border-amber-900/40'
                      }`}
                    >
                      {back.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Colore Capelli Swatches */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-amber-950 block">Tinta della Massa Capillare</label>
              <div className="flex flex-wrap gap-2">
                {HAIR_COLORS.map((col) => (
                  <button
                    key={col.hex}
                    onClick={() => onChange({ hairColor: col.hex, eyebrowsColor: col.hex })}
                    className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer relative flex items-center justify-center ${
                      avatar.hairColor.toLowerCase() === col.hex.toLowerCase() 
                        ? 'border-amber-900 scale-110 shadow-sm' 
                        : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: col.hex }}
                    title={col.name}
                  >
                    {avatar.hairColor.toLowerCase() === col.hex.toLowerCase() && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Highlights riflessi extra */}
            <div className="p-3 bg-stone-50 rounded-2xl border border-amber-900/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-950">Attiva Riflessi Sfalsati (Highlight)</span>
                <input
                  type="checkbox"
                  checked={avatar.hairHighlightEnabled}
                  onChange={(e) => onChange({ hairHighlightEnabled: e.target.checked })}
                  className="w-4 h-4 rounded text-amber-900 accent-amber-900 cursor-pointer"
                />
              </div>

              {avatar.hairHighlightEnabled && (
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-amber-900/60 block">Colore Riflesso</span>
                  <div className="flex flex-wrap gap-1.5">
                    {HIGHLIGHT_COLORS.map((col) => (
                      <button
                        key={col.hex}
                        onClick={() => onChange({ hairHighlightColor: col.hex })}
                        className={`w-6 h-6 rounded-md border transition-transform cursor-pointer relative ${
                          avatar.hairHighlightColor.toLowerCase() === col.hex.toLowerCase() 
                            ? 'border-amber-900 scale-110 shadow-sm' 
                            : 'border-transparent hover:scale-105'
                        }`}
                        style={{ backgroundColor: col.hex }}
                        title={col.name}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* FISIONOMIA ED ORECCHIE */}
        {activeTab === 'fisionomia' && (
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-[14px] text-amber-950 uppercase tracking-wider">Ovale del Viso &amp; Orecchie</h3>

            {/* Face Shape */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-amber-900 block">Forma Fisiognomica della Mandibola</label>
              <div className="grid grid-cols-5 gap-1">
                {[
                  { id: 'round', label: 'Tondo' },
                  { id: 'pointed', label: 'Affilato' },
                  { id: 'oval', label: 'Ovale' },
                  { id: 'chubby', label: 'Paffuto' },
                  { id: 'squared', label: 'Squadrato' }
                ].map((shape) => (
                  <button
                    key={shape.id}
                    onClick={() => onChange({ faceShape: shape.id as AvatarState['faceShape'] })}
                    className={`py-2 px-1 rounded-xl border text-[10px] font-bold text-center transition-all cursor-pointer truncate ${
                      avatar.faceShape === shape.id 
                        ? 'border-amber-950 bg-amber-900/5 text-amber-950' 
                        : 'border-amber-900/10 text-amber-900/80 hover:border-amber-900/40'
                    }`}
                  >
                    {shape.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Incarnato */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-amber-950 block">Saturazione Incarnato (Skin Tone)</label>
              <div className="flex flex-wrap gap-2">
                {SKIN_COLORS.map((col) => (
                  <button
                    key={col.hex}
                    onClick={() => onChange({ skinTone: col.hex })}
                    className={`w-7 h-7 rounded-xl border transition-transform cursor-pointer relative ${
                      avatar.skinTone.toLowerCase() === col.hex.toLowerCase() 
                        ? 'border-amber-900 ring-2 ring-amber-900/20 scale-110' 
                        : 'border-amber-950/20 hover:scale-105'
                    }`}
                    style={{ backgroundColor: col.hex }}
                    title={col.name}
                  />
                ))}
              </div>
            </div>

            {/* SEGNI PARTICOLARI ED ARROSSAMENTO */}
            <div className="p-3 bg-stone-50 rounded-2xl border border-amber-900/5 space-y-3">
              <label className="text-xs font-bold text-amber-950 block">Dettagli Guerrieri ed Anime</label>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'none', label: 'Nessuno' },
                  { id: 'san_paint', label: 'Pittura Rossa (San)' },
                  { id: 'ashitaka_curse', label: 'Infezione Viola (Ashitaka)' },
                  { id: 'freckles', label: 'Lentiggini Rustiche' },
                  { id: 'cheek_bandaid', label: 'Cerotto Anime' }
                ].map((marking) => (
                  <button
                    key={marking.id}
                    onClick={() => onChange({ faceMarkings: marking.id as AvatarState['faceMarkings'] })}
                    className={`p-1.5 rounded-xl border text-[10px] font-bold text-left transition-all cursor-pointer ${
                      avatar.faceMarkings === marking.id 
                        ? 'border-amber-950 bg-amber-900/10 text-amber-950' 
                        : 'border-amber-900/10 text-amber-900/75 hover:border-amber-900/40'
                    }`}
                  >
                    ✨ {marking.label}
                  </button>
                ))}
              </div>

              <div className="space-y-1 pt-2">
                <div className="flex justify-between text-xs font-semibold text-amber-950">
                  <span>Saturazione Rossore Emotivo (Blush)</span>
                  <span className="text-[11px] font-mono opacity-70">{avatar.blushAmount}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="90"
                  value={avatar.blushAmount}
                  onChange={(e) => onChange({ blushAmount: parseInt(e.target.value) })}
                  className="w-full accent-amber-900 cursor-ew-resize h-1 bg-amber-900/15"
                />
              </div>
            </div>

            {/* ORECCHIE PROFONDO */}
            <div className="p-3 bg-stone-50 rounded-2xl border border-amber-900/5 space-y-3.5">
              <h4 className="font-serif font-bold text-xs text-amber-950 uppercase tracking-widest">Configuratore Orecchie</h4>
              
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'human', label: 'Umane classiche' },
                  { id: 'elf_pointed', label: 'Elfiche d’altipiano' },
                  { id: 'totoro_fluffy', label: 'Totoro Fluttuanti' },
                  { id: 'cat_ears_hair', label: 'Kitten felino (Jiji)' }
                ].map((ear) => (
                  <button
                    key={ear.id}
                    onClick={() => onChange({ earStyle: ear.id as AvatarState['earStyle'] })}
                    className={`p-1.5 rounded-xl border text-[10px] font-bold text-left transition-all cursor-pointer ${
                      avatar.earStyle === ear.id 
                        ? 'border-amber-950 bg-amber-900/10 text-amber-950' 
                        : 'border-amber-900/10 text-amber-900/75 hover:border-amber-900/40'
                    }`}
                  >
                    👂 {ear.label}
                  </button>
                ))}
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-amber-950">
                  <span>Scala Coefficiente Volume Orecchie</span>
                  <span className="text-[11px] font-mono opacity-70">x{avatar.earSize}</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="150"
                  value={avatar.earSize * 100}
                  onChange={(e) => onChange({ earSize: parseInt(e.target.value) / 100 })}
                  className="w-full accent-amber-900 cursor-ew-resize h-1 bg-amber-900/15"
                />
              </div>

              {/* Earrings pendenti */}
              <div className="space-y-1.5 pt-1 border-t border-amber-900/5">
                <span className="text-[11px] font-bold text-amber-950 block">Pendente del lobo o orecchino</span>
                <div className="grid grid-cols-4 gap-1">
                  {[
                    { id: 'none', label: 'Nessuno' },
                    { id: 'emerald_teardrop', label: 'Howl' },
                    { id: 'gold_ring', label: 'Anello' },
                    { id: 'red_bead', label: 'Perla' }
                  ].map((ring) => (
                    <button
                      key={ring.id}
                      onClick={() => onChange({ earringStyle: ring.id as AvatarState['earringStyle'] })}
                      className={`p-1 rounded-lg border text-[10px] font-bold text-center transition-all cursor-pointer ${
                        avatar.earringStyle === ring.id 
                          ? 'border-amber-950 bg-amber-900/10 text-amber-950' 
                          : 'border-amber-900/10 text-amber-900/75 hover:border-amber-900/40'
                      }`}
                    >
                      {ring.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* NASO E BOCCA COMPLETI */}
            <div className="p-3 bg-stone-50 rounded-2xl border border-amber-900/5 space-y-3.5">
              <h4 className="font-serif font-bold text-xs text-amber-950 uppercase tracking-widest">Struttura Naso</h4>
              
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'hook', label: 'Ghibli classic' },
                  { id: 'button', label: 'Mei bottone' },
                  { id: 'rounded', label: 'Morbido' },
                  { id: 'line', label: 'Inchiostro' },
                  { id: 'snout_totoro', label: 'Spirito Totoro' },
                  { id: 'pointed_witch', label: 'Strega' }
                ].map((nose) => (
                  <button
                    key={nose.id}
                    onClick={() => onChange({ noseStyle: nose.id as AvatarState['noseStyle'] })}
                    className={`p-1 rounded-xl border text-[10px] font-bold text-left transition-all cursor-pointer ${
                      avatar.noseStyle === nose.id 
                        ? 'border-amber-950 bg-amber-900/10 text-amber-950' 
                        : 'border-amber-900/10 text-amber-900/75 hover:border-amber-900/40'
                    }`}
                  >
                    👃 {nose.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-amber-950">Scala</span>
                  <input
                    type="range"
                    min="60"
                    max="140"
                    value={avatar.noseScale * 100}
                    onChange={(e) => onChange({ noseScale: parseInt(e.target.value) / 100 })}
                    className="w-full accent-amber-900 cursor-ew-resize h-1"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-amber-950">Larghezza</span>
                  <input
                    type="range"
                    min="60"
                    max="140"
                    value={avatar.noseWidth * 100}
                    onChange={(e) => onChange({ noseWidth: parseInt(e.target.value) / 100 })}
                    className="w-full accent-amber-900 cursor-ew-resize h-1"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-amber-950">Altezza Y</span>
                  <input
                    type="range"
                    min="180"
                    max="240"
                    value={avatar.noseY}
                    onChange={(e) => onChange({ noseY: parseInt(e.target.value) })}
                    className="w-full accent-amber-900 cursor-ew-resize h-1"
                  />
                </div>
              </div>
            </div>

            <div className="p-3 bg-stone-50 rounded-2xl border border-amber-900/5 space-y-3.5">
              <h4 className="font-serif font-bold text-xs text-amber-950 uppercase tracking-widest">Dettaglio Bocca</h4>
              
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'gentle_smile', label: 'Gentile Sorriso' },
                  { id: 'happy_open', label: 'Bocca Aperta Ridente' },
                  { id: 'neutral_line', label: 'Determinazione Linea' },
                  { id: 'surprised_o', label: 'Forte Stupore (O)' },
                  { id: 'cheeky_tongue', label: 'Linguetta insolente' },
                  { id: 'broad_grin', label: 'Sogghigno Selvatico (Totoro)' },
                  { id: 'determined_pout', label: 'Prua Scontenta' }
                ].map((mouth) => (
                  <button
                    key={mouth.id}
                    onClick={() => onChange({ mouthStyle: mouth.id as AvatarState['mouthStyle'] })}
                    className={`p-1.5 rounded-xl border text-[10px] font-bold text-left transition-all cursor-pointer ${
                      avatar.mouthStyle === mouth.id 
                        ? 'border-amber-950 bg-amber-900/10 text-amber-950' 
                        : 'border-amber-900/10 text-amber-900/75 hover:border-amber-900/40'
                    }`}
                  >
                    👄 {mouth.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-amber-950">Scala</span>
                  <input
                    type="range"
                    min="60"
                    max="140"
                    value={avatar.mouthScale * 100}
                    onChange={(e) => onChange({ mouthScale: parseInt(e.target.value) / 100 })}
                    className="w-full accent-amber-900 cursor-ew-resize h-1"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-amber-950">Larghezza</span>
                  <input
                    type="range"
                    min="60"
                    max="140"
                    value={avatar.mouthWidth * 100}
                    onChange={(e) => onChange({ mouthWidth: parseInt(e.target.value) / 100 })}
                    className="w-full accent-amber-900 cursor-ew-resize h-1"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-amber-950">Altezza Y</span>
                  <input
                    type="range"
                    min="230"
                    max="290"
                    value={avatar.mouthY}
                    onChange={(e) => onChange({ mouthY: parseInt(e.target.value) })}
                    className="w-full accent-amber-900 cursor-ew-resize h-1"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ABITO */}
        {activeTab === 'abito' && (
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-[14px] text-amber-950 uppercase tracking-wider">Scelta d'Abito e Decorazioni</h3>

            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'kiki_tunic', label: 'Toga Larga da Strega (Kiki)' },
                { id: 'chihiro_stripes', label: 'T-Shirt a Righe (Chihiro)' },
                { id: 'howl_cardigan', label: 'Cardigan a Quadri (Howl)' },
                { id: 'sheeta_jewel', label: 'Tunica con Ciondolo (Sheeta)' },
                { id: 'sailor_uniform', label: 'Ghetta alla Marinara' },
                { id: 'adventurers_jacket', label: 'Giacchetto Avventuriero' },
                { id: 'forest_cape', label: 'Mantello della Foresta' }
              ].map((style) => (
                <button
                  key={style.id}
                  onClick={() => onChange({ clothingStyle: style.id as AvatarState['clothingStyle'] })}
                  className={`p-2.5 rounded-xl border text-[11px] font-bold text-left transition-all cursor-pointer leading-snug ${
                    avatar.clothingStyle === style.id 
                      ? 'border-amber-950 bg-amber-900/5 text-amber-950 ring-2 ring-amber-900/10' 
                      : 'border-amber-900/10 text-amber-900/80 hover:border-amber-900/40'
                  }`}
                >
                  🧥 {style.label}
                </button>
              ))}
            </div>

            {/* Colori Abito Swatches */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-amber-950 block">Tonalità Primaria dell'Abito</label>
              <div className="flex flex-wrap gap-2.5">
                {CLOTHING_COLORS.map((col) => (
                  <button
                    key={col.hex}
                    onClick={() => onChange({ clothingColor: col.hex })}
                    className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer relative flex items-center justify-center ${
                      avatar.clothingColor.toLowerCase() === col.hex.toLowerCase() 
                        ? 'border-amber-900 scale-110 shadow-sm' 
                        : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: col.hex }}
                    title={col.name}
                  >
                    {avatar.clothingColor.toLowerCase() === col.hex.toLowerCase() && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* ACCESSORI COMPLETI */}
            <div className="space-y-3 pt-3 border-t border-amber-900/10">
              <h4 className="font-serif font-bold text-xs text-amber-950 uppercase tracking-widest">Copricapi ed Accessori</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'none', label: 'Nessun Accessorio' },
                  { id: 'kiki_bow', label: 'Grande Fiocco di Kiki' },
                  { id: 'sophie_hat', label: 'Cappello Straw di Sophie' },
                  { id: 'totoro_leaf', label: 'Foglia d’Ombrello Totoro' },
                  { id: 'round_glasses', label: 'Occhiali Tondi D’ottone' },
                  { id: 'goggles_aviator', label: 'Occhialoni Volo Aviatrice' },
                  { id: 'flower_crown', label: 'Fascia di Margherite di Campo' }
                ].map((acc) => (
                  <button
                    key={acc.id}
                    onClick={() => onChange({ accessoryStyle: acc.id as AvatarState['accessoryStyle'] })}
                    className={`p-2.5 rounded-xl border text-[11px] font-bold text-left transition-all cursor-pointer ${
                      avatar.accessoryStyle === acc.id 
                        ? 'border-amber-950 bg-amber-900/5 text-amber-950 ring-2 ring-amber-900/10' 
                        : 'border-amber-900/10 text-amber-900/80 hover:border-amber-900/40'
                    }`}
                  >
                    👒 {acc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CONFIGURATORE SPAZIALE DEGLI ACCESSORI */}
            {avatar.accessoryStyle !== 'none' && (
              <div className="mt-4 p-3.5 bg-amber-900/5 rounded-2xl border border-amber-900/10 space-y-3">
                <div>
                  <h5 className="font-serif font-bold text-xs text-amber-950 uppercase tracking-widest flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-amber-800" />
                    <span>Regola Posizionamento Sulla Testa</span>
                  </h5>
                  <p className="text-[10px] text-amber-900/60 leading-tight mt-0.5">
                    Sposta, ridimensiona o ruota l'accessorio per adattarlo a qualsiasi taglio di capelli!
                  </p>
                </div>

                {/* X Shift */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-bold text-amber-950">
                    <span>Spostamento Orizzontale (Asse X)</span>
                    <span className="text-[10px] font-mono opacity-80">{(avatar.accessoryX ?? 0) > 0 ? `+${avatar.accessoryX}` : avatar.accessoryX}px</span>
                  </div>
                  <input
                    type="range"
                    min="-60"
                    max="60"
                    value={avatar.accessoryX ?? 0}
                    onChange={(e) => onChange({ accessoryX: parseInt(e.target.value) })}
                    className="w-full accent-amber-900 cursor-ew-resize h-1 bg-amber-900/15"
                  />
                </div>

                {/* Y Shift */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-bold text-amber-950">
                    <span>Spostamento Verticale (Asse Y)</span>
                    <span className="text-[10px] font-mono opacity-80">{(avatar.accessoryY ?? 0) > 0 ? `+${avatar.accessoryY}` : avatar.accessoryY}px</span>
                  </div>
                  <input
                    type="range"
                    min="-60"
                    max="60"
                    value={avatar.accessoryY ?? 0}
                    onChange={(e) => onChange({ accessoryY: parseInt(e.target.value) })}
                    className="w-full accent-amber-900 cursor-ew-resize h-1 bg-amber-900/15"
                  />
                </div>

                {/* Scale */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-bold text-amber-950">
                    <span>Scala Dimensionale (Dimensione)</span>
                    <span className="text-[10px] font-mono opacity-80">{Math.round((avatar.accessoryScale ?? 1.0) * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="180"
                    value={Math.round((avatar.accessoryScale ?? 1.0) * 100)}
                    onChange={(e) => onChange({ accessoryScale: parseFloat((parseInt(e.target.value) / 100).toFixed(2)) })}
                    className="w-full accent-amber-900 cursor-ew-resize h-1 bg-amber-900/15"
                  />
                </div>

                {/* Rotation */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-bold text-amber-950">
                    <span>Inclinazione (Rotazione)</span>
                    <span className="text-[10px] font-mono opacity-80">{avatar.accessoryRotation ?? 0}°</span>
                  </div>
                  <input
                    type="range"
                    min="-90"
                    max="90"
                    value={avatar.accessoryRotation ?? 0}
                    onChange={(e) => onChange({ accessoryRotation: parseInt(e.target.value) })}
                    className="w-full accent-amber-900 cursor-ew-resize h-1 bg-amber-900/15"
                  />
                </div>

                {/* Reset button */}
                <button
                  type="button"
                  onClick={() => onChange({ accessoryX: 0, accessoryY: 0, accessoryScale: 1.0, accessoryRotation: 0 })}
                  className="w-full py-1.5 bg-amber-900/10 hover:bg-amber-900/15 text-amber-950 rounded-xl text-[10px] font-bold transition-all cursor-pointer text-center"
                >
                  Centra ed Equilibra Posizione
                </button>
              </div>
            )}
          </div>
        )}

        {/* SFONDI E TESTI */}
        {activeTab === 'scena' && (
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-[14px] text-amber-950 uppercase tracking-wider">Paesaggio Acquorellato</h3>
            
            <div className="space-y-2">
              {[
                { id: 'meadow', title: '🍃 Il Prato degli Zefiri', desc: 'Soffi d’aria calda su distese erbose e cieli limpidi d’estate.' },
                { id: 'flying_castle', title: '🏰 Castello ad Alta Quota', desc: 'Nuvole color barbabietola e cime alpine d’arancio.' },
                { id: 'cozy_bakery', title: '🍞 Forno della Buona Strega', desc: 'Mobili caldi di panificio, pagnotte sfornate e candele.' },
                { id: 'spirit_forest', title: '🌲 Laguna Sacra del Kodama', desc: 'Raggi solari boschivi, muschio verde e guardiani curiosi.' },
                { id: 'seaside_train', title: '🚂 Vagone dello Specchio d’Acqua', desc: 'Tratti ferroviari allagati lambiti da onde celesti e quiete.' },
                { id: 'starry_night', title: '🌙 Notte dei Desideri Cadenti', desc: 'Luna crescent dorata sopra vette montane addormentate.' },
                { id: 'sunset_port', title: '⚓ Porto d’Attracco al Sunset', desc: 'Cielo porpora, navi mercantili e riflessi ambrati sull’acqua.' },
                { id: 'transparent', title: '🏁 Sfondo Trasparente (Veloce)', desc: 'Rimuove lo sfondo per salvare in formato PNG trasparente o SVG pulito.' }
              ].map((bg) => (
                <button
                  key={bg.id}
                  onClick={() => onChange({ background: bg.id as AvatarState['background'] })}
                  className={`w-full p-3 rounded-2xl border text-left transition-all flex flex-col gap-0.5 cursor-pointer ${
                    avatar.background === bg.id 
                      ? 'border-amber-950 bg-amber-900/5 text-amber-950 ring-2 ring-amber-900/10' 
                      : 'border-amber-900/10 text-amber-900/80 hover:border-amber-900/40'
                  }`}
                >
                  <span className="text-xs font-bold text-amber-950">{bg.title}</span>
                  <span className="text-[10px] text-amber-900/60 leading-relaxed">{bg.desc}</span>
                </button>
              ))}
            </div>

            <div className="space-y-3 pt-3 border-t border-amber-900/10">
              <h4 className="font-serif font-bold text-xs text-amber-950 uppercase tracking-widest">Identità Narrativa</h4>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-amber-900/70">Nome</span>
                  <input
                    type="text"
                    value={avatar.characterName}
                    onChange={(e) => onChange({ characterName: e.target.value })}
                    className="w-full px-3 py-2 bg-amber-900/5 text-amber-950 text-xs font-bold border border-amber-900/10 rounded-xl focus:outline-none focus:border-amber-900/30"
                    placeholder="Nome"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-amber-900/70">Ruolo Poeco</span>
                  <input
                    type="text"
                    value={avatar.characterRole}
                    onChange={(e) => onChange({ characterRole: e.target.value })}
                    className="w-full px-3 py-2 bg-amber-900/5 text-amber-950 text-xs font-bold border border-amber-900/10 rounded-xl focus:outline-none focus:border-amber-900/30"
                    placeholder="Ruolo"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PRESERVATI (PRESETS & SAVED SLOTS MANAGER) */}
        {activeTab === 'preservati' && (
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-[14px] text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
              <FolderHeart className="w-4 h-4 text-amber-800" />
              <span>Saves Locali ({savedAvatars.length})</span>
            </h3>
            <p className="text-[11px] text-amber-900/60 leading-relaxed font-sans">
              Salva il tuo personaggio in uno slot locale per non perderlo mai. Puoi clonare o caricare diverse varianti dell'avatar in qualsiasi momento!
            </p>

            {/* Save Current button */}
            <button
              onClick={handleManualSave}
              className="w-full py-3 bg-amber-900 hover:bg-amber-950 text-amber-50 rounded-2xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4 text-amber-300" />
              <span>Salva la Personalizzazione Corrente</span>
            </button>

            {savedAvatars.length === 0 ? (
              <div className="text-center p-8 bg-amber-900/5 border border-dashed border-amber-900/15 rounded-2xl">
                <Heart className="w-7 h-7 text-amber-900/25 mx-auto mb-2 animate-pulse" />
                <p className="text-xs text-amber-900/50 font-bold">Nessun avatar salvato in locale</p>
                <p className="text-[10px] text-amber-900/35 mt-1 font-sans">Clicca sul bottone marrone sopra per iniziare!</p>
              </div>
            ) : (
              <div className="space-y-2">
                {savedAvatars.map((slot) => (
                  <div 
                    key={slot.id}
                    className="p-3 bg-stone-50 border border-amber-900/10 rounded-2xl flex items-center justify-between gap-3 hover:border-amber-900/35 transition-all text-left"
                  >
                    <div className="flex-1 min-w-0" onClick={() => onLoadAvatar(slot)}>
                      <h4 className="text-xs font-bold text-amber-950 truncate cursor-pointer hover:text-amber-700">
                        ✨ {slot.characterName || "Senza Nome"}
                      </h4>
                      <p className="text-[10px] text-amber-900/50 truncate cursor-pointer font-sans">
                        {slot.characterRole || "Viandante delle valli"}
                      </p>
                      <span className="text-[8px] font-mono font-bold uppercase py-0.5 px-1.5 bg-amber-900/5 text-amber-900/70 rounded mt-1 inline-block">
                        {slot.faceShape} • {slot.frontHair}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onLoadAvatar(slot)}
                        className="py-1 px-2.5 bg-amber-900/5 hover:bg-amber-900/10 text-amber-950 rounded-lg text-[10px] font-extrabold cursor-pointer transition-all"
                        title="Applica questo fisionomia"
                      >
                        Carica
                      </button>
                      <button
                        onClick={() => onDeleteAvatar(slot.id)}
                        className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg cursor-pointer transition-all"
                        title="Elimina"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer controls: Combinazione Casuale */}
      <div className="pt-3 border-t border-amber-900/10 flex justify-between items-center bg-white/5">
        <button
          onClick={setRandomPreset}
          className="text-xs font-extrabold text-amber-900/80 hover:text-amber-950 flex items-center gap-1.5 cursor-pointer py-2 px-3 rounded-xl hover:bg-amber-900/5 transition-all"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Combinazione Casuale</span>
        </button>
        <span className="text-[9px] font-mono text-amber-900/40 uppercase tracking-wider font-bold">
          AUTONOMOUS STUDIO
        </span>
      </div>
    </div>
  );
};
