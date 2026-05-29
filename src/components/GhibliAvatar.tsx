import React from 'react';
import { AvatarState } from '../types';

interface GhibliAvatarProps {
  avatar: AvatarState;
}

export const GhibliAvatar: React.FC<GhibliAvatarProps> = ({ avatar }) => {
  const {
    faceShape,
    skinTone,
    frontHair,
    backHair,
    hairColor,
    hairHighlightColor,
    hairHighlightEnabled,
    eyeStyle,
    eyeColor,
    eyeSpacing,
    eyeY,
    eyeScaleX,
    eyeScaleY,
    eyeAngle,
    eyebrowsStyle,
    eyebrowsY,
    eyebrowsAngle,
    eyebrowsColor,
    earStyle,
    earSize,
    earringStyle,
    noseStyle,
    noseY,
    noseScale,
    noseWidth,
    mouthStyle,
    mouthY,
    mouthScale,
    mouthWidth,
    faceMarkings,
    blushAmount,
    blushColor,
    clothingStyle,
    clothingColor,
    accessoryStyle,
    accessoryX,
    accessoryY,
    accessoryScale,
    accessoryRotation,
    background,
  } = avatar;

  // Render Background SVG Elements
  const renderBackground = () => {
    switch (background) {
      case 'meadow':
        return (
          <>
            <linearGradient id="sky-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8FDAFF" />
              <stop offset="60%" stopColor="#CBE6FF" />
              <stop offset="100%" stopColor="#E6F2FF" />
            </linearGradient>
            <rect width="400" height="400" fill="url(#sky-grad)" />
            <circle cx="320" cy="80" r="120" fill="#FFFBE6" opacity="0.4" filter="blur(20px)" />
            <g opacity="0.85">
              <path d="M 50 120 Q 80 90 120 100 Q 150 70 200 90 Q 240 70 270 100 Q 310 90 330 120 Z" fill="#FFFFFF" filter="blur(1px)" />
              <path d="M 120 130 Q 145 110 180 120 Q 210 95 240 115 Q 265 105 285 130 Z" fill="#FFF5E6" opacity="0.7" />
              <path d="M -20 80 Q 20 50 70 65 Q 110 50 140 80 Z" fill="#FFFFFF" opacity="0.5" filter="blur(2px)" />
            </g>
            <path d="M -10 320 Q 110 260 220 300 T 410 280 L 410 410 L -10 410 Z" fill="#71BE54" />
            <path d="M -10 350 Q 80 300 180 340 T 410 310 L 410 410 L -10 410 Z" fill="#5AA83E" />
            <path d="M -10 380 Q 130 350 260 380 T 410 350 L 410 410 L -10 410 Z" fill="#4B8E31" />
            <g opacity="0.9">
              <circle cx="50" cy="340" r="3" fill="#FFE57F" />
              <circle cx="45" cy="342" r="2" fill="#FF80AB" />
              <circle cx="55" cy="343" r="2" fill="#FFF" />
              <circle cx="160" cy="320" r="3" fill="#FFF" />
              <circle cx="155" cy="322" r="2" fill="#B39DDB" />
              <circle cx="165" cy="318" r="2" fill="#FFE57F" />
              <circle cx="280" cy="350" r="4" fill="#FF80AB" />
              <circle cx="274" cy="353" r="2" fill="#FFF" />
              <circle cx="285" cy="348" r="3" fill="#B39DDB" />
            </g>
          </>
        );

      case 'flying_castle':
        return (
          <>
            <linearGradient id="sunset-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E2A4A" />
              <stop offset="40%" stopColor="#4A3B6B" />
              <stop offset="70%" stopColor="#A8546E" />
              <stop offset="100%" stopColor="#F99F75" />
            </linearGradient>
            <rect width="400" height="400" fill="url(#sunset-grad)" />
            <g opacity="0.35" transform="translate(180, 100) scale(0.65)">
              <rect x="40" y="30" width="30" height="50" rx="2" fill="#3D2952" />
              <polygon points="40,30 55,5 70,30" fill="#29193B" />
              <rect x="80" y="45" width="20" height="35" rx="1" fill="#3D2952" />
              <polygon points="80,45 90,25 100,45" fill="#29193B" />
              <path d="M20 70 Q 70 50 130 70 L 135 110 L 15 110 Z" fill="#534066" />
            </g>
            <g opacity="0.8">
              <path d="M -20 300 Q 40 240 100 270 Q 160 220 240 250 Q 300 230 360 270 Q 420 250 430 310 L 430 410 L -20 410 Z" fill="#6B416B" />
              <path d="M -20 330 Q 50 280 130 310 Q 190 270 270 290 Q 320 280 370 310 Q 420 290 430 350 L 430 410 L -20 410 Z" fill="#CC6B73" />
              <path d="M -20 360 Q 60 330 140 350 Q 210 320 290 340 Q 340 330 380 360 T 430 380 L 430 410 L -20 410 Z" fill="#F4A582" />
            </g>
            <g opacity="0.7">
              <polygon points="50,150 53,153 50,156 47,153" fill="#FFFAD1" />
              <polygon points="340,110 344,114 340,118 336,114" fill="#FFFAD1" />
              <polygon points="280,210 282,212 280,214 278,212" fill="#FFFAD1" />
            </g>
          </>
        );

      case 'cozy_bakery':
        return (
          <>
            <rect width="400" height="400" fill="#3D291F" />
            <path d="M -10 200 L 410 160" stroke="#2B1D16" strokeWidth="4" />
            <path d="M -10 250 L 410 220" stroke="#2B1D16" strokeWidth="4" />
            <radialGradient id="oven-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFE0B2" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#3D291F" stopOpacity="0" />
            </radialGradient>
            <rect width="400" height="400" fill="url(#oven-glow)" />
            <g opacity="0.8">
              <rect x="25" y="40" width="130" height="8" rx="2" fill="#5F4232" />
              <rect x="25" y="48" width="10" height="15" fill="#4B3326" />
              <rect x="135" y="48" width="10" height="15" fill="#4B3326" />
              <path d="M 40 40 Q 40 18 55 18 T 70 40 Z" fill="#CD7F32" opacity="0.9" />
              <circle cx="85" cy="30" r="8" fill="#FFF3E0" />
              <path d="M 105 40 L 125 40 L 123 25 L 107 25 Z" fill="#D7CCC8" />
              <path d="M50 14 Q52 5 48 0" stroke="#FFF" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" />
            </g>
            <g opacity="0.5">
              <circle cx="150" cy="180" r="2.5" fill="#FFF" />
              <circle cx="170" cy="220" r="1.5" fill="#FFF" />
              <circle cx="220" cy="140" r="2" fill="#FFF" />
              <circle cx="280" cy="190" r="3" fill="#FFF" />
            </g>
          </>
        );

      case 'spirit_forest':
        return (
          <>
            <linearGradient id="forest-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0E232E" />
              <stop offset="60%" stopColor="#0B403B" />
              <stop offset="100%" stopColor="#1C5E48" />
            </linearGradient>
            <rect width="400" height="400" fill="url(#forest-grad)" />
            <path d="M -40 400 L -10 180 Q 20 120 -10 -20 L -40 -20 Z" fill="#05151B" opacity="0.7" />
            <path d="M 440 400 L 410 150 Q 380 90 420 -20 L 440 -20 Z" fill="#05151B" opacity="0.7" />
            <polygon points="400,-10 120,410 240,410 400,100" fill="#E0F2F1" opacity="0.15" />
            <polygon points="350,-10 40,410 150,410 400,50" fill="#E0F2F1" opacity="0.08" />
            <g>
              <circle cx="70" cy="220" r="10" fill="#C5FFF4" opacity="0.5" filter="blur(6px)" />
              <circle cx="340" cy="170" r="12" fill="#C5FFF4" opacity="0.5" filter="blur(8px)" />
              <circle cx="280" cy="300" r="8" fill="#C5FFF4" opacity="0.4" filter="blur(4px)" />
              <g transform="translate(68, 215) scale(0.9)">
                <ellipse cx="2" cy="4" rx="4" ry="3.5" fill="#E0F7FA" />
                <circle cx="-0.5" cy="3" r="0.7" fill="#263238" />
                <circle cx="4.5" cy="3" r="0.7" fill="#263238" />
                <circle cx="2" cy="7" r="1" fill="#263238" />
              </g>
              <g transform="translate(338, 163)">
                <ellipse cx="2" cy="4" rx="5" ry="4" fill="#E0F7FA" />
                <circle cx="-1" cy="3" r="0.8" fill="#263238" />
                <circle cx="5" cy="3" r="0.8" fill="#263238" />
                <circle cx="2" cy="7" r="1.2" fill="#263238" />
              </g>
            </g>
            <g>
              <circle cx="200" cy="250" r="3" fill="#A7FFEB" opacity="0.6" filter="blur(1px)" />
              <circle cx="100" cy="150" r="2" fill="#A7FFEB" opacity="0.5" />
              <circle cx="310" cy="270" r="4" fill="#E0F2F1" opacity="0.7" filter="blur(1px)" />
              <circle cx="120" cy="330" r="1.5" fill="#E0F2F1" opacity="0.4" />
            </g>
          </>
        );

      case 'starry_night':
        return (
          <>
            <linearGradient id="starry-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0B0F1A" />
              <stop offset="60%" stopColor="#151A30" />
              <stop offset="100%" stopColor="#252F54" />
            </linearGradient>
            <rect width="400" height="400" fill="url(#starry-grad)" />
            {/* Giant Crescent Ghibli Moon */}
            <circle cx="300" cy="100" r="42" fill="#FFFAD6" filter="blur(2px)" />
            <circle cx="286" cy="88" r="40" fill="url(#starry-grad)" />
            {/* Soft background mountains */}
            <path d="M -20 400 L 110 310 L 250 370 L 420 290 L 420 410 L -20 410 Z" fill="#0D1222" />
            <path d="M -20 400 L 60 350 L 180 390 L 320 330 L 420 380 L 420 410 L -20 410 Z" fill="#141E36" opacity="0.5" />
            {/* Twinkly stars */}
            <circle cx="50" cy="70" r="1.5" fill="#FFF" opacity="0.8" />
            <circle cx="110" cy="120" r="2" fill="#FFE082" opacity="0.9" />
            <circle cx="160" cy="60" r="1" fill="#FFF" opacity="0.4" />
            <circle cx="220" cy="150" r="1.5" fill="#FFF" opacity="0.75" />
            <circle cx="70" cy="190" r="2" fill="#FFF" opacity="0.9" />
            <polygon points="120,40 122,43 125,40 122,37" fill="#FFF" opacity="0.8" />
            <polygon points="340,160 341,162 343,160 341,158" fill="#FFF" opacity="0.9" />
          </>
        );

      case 'sunset_port':
        return (
          <>
            <linearGradient id="port-sky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B3D64" />
              <stop offset="40%" stopColor="#8C526A" />
              <stop offset="80%" stopColor="#D97A62" />
              <stop offset="100%" stopColor="#F4BF86" />
            </linearGradient>
            <rect width="400" height="400" fill="url(#port-sky)" />
            {/* Calm sea */}
            <rect x="0" y="260" width="400" height="140" fill="#A8525F" />
            <linearGradient id="port-sea" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A8525F" />
              <stop offset="50%" stopColor="#B3625C" />
              <stop offset="100%" stopColor="#C88E75" />
            </linearGradient>
            <rect x="0" y="260" width="400" height="140" fill="url(#port-sea)" />
            {/* Distant pier / sailboats */}
            <g opacity="0.5" transform="translate(40, 210) scale(0.7)">
              <rect x="200" y="55" width="80" height="15" fill="#423E3A" />
              <line x1="220" y1="58" x2="220" y2="15" stroke="#423E3A" strokeWidth="2" />
              <polygon points="220,15 235,35 220,40" fill="#FAFAF8" />
              <line x1="260" y1="58" x2="260" y2="20" stroke="#423E3A" strokeWidth="2" />
              <polygon points="260,20 272,35 260,40" fill="#FAFAF8" />
            </g>
            {/* Sun ball near horizon */}
            <circle cx="100" cy="260" r="18" fill="#FFE0B2" filter="blur(1px)" />
            {/* Light trails */}
            <path d="M 0 263 H 400" stroke="#FFF7C5" strokeWidth="1.5" opacity="0.4" />
            <path d="M 60 270 H 140" stroke="#FFF" strokeWidth="2" opacity="0.5" />
          </>
        );

      case 'seaside_train':
        return (
          <>
            <linearGradient id="train-sky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4F89C8" />
              <stop offset="50%" stopColor="#82C0E9" />
              <stop offset="100%" stopColor="#BEDDF2" />
            </linearGradient>
            <rect width="400" height="400" fill="url(#train-sky)" />
            <rect x="0" y="240" width="400" height="160" fill="#3D92C4" />
            <linearGradient id="sea-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3D92C4" />
              <stop offset="35%" stopColor="#55ACD4" />
              <stop offset="100%" stopColor="#76CEE8" />
            </linearGradient>
            <rect x="0" y="240" width="400" height="160" fill="url(#sea-grad)" />
            <path d="M 0 242 H 400" stroke="#E6F5FF" strokeWidth="2" opacity="0.8" />
            <path d="M 80 250 H 220" stroke="#FFF" strokeWidth="1" opacity="0.5" />
            <path d="M 280 247 H 340" stroke="#FFF" strokeWidth="1.2" opacity="0.6" />
            <path d="M 10 260 H 90" stroke="#FFF" strokeWidth="1" opacity="0.3" />
            <path d="M 0 0 H 400 V 40 H 0 Z" fill="#C25A3F" opacity="0.85" />
            <rect x="0" y="0" width="30" height="400" fill="#993D2C" />
            <rect x="370" y="0" width="30" height="400" fill="#993D2C" />
            <rect x="25" y="0" width="5" height="400" fill="#6E2417" />
            <rect x="370" y="0" width="5" height="400" fill="#6E2417" />
            <rect x="0" y="360" width="400" height="40" fill="#803022" />
            <rect x="0" y="360" width="400" height="5" fill="#4D1510" />
            <g transform="translate(140, 225) scale(0.6)" opacity="0.8">
              <path d="M 10 25 Q 40 5 80 25 Z" fill="#3D7D52" />
              <path d="M 60 25 Q 80 15 110 25 Z" fill="#2E663F" />
              <circle cx="25" cy="22" r="2" fill="#E68A00" opacity="0.7" />
            </g>
          </>
        );
      case 'transparent':
      default:
        return null;
    }
  };

  return (
    <div 
      className={`relative w-full aspect-square border-4 border-amber-900/10 rounded-3xl overflow-hidden shadow-xl max-w-[440px] mx-auto select-none ${
        background === 'transparent' ? 'bg-transparent' : 'bg-orange-50'
      }`}
      style={background === 'transparent' ? {
        backgroundImage: 'linear-gradient(45deg, #e4e4e4 25%, transparent 25%), linear-gradient(-45deg, #e4e4e4 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e4e4e4 75%), linear-gradient(-45deg, transparent 75%, #e4e4e4 75%)',
        backgroundSize: '16px 16px',
        backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0',
        backgroundColor: '#ffffff'
      } : undefined}
    >
      {/* PAPER & DRAWING TEXTURE OVERLAY */}
      <div 
        className="absolute inset-0 z-30 pointer-events-none opacity-[0.16] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Ambient dust / vignetting */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-radial-gradient from-transparent to-amber-900/5 mix-blend-color-burn" />

      {/* SVG Canvas */}
      <svg
        id="ghibli-avatar-svg"
        viewBox="0 0 400 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.18" />
          </filter>
          
          <filter id="cheek-blur">
            <feGaussianBlur stdDeviation="8" />
          </filter>

          <linearGradient id="neck-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={skinTone} />
            <stop offset="100%" stopColor="#7E5F52" stopOpacity="0.25" />
          </linearGradient>

          <pattern id="striped-pattern" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="40" height="40" fill="#FFFFFF" />
            <rect width="20" height="40" fill={clothingColor} />
          </pattern>
        </defs>

        {/* LAYER 1: Background Scenery */}
        <g id="bg-scene-layer">{renderBackground()}</g>

        {/* LAYER 2: Hair Back */}
        <g id="hair-back-layer" fill={hairColor} filter="url(#soft-shadow)">
          {backHair === 'bob_short' && (
            <path d="M 115 170 C 105 220 100 270 120 295 C 135 305 265 305 280 295 C 300 270 295 220 285 170 Z" />
          )}
          {backHair === 'long_flowing' && (
            <path d="M 120 170 C 95 230 80 300 95 345 C 110 370 290 370 305 345 C 320 300 305 230 280 170 Z" />
          )}
          {backHair === 'pony_high' && (
            <>
              {/* ponytail roots base */}
              <path d="M 124 170 Q 115 240 135 270 Q 200 288 265 270 Q 285 240 276 170 Z" />
              {/* thick bouncy ribbon high anime pony */}
              <g transform="translate(200, 115) rotate(-15)">
                <path d="M -16 0 C -45 -35 -35 -80 -12 -100 C -28 -60 -12 -35 12 -45 C 28 -25 18 0 0 0" />
                <path d="M -6 5 C 24 -45 44 -65 34 -85 C 18 -55 2 -35 -8 5" opacity="0.8" fill={hairHighlightEnabled ? hairHighlightColor : hairColor} />
                <ellipse cx="0" cy="0" rx="10" ry="6" fill="#E63946" stroke="#2B1D16" strokeWidth="1.5" />
              </g>
            </>
          )}
          {backHair === 'straight_haku' && (
            <path d="M 118 170 L 105 290 Q 200 310 295 290 L 282 170 Z" />
          )}
          {backHair === 'wavy_messy' && (
            <path d="M 112 165 C 80 190 75 250 100 285 C 120 310 280 310 300 285 C 325 250 320 190 288 165 C 270 140 130 140 112 165 Z" />
          )}
          {backHair === 'short_nausicaa' && (
            <path d="M 124 170 C 110 220 110 255 125 275 Q 200 285 275 275 C 290 255 290 220 276 170 Z" />
          )}
          {backHair === 'braid_side' && (
            <>
              <path d="M 122 170 C 115 220 115 260 145 275 Q 200 282 255 275 C 285 260 285 220 278 170 Z" />
              {/* Braid looping around shoulder */}
              <g transform="translate(110, 240) rotate(-12)">
                <path d="M 5 0 C -12 15 12 28 0 38 C -12 48 12 58 0 68 C -12 78 12 88 0 98 C -12 105 5 115 0 120 L 8 116 C 16 102 -5 92 5 82 C 16 72 -5 62 5 52 C 16 42 -5 32 5 22 Z" />
                <circle cx="0" cy="118" r="4.5" fill="#E63946" stroke="#2B1D16" strokeWidth="1" />
              </g>
            </>
          )}
          {backHair === 'bun_tight' && (
            <>
              {/* cute circular hair bun */}
              <circle cx="200" cy="100" r="30" />
              <path d="M 122 170 C 112 220 115 260 135 275 Q 200 290 265 275 C 285 260 288 220 278 170 Z" />
            </>
          )}
        </g>

        {/* LAYER 3: Neck, Ears & Earings */}
        <g id="neck-and-ears-layer" stroke="#2B1D16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Neck with gradient shadow */}
          <path d="M 170 240 L 170 310 Q 200 325 230 310 L 230 240 Z" fill="url(#neck-grad)" />
          {/* Subtle Ghibli clavicle guidelines */}
          <path d="M 183 290 Q 200 305 217 290" fill="none" stroke="#2B1D16" strokeWidth="1.2" opacity="0.4" />

          {/* EARS with independent EarStyle & size scaling */}
          {/* Left Ear */}
          <g transform={`translate(118, 195) scale(${earSize})`}>
            {earStyle === 'human' && (
              <>
                <circle cx="0" cy="0" r="16" fill={skinTone} />
                <path d="M -2 -6 Q -12 0 -2 10" fill="none" stroke="#2B1D16" strokeWidth="1.2" opacity="0.5" />
              </>
            )}
            {earStyle === 'elf_pointed' && (
              <>
                <path d="M 6 -12 C -6 -13 -25 -25 -2 8 C 8 15 10 0 6 -12 Z" fill={skinTone} />
                <path d="M 4 -10 Q -10 -9 -1 5" fill="none" stroke="#2B1D16" strokeWidth="1.2" opacity="0.5" />
              </>
            )}
            {earStyle === 'totoro_fluffy' && (
              <>
                <path d="M 6 -12 C 1 -35 -20 -35 -14 -2 C -11 12 -4 6 6 -12 Z" fill={hairColor} />
                <path d="M -9 -18 C -14 -28 -5 -25 -5 -10" fill="none" stroke="#2B1D16" strokeWidth="1.2" opacity="0.4" />
              </>
            )}
            {earStyle === 'cat_ears_hair' && (
              <>
                {/* fluffy pointed kitten caps */}
                <path d="M 8 -15 C -4 -40 -35 -20 -10 -2 C -5 6 6 5 8 -15 Z" fill={hairColor} />
                <path d="M -4 -18 C -12 -30 -22 -15 -10 -5" fill="#FF80AB" opacity="0.6" />
              </>
            )}
          </g>

          {/* Right Ear */}
          <g transform={`translate(282, 195) scale(${earSize})`}>
            {earStyle === 'human' && (
              <>
                <circle cx="0" cy="0" r="16" fill={skinTone} />
                <path d="M 2 -6 Q 12 0 2 10" fill="none" stroke="#2B1D16" strokeWidth="1.2" opacity="0.5" />
              </>
            )}
            {earStyle === 'elf_pointed' && (
              <>
                <path d="M -6 -12 C 6 -13 25 -25 2 8 C -8 15 -10 0 -6 -12 Z" fill={skinTone} />
                <path d="M -4 -10 Q 10 -9 1 5" fill="none" stroke="#2B1D16" strokeWidth="1.2" opacity="0.5" />
              </>
            )}
            {earStyle === 'totoro_fluffy' && (
              <>
                <path d="M -6 -12 C -1 -35 20 -35 14 -2 C 11 12 4 6 -6 -12 Z" fill={hairColor} />
                <path d="M 9 -18 C 14 -28 5 -25 5 -10" fill="none" stroke="#2B1D16" strokeWidth="1.2" opacity="0.4" />
              </>
            )}
            {earStyle === 'cat_ears_hair' && (
              <>
                <path d="M -8 -15 C 4 -40 35 -20 10 -2 C 5 6 -6 5 -8 -15 Z" fill={hairColor} />
                <path d="M 4 -18 C 12 -30 22 -15 10 -5" fill="#FF80AB" opacity="0.6" />
              </>
            )}
          </g>

        </g>

        {/* LAYER 4: Face Core shapes (somatic fisionomies) */}
        <g id="face-layer" stroke="#2B1D16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {faceShape === 'round' && (
            <path d="M 120 180 C 118 200 120 235 140 255 C 160 275 240 275 260 255 C 280 235 282 200 280 180 C 278 150 260 120 200 120 C 140 120 122 150 120 180 Z" fill={skinTone} />
          )}
          {faceShape === 'pointed' && (
            <path d="M 120 180 C 118 200 122 225 140 248 C 160 272 195 282 200 283 C 205 282 240 272 260 248 C 278 225 282 200 280 180 C 278 150 260 124 200 124 C 140 124 122 150 120 180 Z" fill={skinTone} />
          )}
          {faceShape === 'oval' && (
            <path d="M 120 180 C 118 200 120 228 140 252 C 162 278 238 278 260 252 C 280 228 282 200 280 180 C 278 145 258 122 200 122 C 142 122 122 145 120 180 Z" fill={skinTone} />
          )}
          {faceShape === 'chubby' && (
            <path d="M 120 180 C 115 205 112 244 135 264 C 158 284 242 284 265 264 C 288 244 285 205 280 180 C 276 150 258 124 200 124 C 142 124 124 150 120 180 Z" fill={skinTone} />
          )}
          {faceShape === 'squared' && (
            <path d="M 122 178 C 118 198 122 225 138 245 C 154 265 174 274 200 274 C 226 274 246 265 262 245 C 278 225 282 198 278 178 C 272 144 254 124 200 124 C 146 124 128 144 122 178 Z" fill={skinTone} />
          )}

          {/* Somatic details: Cheeks blush */}
          {blushAmount > 0 && (
            <g id="blush-g" opacity={blushAmount / 100} filter="url(#cheek-blur)">
              <ellipse cx="148" cy="218" rx="16" ry="10" fill={blushColor} />
              <ellipse cx="252" cy="218" rx="16" ry="10" fill={blushColor} />
            </g>
          )}

          {/* Special Face Markings */}
          {faceMarkings !== 'none' && (
            <g id="face-markings" strokeWidth="1.5" fill="none">
              {faceMarkings === 'san_paint' && (
                <>
                  <path d="M 148 214 L 140 226 L 152 230" fill="none" stroke="#C22E2B" strokeWidth="2.5" />
                  <path d="M 252 214 L 260 226 L 248 230" fill="none" stroke="#C22E2B" strokeWidth="2.5" />
                  <path d="M 200 180 L 200 196" fill="none" stroke="#C22E2B" strokeWidth="2.5" />
                </>
              )}
              {faceMarkings === 'ashitaka_curse' && (
                <g stroke="#5E35B1" strokeWidth="1.2" opacity="0.75" strokeLinecap="round">
                  <path d="M 172 250 Q 182 235 178 220 T 188 200" />
                  <path d="M 180 252 Q 190 240 186 228 T 194 216" />
                  <path d="M 166 238 Q 173 226 170 216" />
                </g>
              )}
              {faceMarkings === 'freckles' && (
                <g fill="#A1887F" stroke="none">
                  <circle cx="140" cy="212" r="1.2" />
                  <circle cx="144" cy="214" r="1" />
                  <circle cx="149" cy="211" r="1" />
                  <circle cx="154" cy="215" r="1.2" />
                  <circle cx="246" cy="215" r="1.2" />
                  <circle cx="251" cy="211" r="1" />
                  <circle cx="256" cy="214" r="1" />
                  <circle cx="260" cy="212" r="1.2" />
                  <circle cx="194" cy="216" r="0.8" />
                  <circle cx="200" cy="217" r="1" />
                  <circle cx="206" cy="216" r="0.8" />
                </g>
              )}
              {faceMarkings === 'cheek_bandaid' && (
                <g stroke="#E5C158" strokeWidth="1" opacity="0.9">
                  {/* bandage strip */}
                  <polygon points="135,225 155,233 152,240 132,232" fill="#FFE082" />
                  <polygon points="138,235 148,223 154,228 144,240" fill="#FFE082" />
                  <circle cx="143" cy="231" r="2" fill="#E5C158" stroke="none" />
                </g>
              )}
            </g>
          )}
        </g>

        {/* LAYER 5: Clothing */}
        <g id="clothing-layer" stroke="#2B1D16" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" filter="url(#soft-shadow)">
          {clothingStyle === 'kiki_tunic' && (
            <g>
              <path d="M 140 310 Q 200 340 260 310 L 320 380 Q 200 410 80 380 Z" fill={clothingColor} />
              <path d="M 152 310 Q 200 334 248 310" fill="none" stroke="#2B1D16" strokeWidth="1.5" />
            </g>
          )}

          {clothingStyle === 'chihiro_stripes' && (
            <g>
              <path d="M 145 310 Q 200 330 255 310 L 320 385 L 80 385 Z" fill="url(#striped-pattern)" />
              <path d="M 160 310 Q 200 326 240 310 L 244 320 Q 200 338 156 320 Z" fill={clothingColor} />
            </g>
          )}

          {clothingStyle === 'howl_cardigan' && (
            <g>
              <path d="M 168 310 Q 200 335 232 310 L 240 340 L 160 340 Z" fill="#F8F9FA" />
              <path d="M 168 310 L 200 350 L 232 310" fill="none" stroke="#2B1D16" strokeWidth="1.8" />
              <path d="M 135 315 C 115 340 95 370 80 395 C 135 410 265 410 320 395 C 305 370 285 340 265 315" fill={clothingColor} />
              <path d="M 155 320 L 190 400 M 245 320 L 210 400" stroke="#E5C158" strokeWidth="4" />
            </g>
          )}

          {clothingStyle === 'sheeta_jewel' && (
            <g>
              <path d="M 140 310 Q 200 325 260 310 L 315 390 Q 200 410 85 390 Z" fill={clothingColor} />
              <path d="M 175 306 Q 200 336 225 306" fill="none" stroke="#2B1D16" strokeWidth="1.5" />
              <polygon points="196,334 200,324 204,334 200,344" fill="#00D2FF" stroke="#005A9C" strokeWidth="1" />
              <circle cx="200" cy="334" r="3" fill="#FFF" opacity="0.6" filter="blur(1px)" />
            </g>
          )}

          {clothingStyle === 'sailor_uniform' && (
            <g>
              <path d="M 140 310 Q 200 330 260 310 L 320 380 H 80 Z" fill={clothingColor} />
              <polygon points="160,314 200,355 240,314 225,310 200,340 175,310" fill="#FFFFFF" />
              <path d="M 190 350 L 175 395 L 200 380 L 225 395 L 210 350 Z" fill="#E74C3C" />
              <circle cx="200" cy="350" r="5" fill="#E74C3C" />
            </g>
          )}

          {clothingStyle === 'adventurers_jacket' && (
            <g>
              <path d="M 130 312 Q 200 340 270 312 L 325 390 H 75 Z" fill={clothingColor} />
              <path d="M 155 310 Q 200 335 245 310 Q 260 325 245 340 Q 200 345 155 340 Q 140 325 155 310 Z" fill="#FFFDD0" stroke="#2B1D16" strokeWidth="1.5" />
              <path d="M 200 335 L 200 395" stroke="#D5AC3B" strokeWidth="2.5" />
            </g>
          )}

          {clothingStyle === 'forest_cape' && (
            <g>
              <path d="M 125 312 Q 200 335 275 312 L 335 395 Q 200 415 65 395 Z" fill={clothingColor} />
              {/* high leaf brooch connector */}
              <path d="M 185 320 C 185 305 200 312 200 322 C 200 312 215 305 215 320 Z" fill="#D4E157" stroke="#2B1D16" strokeWidth="1.2" />
              <line x1="200" y1="315" x2="200" y2="330" stroke="#2B1D16" strokeWidth="1" />
            </g>
          )}
        </g>

        {/* LAYER 6: Eyes with advanced position, sizing, angle and iris render */}
        <g id="eyes-layer">
          {(() => {
            const leftEyeX = 200 - eyeSpacing;
            const rightEyeX = 200 + eyeSpacing;
            const computedEyeY = eyeY;

            const renderSingleEye = (centerX: number, isRight: boolean) => {
              const flip = isRight ? 1 : -1;
              const angle = eyeAngle * flip;

              switch (eyeStyle) {
                case 'wide_curious':
                  return (
                    <g transform={`translate(${centerX}, ${computedEyeY}) rotate(${angle}) scale(${eyeScaleX}, ${eyeScaleY})`}>
                      <ellipse cx="0" cy="0" rx="14" ry="16" fill="#1C1817" stroke="#2B1D16" strokeWidth="1.5" />
                      <circle cx="-5" cy="-5" r="5.5" fill="#FFF" />
                      <circle cx="5" cy="5" r="2.5" fill="#FFF" opacity="0.6" />
                      <circle cx="-3" cy="6" r="1.5" fill="#FFF" opacity="0.4" />
                      <ellipse cx="0" cy="0" rx="12" ry="14" fill="none" stroke={eyeColor} strokeWidth="2" opacity="0.4" />
                      <path d="M -18 -10 Q 0 -22 18 -10" fill="none" stroke="#2B1D16" strokeWidth="2.8" strokeLinecap="round" />
                      <path d="M 12 -14 Q 18 -19 16 -12" fill="none" stroke="#2B1D16" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M -15 12 Q 0 17 15 12" fill="none" stroke="#2B1D16" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                    </g>
                  );

                case 'cool_almond':
                  return (
                    <g transform={`translate(${centerX}, ${computedEyeY}) rotate(${angle}) scale(${eyeScaleX}, ${eyeScaleY})`}>
                      <path d="M -18 2 Q 0 -12 18 2 Q 0 10 -18 2 Z" fill="#FFFFFF" stroke="#2B1D16" strokeWidth="1.5" />
                      <circle cx={`${flip * 1.5}`} cy="1" r="8" fill={eyeColor} stroke="#2B1D16" strokeWidth="1" />
                      <circle cx={`${flip * 1.5}`} cy="1" r="4" fill="#111" />
                      <circle cx={`${flip * 1.5 - 2.5}`} cy="-1.5" r="2.3" fill="#FFF" />
                      <circle cx={`${flip * 1.5 + 2.5}`} cy="3" r="1.2" fill="#FFF" opacity="0.75" />
                      <path d="M -21 -2 Q 0 -15 21 -2" fill="none" stroke="#2B1D16" strokeWidth="3" strokeLinecap="round" />
                      <path d="M -16 -8 Q 0 -19 16 -8" fill="none" stroke="#2B1D16" strokeWidth="1" opacity="0.5" />
                      <path d="M -17 5 Q 0 11 17 5" fill="none" stroke="#2B1D16" strokeWidth="1.2" opacity="0.8" />
                    </g>
                  );

                case 'gentle_oval':
                  return (
                    <g transform={`translate(${centerX}, ${computedEyeY}) rotate(${angle}) scale(${eyeScaleX}, ${eyeScaleY})`}>
                      <path d="M -16 1 Q 0 -10 16 1 Q 0 11 -16 1 Z" fill="#FFFFFF" stroke="#2B1D16" strokeWidth="1.5" />
                      <ellipse cx={`${flip * 0.5}`} cy="1.5" rx="9" ry="9.5" fill={eyeColor} />
                      <circle cx={`${flip * 0.5}`} cy="1.5" r="5" fill="#151211" />
                      <circle cx={`${flip * 0.5 - 2.5}`} cy="-1.5" r="2.5" fill="#FFF" />
                      <circle cx={`${flip * 0.5 + 2.5}`} cy="4.5" r="1.5" fill="#FFF" opacity="0.8" />
                      <path d="M -19 -2 Q 0 -13 19 -2" fill="none" stroke="#2B1D16" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M -15 7 Q 0 11 15 7" fill="none" stroke="#2B1D16" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                    </g>
                  );

                case 'sleepy_half':
                  return (
                    <g transform={`translate(${centerX}, ${computedEyeY}) rotate(${angle}) scale(${eyeScaleX}, ${eyeScaleY})`}>
                      <path d="M -16 4 Q 0 -4 16 4 Q 0 10 -16 4 Z" fill="#FFFFFF" stroke="#2B1D16" strokeWidth="1.5" />
                      <ellipse cx="0" cy="4" rx="8" ry="6" fill={eyeColor} />
                      <circle cx="0" cy="4" r="3.2" fill="#111" />
                      <circle cx="-2.5" cy="2" r="1.8" fill="#FFF" />
                      <path d="M -18 3 Q 0 -10 18 3" fill="none" stroke="#2B1D16" strokeWidth="3" strokeLinecap="round" />
                    </g>
                  );

                case 'determined_bold':
                  return (
                    <g transform={`translate(${centerX}, ${computedEyeY}) rotate(${angle}) scale(${eyeScaleX}, ${eyeScaleY})`}>
                      <ellipse cx="0" cy="0" rx="14" ry="12" fill="#FFFFFF" stroke="#2B1D16" strokeWidth="1.8" />
                      <circle cx="0" cy="0" r="8.5" fill="#111" />
                      <circle cx="-2.5" cy="-2.5" r="2.8" fill="#FFF" />
                      <ellipse cx="0" cy="0" rx="11" ry="9.5" fill="none" stroke={eyeColor} strokeWidth="1.5" opacity="0.4" />
                      <path d="M -17 -6 L 17 -6" stroke="#2B1D16" strokeWidth="3.2" strokeLinecap="round" />
                      <path d="M -14 9 Q 0 11 14 9" stroke="#2B1D16" strokeWidth="1.2" fill="none" />
                    </g>
                  );

                case 'spirit_no_face':
                  return (
                    <g transform={`translate(${centerX}, ${computedEyeY}) rotate(${angle}) scale(${eyeScaleX}, ${eyeScaleY})`}>
                      <ellipse cx="0" cy="0" rx="12" ry="5" fill="#1C1817" />
                      <ellipse cx="-1" cy="0" rx="4" ry="3.5" fill="#FFF" />
                      <path d="M -15 -8 L 15 -8" stroke="#1C1817" strokeWidth="1.5" opacity="0.5" />
                    </g>
                  );

                case 'spirited_star':
                default:
                  return (
                    <g transform={`translate(${centerX}, ${computedEyeY}) rotate(${angle}) scale(${eyeScaleX}, ${eyeScaleY})`}>
                      <ellipse cx="0" cy="0" rx="15" ry="14" fill="#FFFFFF" stroke="#2B1D16" strokeWidth="1.8" />
                      <circle cx={`${flip * 1}`} cy="0" r="10" fill="#201C1B" />
                      <circle cx={`${flip * 1}`} cy="0" r="8.5" fill="none" stroke={eyeColor} strokeWidth="1.5" opacity="0.45" />
                      <circle cx={`${flip * 1 - 3.5}`} cy="-3.5" r="3.4" fill="#FFF" />
                      <circle cx={`${flip * 1 + 3.5}`} cy="3" r="1.8" fill="#FFF" />
                      <circle cx={`${flip * 1 - 3.5}`} cy="3.5" r="1" fill="#FFF" opacity="0.7" />
                      <path d="M -18 -5 Q 0 -17 18 -5" fill="none" stroke="#2B1D16" strokeWidth="2.8" strokeLinecap="round" />
                      <path d="M -15 9 Q 0 12 15 9" fill="none" stroke="#2B1D16" strokeWidth="1" opacity="0.5" />
                    </g>
                  );
              }
            };

            return (
              <>
                <g id="left-eye-g">{renderSingleEye(leftEyeX, false)}</g>
                <g id="right-eye-g">{renderSingleEye(rightEyeX, true)}</g>
              </>
            );
          })()}
        </g>

        {/* LAYER 7: Eyebrows with customizable positioning */}
        <g id="eyebrows-layer" stroke={eyebrowsColor} strokeWidth="2.5" strokeLinecap="round" fill="none">
          {(() => {
            const leftEyeX = 200 - eyeSpacing;
            const rightEyeX = 200 + eyeSpacing;
            const relativeY = eyeY + eyebrowsY;

            const renderSingleEyebrow = (centerX: number, isRight: boolean) => {
              const flip = isRight ? 1 : -1;
              const angle = eyebrowsAngle * flip;

              switch (eyebrowsStyle) {
                case 'thick':
                  return (
                    <g transform={`translate(${centerX}, ${relativeY}) rotate(${angle})`}>
                      <path d="M -18 3 Q -5 -6 18 -2" strokeWidth="4.5" />
                    </g>
                  );
                case 'oval_dots':
                  return (
                    <g transform={`translate(${centerX}, ${relativeY})`}>
                      <ellipse cx="0" cy="-2" rx="8" ry="4.5" fill={eyebrowsColor} stroke="none" />
                    </g>
                  );
                case 'expressive_arched':
                  return (
                    <g transform={`translate(${centerX}, ${relativeY}) rotate(${angle})`}>
                      <path d="M -18 5 Q 0 -10 18 2" strokeWidth="3" />
                      <path d="M -14 1 L 12 -2" strokeWidth="1.5" opacity="0.5" />
                    </g>
                  );
                case 'thin':
                default:
                  return (
                    <g transform={`translate(${centerX}, ${relativeY}) rotate(${angle})`}>
                      <path d="M -18 2 Q 0 -7 18 -1" strokeWidth="2" />
                    </g>
                  );
              }
            };

            return (
              <>
                {renderSingleEyebrow(leftEyeX, false)}
                {renderSingleEyebrow(rightEyeX, true)}
              </>
            );
          })()}
        </g>

        {/* LAYER 8: Nose with adjustable coordinates & width */}
        <g id="nose-layer" stroke="#2B1D16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {(() => {
            switch (noseStyle) {
              case 'button':
                return (
                  <g transform={`translate(200, ${noseY}) scale(${noseScale * noseWidth}, ${noseScale})`}>
                    <path d="M -3.5 -1 Q 0 4 3.5 2" fill="none" strokeWidth="2.1" />
                    <path d="M 0 -3 Q -4 -1 0 1" stroke="#2B1D16" strokeWidth="1" opacity="0.3" fill="none" />
                  </g>
                );

              case 'rounded':
                return (
                  <g transform={`translate(200, ${noseY}) scale(${noseScale * noseWidth}, ${noseScale})`}>
                    <path d="M -6 -2 Q 0 5 6 -2" fill="none" strokeWidth="2" />
                  </g>
                );

              case 'line':
                return (
                  <g transform={`translate(200, ${noseY}) scale(${noseScale * noseWidth}, ${noseScale})`}>
                    <path d="M -1 -7 L 1 1 Q 0 4 -3 3" fill="none" strokeWidth="2" />
                  </g>
                );

              case 'snout_totoro':
                return (
                  <g transform={`translate(200, ${noseY}) scale(${noseScale * noseWidth}, ${noseScale})`}>
                    <ellipse cx="0" cy="0" rx="9" ry="5.2" fill="#4B3326" stroke="#2B1D16" strokeWidth="1.8" />
                    <circle cx="-3.5" cy="-1.5" r="1.5" fill="#FFF" stroke="none" />
                  </g>
                );

              case 'pointed_witch':
                return (
                  <g transform={`translate(200, ${noseY}) scale(${noseScale * noseWidth}, ${noseScale})`}>
                    <path d="M -2 -14 L 6 3 Q 1 7 -4 1" strokeWidth="2" />
                    <path d="M 0 -8 Q -5 -4 -2 0" opacity="0.4" strokeWidth="1" />
                  </g>
                );

              case 'hook':
              default:
                return (
                  <g transform={`translate(200, ${noseY}) scale(${noseScale * noseWidth}, ${noseScale})`}>
                    <polygon points="0,-4 2,2 -2,3" fill="#2B1D16" opacity="0.8" />
                  </g>
                );
            }
          })()}
        </g>

        {/* LAYER 9: Mouth & Expression with sliders */}
        <g id="mouth-layer" stroke="#2B1D16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {(() => {
            const finalScaleX = mouthScale * mouthWidth;
            const finalScaleY = mouthScale;

            switch (mouthStyle) {
              case 'happy_open':
                return (
                  <g transform={`translate(200, ${mouthY}) scale(${finalScaleX}, ${finalScaleY})`}>
                    <path d="M -15 -2 C -15 15 15 15 15 -2 Z" fill="#9B111E" />
                    <path d="M -8 6 C -2 1 2 1 8 6 C 5 11 -5 11 -8 6" fill="#FF80AB" stroke="none" />
                    <path d="M -17 -2 Q 0 0 17 -2" fill="none" strokeWidth="2.3" />
                  </g>
                );

              case 'gentle_smile':
                return (
                  <g transform={`translate(200, ${mouthY}) scale(${finalScaleX}, ${finalScaleY})`} fill="none">
                    <path d="M -11 -1 Q 0 6 11 -1" strokeWidth="2.2" />
                    <path d="M -12 -1 Q -11 -3 -10 -2" strokeWidth="1.5" />
                    <path d="M 12 -1 Q 11 -3 10 -2" strokeWidth="1.5" />
                  </g>
                );

              case 'surprised_o':
                return (
                  <g transform={`translate(200, ${mouthY}) scale(${finalScaleX}, ${finalScaleY})`}>
                    <ellipse cx="0" cy="0" rx="6" ry="9" fill="#9B111E" />
                    <ellipse cx="0" cy="0" rx="5" ry="8" fill="none" stroke="#2B1D16" strokeWidth="1.5" />
                  </g>
                );

              case 'cheeky_tongue':
                return (
                  <g transform={`translate(200, ${mouthY}) scale(${finalScaleX}, ${finalScaleY})`}>
                    <path d="M -12 2 Q 0 -2 10 -3" fill="none" strokeWidth="2.2" />
                    <path d="M 2 -3 Q 4 7 8 5 T 8 -3" fill="#FF80AB" stroke="#2B1D16" strokeWidth="1.5" />
                  </g>
                );

              case 'broad_grin':
                return (
                  <g transform={`translate(200, ${mouthY}) scale(${finalScaleX}, ${finalScaleY})`}>
                    {/* Big teeth smiling look (Totoro/Catbus style) */}
                    <path d="M -22 -4 Q 0 12 22 -4 Q 0 -13 -22 -4 Z" fill="#FFF8E1" />
                    <path d="M -22 -4 Q 0 12 22 -4" fill="none" strokeWidth="2" />
                    <path d="M -22 -4 Q 0 -13 22 -4" fill="none" strokeWidth="2" />
                    {/* vertical teeth gridlines */}
                    <line x1="-15" y1="-4" x2="-14" y2="2" strokeWidth="1" />
                    <line x1="-8" y1="-6" x2="-7" y2="4" strokeWidth="1" />
                    <line x1="0" y1="-6" x2="0" y2="5" strokeWidth="1" />
                    <line x1="8" y1="-6" x2="7" y2="4" strokeWidth="1" />
                    <line x1="15" y1="-4" x2="14" y2="2" strokeWidth="1" />
                    <line x1="-22" y1="-2" x2="22" y2="-2" strokeWidth="1.2" opacity="0.6" />
                  </g>
                );

              case 'determined_pout':
                return (
                  <g transform={`translate(200, ${mouthY}) scale(${finalScaleX}, ${finalScaleY})`} fill="none">
                    <path d="M -11 3 Q 0 -3 11 3" strokeWidth="2.5" />
                    <path d="M -5 7 Q 0 9 5 7" strokeWidth="1.2" opacity="0.4" />
                  </g>
                );

              case 'neutral_line':
              default:
                return (
                  <g transform={`translate(200, ${mouthY}) scale(${finalScaleX}, ${finalScaleY})`} fill="none">
                    <path d="M -10 1 L 10 0" strokeWidth="2.2" />
                    <path d="M -4 5 Q 0 7 4 5" strokeWidth="1.2" opacity="0.4" />
                  </g>
                );
            }
          })()}
        </g>

        {/* LAYER 10: Hair Front (Forehead decoration & Bangs) */}
        <g id="hair-front-layer" fill={hairColor} stroke="#2B1D16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" filter="url(#soft-shadow)">
          {frontHair === 'bangs_straight' && (
            <path d="M 118 165 C 130 150 150 165 160 160 C 170 150 190 165 200 160 C 210 150 230 165 240 160 C 250 150 270 165 280 165 C 275 125 250 115 200 115 C 150 115 125 125 118 165 Z" />
          )}
          {frontHair === 'bangs_kiki' && (
            <g>
              <path d="M 116 172 Q 135 150 160 170 Q 185 145 205 170 Q 230 145 250 170 Q 270 152 284 172 Q 284 120 200 115 Q 116 120 116 172 Z" />
              {hairHighlightEnabled && (
                <path d="M 154 167 Q 165 148 178 165" fill="none" stroke={hairHighlightColor} strokeWidth="2.5" />
              )}
            </g>
          )}
          {frontHair === 'bangs_parted' && (
            <g>
              <path d="M 115 150 C 114 200 100 230 110 250 C 118 200 140 180 155 170 C 145 160 150 135 200 130 C 250 135 255 160 245 170 C 260 180 282 200 290 250 C 300 230 286 200 288 150 C 280 100 120 100 115 150 Z" />
              <path d="M 200 130 Q 200 145 195 155" fill="none" stroke="#2B1D16" strokeWidth="1.2" opacity="0.5" />
            </g>
          )}
          {frontHair === 'bangs_haku' && (
            <g>
              <path d="M 118 165 L 115 255 L 132 235 L 135 178 L 265 178 L 268 235 L 285 255 L 282 165 C 280 110 120 110 118 165 Z" />
              <path d="M 135 178 Q 200 165 265 178 L 265 185 Q 200 172 135 185 Z" />
            </g>
          )}
          {frontHair === 'bangs_messy' && (
            <g>
              <path d="M 114 165 C 122 195 136 195 145 178 C 152 198 174 195 185 175 C 195 195 210 195 220 178 Q 240 205 260 175 C 270 195 284 190 286 165 Q 280 100 200 100 T 114 165 Z" />
              {hairHighlightEnabled && (
                <path d="M 175 125 Q 185 145 180 160" fill="none" stroke={hairHighlightColor} strokeWidth="3" />
              )}
            </g>
          )}
          {frontHair === 'bangs_braided' && (
            <g>
              <path d="M 120 165 C 130 150 270 150 280 165 C 270 120 230 110 200 110 S 130 120 120 165 Z" />
              {/* sweet tiny braided bands */}
              <path d="M 130 150 Q 160 135 200 142 T 270 150" fill="none" stroke="#FFF7C5" strokeWidth="2.5" opacity="0.45" />
            </g>
          )}
          {frontHair === 'cap_newsboy' && (
            <g>
              <path d="M 110 150 Q 200 100 290 150 C 300 120 270 90 200 90 Q 130 90 110 150 Z" fill="#5F574F" />
              <path d="M 115 148 Q 200 135 285 148 C 290 154 260 164 200 164 T 115 148 Z" fill="#423E3A" />
              <path d="M 120 152 L 124 165 L 132 153 M 270 153 L 278 165 L 280 152" fill={hairColor} stroke="#2B1D16" strokeWidth="1.5" />
            </g>
          )}
          {frontHair === 'cap_aviator' && (
            <g>
              {/* Aviator leather helmet with goggles potential space */}
              <path d="M 112 152 C 114 110 140 92 200 92 C 260 92 286 110 288 152 C 285 190 272 205 274 218 C 266 218 260 195 264 164 L 136 164 C 140 195 134 218 126 218 C 128 205 115 190 112 152 Z" fill="#6D4C41" />
              {/* chin strap dangling */}
              <path d="M 130 216 Q 200 242 270 216" fill="none" stroke="#5D4037" strokeWidth="4" />
            </g>
          )}
          {frontHair === 'curls' && (
            <path d="M 118 165 C 130 178 140 182 148 168 C 158 182 172 180 185 168 C 196 182 210 182 222 168 C 235 182 250 178 260 168 C 270 178 278 178 282 165 C 275 115 125 115 118 165 Z" />
          )}
        </g>

        {/* LAYER 11: Accessories & Hats */}
        <g 
          id="accessories-layer" 
          stroke="#2B1D16" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          filter="url(#soft-shadow)"
          transform={`translate(${accessoryX}, ${accessoryY}) scale(${accessoryScale}) rotate(${accessoryRotation}, 200, 110)`}
          style={{ transformOrigin: '200px 110px' }}
        >
          {accessoryStyle === 'kiki_bow' && (
            <g transform="translate(200, 105)">
              <path d="M 0 -2 C -40 -35 -65 -15 -10 -2 Z" fill="#C22E2B" />
              <path d="M 0 -2 C 40 -35 65 -15 10 -2 Z" fill="#C22E2B" />
              <path d="M -8 1 M -5 0 L -25 15 L -10 18 Z" fill="#9B1B19" />
              <path d="M 8 1 M 5 0 L 25 15 L 10 18 Z" fill="#9B1B19" />
              <rect x="-8" y="-7" width="16" height="12" rx="3" fill="#E23E3B" />
            </g>
          )}

          {accessoryStyle === 'sophie_hat' && (
            <g transform="translate(200, 112)">
              <ellipse cx="0" cy="10" rx="105" ry="18" fill="#E8C39E" />
              <path d="M -54 8 Q -50 -48 0 -52 Q 50 -48 54 8 Z" fill="#ECCCA8" />
              <path d="M -54 6 Q -50 -10 0 -12 Q 50 -10 54 6 L 54 10 Q 50 -2 0 -3 Q -50 -2 -54 10 Z" fill="#A82E47" stroke="none" />
              <path d="M -105 10 Q 0 -5 105 10" fill="none" stroke="#2B1D16" strokeWidth="1.2" opacity="0.4" />
            </g>
          )}

          {accessoryStyle === 'round_glasses' && (
            <g transform={`translate(200, ${eyeY})`}>
              <ellipse cx={-(eyeSpacing)} cy="0" rx="20" ry="20" fill="none" stroke="#E5C158" strokeWidth="3" />
              <circle cx={-(eyeSpacing) + 5} cy="-6" r="4" fill="#FFF" opacity="0.3" filter="blur(1px)" />
              <ellipse cx={eyeSpacing} cy="0" rx="20" ry="20" fill="none" stroke="#E5C158" strokeWidth="3" />
              <circle cx={eyeSpacing + 5} cy="-6" r="4" fill="#FFF" opacity="0.3" filter="blur(1px)" />
              <path d={`M -${eyeSpacing - 18} -2 Q 0 -6 ${eyeSpacing - 18} -2`} fill="none" stroke="#E5C158" strokeWidth="2.5" />
              <path d={`M -${eyeSpacing + 18} -2 L -95 -8`} fill="none" stroke="#E5C158" strokeWidth="1.5" opacity="0.7" />
              <path d={`M ${eyeSpacing + 18} -2 L 95 -8`} fill="none" stroke="#E5C158" strokeWidth="1.5" opacity="0.7" />
            </g>
          )}

          {accessoryStyle === 'totoro_leaf' && (
            <g transform="translate(200, 105) rotate(-10)">
              <path d="M 0 0 Q 5 -20 18 -32" fill="none" stroke="#3E8043" strokeWidth="2.5" />
              <path d="M 18 -32 C 10 -45 0 -48 -14 -40 C -25 -32 -20 -15 -4 -16 C 5 -16 12 -25 18 -32 Z" fill="#7CB342" stroke="#3E8043" strokeWidth="1.5" />
              <path d="M -14 -40 Q -2 -28 18 -32" fill="none" stroke="#558B2F" strokeWidth="1" opacity="0.6" />
            </g>
          )}

          {accessoryStyle === 'goggles_aviator' && (
            <g transform="translate(200, 130)">
              {/* Strap across head */}
              <path d="M -85 -5 H 85" stroke="#3E3E3E" strokeWidth="7" />
              {/* Goggles framework */}
              <ellipse cx="-23" cy="-5" rx="20" ry="14" fill="#A1887F" />
              <ellipse cx="23" cy="-5" rx="20" ry="14" fill="#A1887F" />
              <ellipse cx="-23" cy="-5" rx="15" ry="10" fill="#E0F7FA" />
              <ellipse cx="23" cy="-5" rx="15" ry="10" fill="#E0F7FA" />
              <circle cx="-25" cy="-8" r="3" fill="#FFF" opacity="0.6" />
              <circle cx="21" cy="-8" r="3" fill="#FFF" opacity="0.6" />
              <rect x="-6" y="-10" width="12" height="10" rx="1" fill="#4E342E" />
            </g>
          )}

          {accessoryStyle === 'flower_crown' && (
            <g transform="translate(200, 122)">
              {/* organic leaf twigs */}
              <path d="M -80 -12 Q 0 -26 80 -12" fill="none" stroke="#5D4037" strokeWidth="3" />
              <path d="M -75 -18 Q 0 -30 75 -18" fill="none" stroke="#7CB342" strokeWidth="1.5" />
              {/* little daisy heads */}
              <circle cx="-50" cy="-18" r="6" fill="#FFF" />
              <circle cx="-50" cy="-18" r="2" fill="#FBC02D" stroke="none" />

              <circle cx="-20" cy="-24" r="7" fill="#FFFAD6" />
              <circle cx="-20" cy="-24" r="2.5" fill="#F57F17" stroke="none" />

              <circle cx="20" cy="-24" r="7" fill="#FF80AB" />
              <circle cx="20" cy="-24" r="2.5" fill="#C2185B" stroke="none" />

              <circle cx="50" cy="-18" r="6" fill="#FFF" />
              <circle cx="50" cy="-18" r="2" fill="#FBC02D" stroke="none" />
            </g>
          )}
        </g>

        {/* LAYER 12: Earrings on high z-index layout */}
        {earringStyle !== 'none' && (
          <g id="earrings-on-top-layer" stroke="#2B1D16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#soft-shadow)">
            {/* Left Earring */}
            <g transform={`translate(118, 195) scale(${earSize})`}>
              {earringStyle === 'emerald_teardrop' && (
                <>
                  <path d="M -6 13 L -6 21 L -9 31 L -6 41 L -3 31 L -6 21" fill="#1DE9B6" stroke="#00796B" strokeWidth="1" />
                  <circle cx="-6" cy="14" r="1.5" fill="#FFE082" stroke="none" />
                </>
              )}
              {earringStyle === 'gold_ring' && (
                <circle cx="-6" cy="19" r="6" fill="none" stroke="#ECC06A" strokeWidth="2" />
              )}
              {earringStyle === 'red_bead' && (
                <circle cx="-6" cy="18" r="4.5" fill="#E53935" />
              )}
            </g>

            {/* Right Earring */}
            <g transform={`translate(282, 195) scale(${earSize})`}>
              {earringStyle === 'emerald_teardrop' && (
                <>
                  <path d="M 6 13 L 6 21 L 3 31 L 6 41 L 9 31 L 6 21" fill="#1DE9B6" stroke="#00796B" strokeWidth="1" />
                  <circle cx="6" cy="14" r="1.5" fill="#FFE082" stroke="none" />
                </>
              )}
              {earringStyle === 'gold_ring' && (
                <circle cx="6" cy="19" r="6" fill="none" stroke="#ECC06A" strokeWidth="2" />
              )}
              {earringStyle === 'red_bead' && (
                <circle cx="6" cy="18" r="4.5" fill="#E53935" />
              )}
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};
