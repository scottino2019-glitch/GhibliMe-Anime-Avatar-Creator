import React, { useState, useEffect, useRef } from 'react';
import { AvatarState } from './types';
import { GhibliAvatar } from './components/GhibliAvatar';
import { SidebarControls } from './components/SidebarControls';
import { GhibliStory } from './components/GhibliStory';
import { 
  Download, 
  Wind, 
  Music, 
  Dices,
  Save,
  Palette
} from 'lucide-react';
import { motion } from 'motion/react';

const INITIAL_STATE: AvatarState = {
  id: 'initial',
  faceShape: 'oval',
  skinTone: '#FFF1E6',
  
  // front & back hair
  frontHair: 'bangs_straight',
  backHair: 'bob_short',
  hairColor: '#4F352E',
  hairHighlightColor: '#FFE082',
  hairHighlightEnabled: false,
  
  // eyes
  eyeStyle: 'wide_curious',
  eyeColor: '#3A2E2B',
  eyeSpacing: 52,
  eyeY: 165,
  eyeScaleX: 1.0,
  eyeScaleY: 1.0,
  eyeAngle: 0,
  
  // eyebrows
  eyebrowsStyle: 'thin',
  eyebrowsY: -16,
  eyebrowsAngle: 2,
  eyebrowsColor: '#4F352E',
  
  // ears
  earStyle: 'human',
  earSize: 1.0,
  earringStyle: 'none',
  
  // nose
  noseStyle: 'hook',
  noseY: 205,
  noseScale: 1.0,
  noseWidth: 1.0,
  
  // mouth
  mouthStyle: 'gentle_smile',
  mouthY: 250,
  mouthScale: 1.0,
  mouthWidth: 1.0,
  
  // markings
  faceMarkings: 'none',
  blushAmount: 35,
  blushColor: '#EAA5B1',
  
  // clothes & accessories
  clothingStyle: 'kiki_tunic',
  clothingColor: '#1D263B',
  accessoryStyle: 'kiki_bow',
  accessoryX: 0,
  accessoryY: 0,
  accessoryScale: 1.0,
  accessoryRotation: 0,
  
  // scene
  background: 'meadow',
  characterName: 'Sora',
  characterRole: 'Sognatrice dei Prati'
};

export default function App() {
  const [avatar, setAvatar] = useState<AvatarState>(INITIAL_STATE);
  
  // Local storage multiple saved slots list
  const [savedAvatars, setSavedAvatars] = useState<AvatarState[]>(() => {
    try {
      const stored = localStorage.getItem('ghibli_saved_slots');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Ambient Music / Sound Engine Refs
  const [isAmbiencePlaying, setIsAmbiencePlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const windSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null);
  const windGainRef = useRef<GainNode | null>(null);
  const chimeTimerRef = useRef<any>(null);

  // Stop ambient synthesizer on unmount
  useEffect(() => {
    return () => {
      stopAmbience();
    };
  }, []);

  const updateAvatar = (update: Partial<AvatarState>) => {
    setAvatar((prev) => {
      const next = { ...prev, ...update };
      // If the hair color changed, keep eyebrows color aligned unless customized
      if (update.hairColor && !update.eyebrowsColor) {
        next.eyebrowsColor = update.hairColor;
      }
      return next;
    });
  };

  // Convert current state to a random preset combination
  const triggerRandomizer = () => {
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
    const roles = ["Esploratore delle Nuvole", "Apprendista della Strega", "Custode degli Spiriti", "Ingegnere del Castello", "Speditore del Vento", "Faro della Laguna"];

    const chosenColor = randomChoice([
      '#1E1F29', '#4F352E', '#783A20', '#ECC06A', '#2E6F56', '#BBCCD4', '#3D5A80', '#E05A47'
    ]);

    setAvatar({
      id: avatar.id,
      faceShape: randomChoice(faceShapes),
      skinTone: randomChoice(['#FFF1E6', '#FFE5D9', '#E8C2AC', '#D8B29C']),
      frontHair: randomChoice(frontHairs),
      backHair: randomChoice(backHairs),
      hairColor: chosenColor,
      hairHighlightColor: randomChoice(['#FFE082', '#FF80AB', '#80DEEA', '#FFFFFF']),
      hairHighlightEnabled: Math.random() > 0.6,
      eyeStyle: randomChoice(eyeStyles),
      eyeColor: randomChoice(['#3A2E2B', '#4A90E2', '#3CA978', '#CCA43B', '#22252A']),
      eyeSpacing: randomRange(42, 68),
      eyeY: randomRange(145, 185),
      eyeScaleX: randomFloatRange(0.85, 1.25),
      eyeScaleY: randomFloatRange(0.85, 1.25),
      eyeAngle: randomRange(-15, 15),
      eyebrowsStyle: randomChoice(eyebrowsStyles),
      eyebrowsY: randomRange(-22, -10),
      eyebrowsAngle: randomRange(-15, 15),
      eyebrowsColor: chosenColor,
      earStyle: randomChoice(earStyles),
      earSize: randomFloatRange(0.8, 1.2),
      earringStyle: randomChoice(earrings),
      noseStyle: randomChoice(noseStyles),
      noseY: randomRange(195, 225),
      noseScale: randomFloatRange(0.85, 1.2),
      noseWidth: randomFloatRange(0.85, 1.2),
      mouthStyle: randomChoice(mouthStyles),
      mouthY: randomRange(245, 275),
      mouthScale: randomFloatRange(0.85, 1.2),
      mouthWidth: randomFloatRange(0.85, 1.2),
      faceMarkings: randomChoice(faceMarkingsOptions),
      blushAmount: randomRange(0, 70),
      blushColor: '#EAA5B1',
      clothingStyle: randomChoice(clothingStyles),
      clothingColor: randomChoice(['#1D263B', '#4B8B7B', '#FFBC0A', '#EAA5B1', '#8C5B4C']),
      accessoryStyle: randomChoice(accessoryStyles),
      accessoryX: 0,
      accessoryY: 0,
      accessoryScale: 1.0,
      accessoryRotation: 0,
      background: randomChoice(backgrounds),
      characterName: randomChoice(firstNames),
      characterRole: randomChoice(roles)
    });
  };

  // Local storage save, load and deletes
  const handleSaveAvatar = (current: AvatarState) => {
    const list = [...savedAvatars];
    const index = list.findIndex((a) => a.id === current.id);
    
    // Create copy with fresh unique ID if it was 'initial'
    const itemToSave = { 
      ...current, 
      id: current.id === 'initial' ? Date.now().toString() : current.id 
    };

    if (index > -1 && current.id !== 'initial') {
      list[index] = itemToSave;
    } else {
      list.unshift(itemToSave);
    }

    setSavedAvatars(list);
    localStorage.setItem('ghibli_saved_slots', JSON.stringify(list));
    setAvatar(itemToSave);
  };

  const handleLoadAvatar = (selected: AvatarState) => {
    setAvatar(selected);
  };

  const handleDeleteAvatar = (id: string) => {
    const list = savedAvatars.filter((a) => a.id !== id);
    setSavedAvatars(list);
    localStorage.setItem('ghibli_saved_slots', JSON.stringify(list));
    
    // Reset if active is deleted
    if (avatar.id === id) {
      setAvatar({ ...INITIAL_STATE, id: 'initial' });
    }
  };

  // Reset to initial clean canvas state
  const handleResetToDefault = () => {
    setAvatar({ ...INITIAL_STATE, id: 'initial' });
  };

  // Export current SVG rendering as standalone file
  const handleDownloadSVG = () => {
    const svgElement = document.getElementById('ghibli-avatar-svg');
    if (!svgElement) return;

    // Standardize namespaces and export
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);
    
    // Create download trigger
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = `${avatar.characterName.toLowerCase().replace(/\s+/g, '_')}_avatar.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(svgUrl);
  };

  // Export current rendering as PNG or JPEG in high-definition 1200x1200px
  const handleDownloadRaster = (format: 'png' | 'jpeg') => {
    const svgElement = document.getElementById('ghibli-avatar-svg');
    if (!svgElement) return;

    // Standardize namespaces and export
    const serializer = new XMLSerializer();
    let svgString = serializer.serializeToString(svgElement);

    // Give it fixed dimensions for rasterization block rendering
    svgString = svgString.replace('<svg id="ghibli-avatar-svg"', '<svg id="ghibli-avatar-svg" width="1200" height="1200"');

    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);

    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 1200;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Handle JPEG or solid fills if requested
        if (format === 'jpeg') {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, 1200, 1200);
        } else if (avatar.background !== 'transparent') {
          // If PNG is requested with a scenery, let's keep canvas clean and paint as-is
        }

        ctx.drawImage(image, 0, 0, 1200, 1200);

        try {
          const rasterUrl = canvas.toDataURL(`image/${format}`, format === 'jpeg' ? 0.95 : undefined);
          const downloadLink = document.createElement('a');
          downloadLink.href = rasterUrl;
          downloadLink.download = `${avatar.characterName.toLowerCase().replace(/\s+/g, '_')}_avatar.${format}`;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        } catch (err) {
          console.error('Errore durante la rasterizzazione raster:', err);
        }
      }
      URL.revokeObjectURL(svgUrl);
    };
    image.onerror = (e) => {
      console.error('Errore nel caricamento SVG per la rasterizzazione:', e);
      URL.revokeObjectURL(svgUrl);
    };
    image.src = svgUrl;
  };

  // Immersive nature wind synthesizer
  const toggleAmbience = () => {
    if (isAmbiencePlaying) {
      stopAmbience();
    } else {
      startAmbience();
    }
  };

  const startAmbience = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // 1. Synth gentle blowing meadow wind using synthesized White Noise
      const bufferSize = ctx.sampleRate * 4;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noiseNode = ctx.createBufferSource();
      noiseNode.buffer = buffer;
      noiseNode.loop = true;
      windSourceRef.current = noiseNode;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 350;
      filter.Q.value = 2.0;

      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.06;
      lfoRef.current = lfo;

      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 200;
      
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      const gainNode = ctx.createGain();
      gainNode.gain.value = 0.04;
      windGainRef.current = gainNode;

      noiseNode.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      lfo.start();
      noiseNode.start();

      // 2. Wind chimes via pentatonic magical notes
      const playRandomChime = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'suspended') return;
        
        const chime = audioCtxRef.current.createOscillator();
        const chimeGain = audioCtxRef.current.createGain();
        
        chime.type = 'sine';
        const notes = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50];
        chime.frequency.value = notes[Math.floor(Math.random() * notes.length)];

        chimeGain.gain.setValueAtTime(0, audioCtxRef.current.currentTime);
        chimeGain.gain.linearRampToValueAtTime(0.012, audioCtxRef.current.currentTime + 0.05);
        chimeGain.gain.exponentialRampToValueAtTime(0.00001, audioCtxRef.current.currentTime + 2.5);

        chime.connect(chimeGain);
        chimeGain.connect(audioCtxRef.current.destination);
        
        chime.start();
        chime.stop(audioCtxRef.current.currentTime + 3);

        const delay = Math.random() * 6000 + 4000;
        chimeTimerRef.current = setTimeout(playRandomChime, delay);
      };

      playRandomChime();
      setIsAmbiencePlaying(true);
    } catch (e) {
      console.warn('Web Audio initialization error:', e);
    }
  };

  const stopAmbience = () => {
    try {
      if (chimeTimerRef.current) {
        clearTimeout(chimeTimerRef.current);
        chimeTimerRef.current = null;
      }
      if (windSourceRef.current) {
        windSourceRef.current.stop();
        windSourceRef.current.disconnect();
        windSourceRef.current = null;
      }
      if (lfoRef.current) {
        lfoRef.current.stop();
        lfoRef.current.disconnect();
        lfoRef.current = null;
      }
      if (windGainRef.current) {
        windGainRef.current.disconnect();
        windGainRef.current = null;
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
    } catch (e) {
      console.error(e);
    }
    setIsAmbiencePlaying(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF6ED] pb-16 flex flex-col items-center">
      {/* Background overlay */}
      <div className="absolute top-0 left-0 w-full h-[550px] bg-gradient-to-b from-amber-900/5 to-transparent pointer-events-none -z-10" />

      {/* Top navbar */}
      <div className="w-full max-w-6xl px-6 py-4 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <span className="text-xl">🍃</span>
          <span className="font-serif text-sm font-extrabold text-amber-950 uppercase tracking-widest">
            Studio Ghibli
          </span>
        </div>

        {/* Ambient audio player trigger */}
        <button
          onClick={toggleAmbience}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all shadow-sm border cursor-pointer ${
            isAmbiencePlaying 
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
              : 'bg-white hover:bg-stone-50 text-amber-900 border-amber-900/10'
          }`}
          title={isAmbiencePlaying ? 'Spegni Brezza' : 'Attiva Brezza d’Acquerello'}
        >
          {isAmbiencePlaying ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              >
                <Wind className="w-4 h-4 text-emerald-600" />
              </motion.div>
              <span>Sussurro delle Valli Attivo</span>
            </>
          ) : (
            <>
              <Music className="w-4 h-4 text-amber-800" />
              <span>Attiva Suoni di Natura</span>
            </>
          )}
        </button>
      </div>

      {/* Main visual header */}
      <header className="max-w-2xl px-6 text-center mt-3 mb-8 select-none">
        <h1 className="font-serif text-3.5xl sm:text-5xl font-extrabold text-[#2C1D16] tracking-tight leading-tight">
          Ghibli Avatar Studio
        </h1>
        <p className="mt-3 text-sm text-[#5C4D44] leading-relaxed max-w-lg mx-auto font-sans font-medium">
          Personalizza con estrema profondità l'ovale somatico, l'allineamento dei capelli, lo sguardo elicotteristico e i segni particolari d’avventura. <strong className="text-amber-900">Un'esperienza pura al 100% autonoma senza IA</strong>.
        </p>
      </header>

      {/* Workspace Grid */}
      <main className="w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT PANEL: Canvas and real-time parchment Story (takes 5 cols) */}
        <section className="lg:col-span-5 flex flex-col items-center gap-5 lg:sticky lg:top-6">
          <div className="w-full bg-white/70 backdrop-blur-md rounded-3xl p-5 border border-amber-900/5 shadow-xl flex flex-col items-center">
            
            {/* SVG Renderer widget */}
            <GhibliAvatar avatar={avatar} />

            {/* Title card display */}
            <div className="w-full text-center mt-4">
              <h2 className="font-serif text-2xl font-extrabold text-amber-950 truncate">
                {avatar.characterName || 'Senza Nome'}
              </h2>
              <p className="text-xs font-bold text-amber-800/80 mt-0.5 uppercase tracking-widest">
                🎒 {avatar.characterRole || 'Esploratore delle Valli'}
              </p>
            </div>

            {/* Quick Actions toolbar */}
            <div className="w-full grid grid-cols-4 gap-1.5 mt-5 pt-4 border-t border-amber-950/5">
              <button
                onClick={handleDownloadSVG}
                className="py-2.5 px-1 bg-amber-50 hover:bg-amber-100 text-amber-950 rounded-xl text-[10px] font-bold transition-all border border-amber-900/10 flex flex-col items-center justify-center gap-1 cursor-pointer"
                title="Esporta in formato vettoriale pulito SVG"
              >
                <Download className="w-3.5 h-3.5 text-amber-800" />
                <span>SVG</span>
              </button>

              <button
                onClick={() => handleDownloadRaster('png')}
                className="py-2.5 px-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-950 rounded-xl text-[10px] font-bold transition-all border border-emerald-900/15 flex flex-col items-center justify-center gap-1 cursor-pointer"
                title="Esporta ad alta definizione PNG (sfondo trasparente supportato)"
              >
                <Download className="w-3.5 h-3.5 text-emerald-800" />
                <span>PNG</span>
              </button>

              <button
                onClick={() => handleDownloadRaster('jpeg')}
                className="py-2.5 px-1 bg-sky-50 hover:bg-sky-100 text-sky-950 rounded-xl text-[10px] font-bold transition-all border border-sky-900/15 flex flex-col items-center justify-center gap-1 cursor-pointer"
                title="Esporta ad alta definizione JPEG"
              >
                <Download className="w-3.5 h-3.5 text-sky-800" />
                <span>JPEG</span>
              </button>

              <button
                onClick={() => handleSaveAvatar(avatar)}
                className="py-2.5 px-1 bg-amber-900 hover:bg-amber-950 text-amber-50 rounded-xl text-[10px] font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer shadow-sm"
                title="Salva questa fisionomia in locale"
              >
                <Save className="w-3.5 h-3.5 text-amber-300" />
                <span>Salva</span>
              </button>
            </div>

            {/* Prominent Randomizer button */}
            <button
              onClick={triggerRandomizer}
              className="w-full mt-2.5 py-3 bg-gradient-to-r from-amber-800 to-amber-900 hover:from-amber-900 hover:to-amber-950 text-amber-50 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              title="Combina casualmente tutti i tratti"
            >
              <Dices className="w-4 h-4 text-amber-200 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Genera Personaggio Casuale</span>
            </button>

            {/* Back to template defaults */}
            <button
              onClick={handleResetToDefault}
              className="mt-3.5 text-[10px] font-sans font-bold text-amber-900/40 hover:text-amber-900/70 transition-colors uppercase tracking-wider"
            >
              Ripristina tela originaria
            </button>
          </div>

          {/* Autonomous instant parchment story weaver */}
          <GhibliStory avatar={avatar} />
        </section>

        {/* RIGHT PANEL: Fine Sliders, Somatic details, and Slots controller (takes 7 cols) */}
        <section className="lg:col-span-7 h-full">
          <SidebarControls 
            avatar={avatar} 
            onChange={updateAvatar}
            savedAvatars={savedAvatars}
            onSaveAvatar={handleSaveAvatar}
            onLoadAvatar={handleLoadAvatar}
            onDeleteAvatar={handleDeleteAvatar}
          />
        </section>

      </main>

      <footer className="w-full max-w-4xl px-6 mt-16 text-center border-t border-amber-950/5 pt-8 mx-auto text-xs text-amber-900/45 leading-relaxed max-w-xl">
        <p className="font-serif italic text-balance">
          "I passi nel vento non lasciano impronte sulla roccia, ma tesseranno sempre storie che attendono occhi gentili per risvegliarsi dal riposo."
        </p>
        <p className="mt-3 font-mono uppercase tracking-widest text-[9px] font-extrabold">
          Disegnatore Di Fisionomie Ghibli • 100% Autonomo offline
        </p>
      </footer>
    </div>
  );
}
