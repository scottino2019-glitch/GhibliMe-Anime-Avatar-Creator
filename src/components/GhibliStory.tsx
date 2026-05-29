import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { AvatarState, GhibliBackstory } from '../types';
import { Scroll, Compass, BookOpen, Heart, Landmark } from 'lucide-react';

interface GhibliStoryProps {
  avatar: AvatarState;
}

export const GhibliStory: React.FC<GhibliStoryProps> = ({ avatar }) => {
  const {
    frontHair,
    backHair,
    eyeStyle,
    earStyle,
    noseStyle,
    mouthStyle,
    faceShape,
    faceMarkings,
    clothingStyle,
    accessoryStyle,
    background,
    characterName,
    characterRole,
  } = avatar;

  // Weave a wonderful Ghibli backstory entirely locally and deterministically based on character selections
  const story: GhibliBackstory = useMemo(() => {
    // Generate name and role defaults
    const name = characterName.trim() || 'Il Giovane Viaggiatore';
    const role = characterRole.trim() || 'Custode del Vento';

    // Backstory template pieces based on background scenery
    let sceneryNarrative = '';
    switch (background) {
      case 'meadow':
        sceneryNarrative = `tra i prati ondulati e profumati delle valli zefire, dove il vento caldo porta con sé il profumo di soffioni selvatici e segreti sussurrati dall'erba alta lucente. In questo oceano verde smeraldo, trascorre le sue giornate ad ascoltare i battiti della terra, riparandosi dal sole d'agosto sotto le grandi nuvole bianche che scorrono lente come navi silenziose nel cielo`;
        break;
      case 'flying_castle':
        sceneryNarrative = `negli altipiani fluttuanti che coronano il leggendario castello sospeso tra le nuvole arancioni del tramonto. Vivendo sospeso a mezz'aria, ha imparato a leggere il mutare delle correnti e i segreti della nebbia densa, camminando in equilibrio su travi di ferro arrugginite e tetti ricoperti di muschio, dove l'aria è fine ed ha lo stesso profumo delle stelle cadenti`;
        break;
      case 'cozy_bakery':
        sceneryNarrative = `nel calore avvolgente del piccolo forno e pasticceria della vecchia strega, tra il profumo fragrante del pane appena sfornato, tazze fumanti di tisana alle erbe e il crepitio rassicurante della legna nella grande caldaia di mattoni rossi. In questo rifugio di pace, si occupa di impastare sogni dorati e consegnare pacchetti profumati a domicilio sul dorso di vecchie scope volanti`;
        break;
      case 'spirit_forest':
        sceneryNarrative = `nel cuore pulsante della foresta millenaria, dove alberi giganteschi proteggono lagune sacre ricoperte di muschio perlescente. Qui, i piccoli Kodama e gli spiriti celesti fanno capolino dai cespugli selvatici con occhi incuriositi, guidandolo lungo sentieri invisibili fatti d'ombra e d'oro, dove il tempo scorre a un ritmo antico e solenne, lontano dal frastuono degli umani`;
        break;
      case 'seaside_train':
        sceneryNarrative = `a bordo del treno silenzioso della laguna, il cui vagone scivola dolce sopra le rotaie d'ottone completamente sommerse da un mare azzurro calmo e immobile. Guardando fuori dal finestrino bagnato di salsedine, osserva le stazioni sperdute nel nulla e le ombre dei ricordi che viaggiano sull'acqua pulita, cullato dal ritmo monotono e ipnotico del viaggio infinito`;
        break;
      case 'starry_night':
        sceneryNarrative = `sotto una notte stellata d'indaco profondo, dominata da una gigantesca luna crescente dorata che illumina i picchi rocciosi addormentati. Nelle ore in cui il mondo tace, sale sul punto più alto del villaggio per raccogliere la polvere di stelle e raccogliere i pensieri perduti che fluttuano nell'aria fresca, parlando alle costellazioni come fossero vecchi amici`;
        break;
      case 'sunset_port':
      default:
        sceneryNarrative = `sulla banchina di pietra del porto commerciale all'ora del tramonto, mentre l'acqua si tinge di porpora e riflessi dorati e i mercantili spiegano le vele per l'ultimo viaggio del giorno. Ascoltando lo stridio dei gabbiani e il rollio dei legni bagnati, sogna terre sconosciute al di là dell'orizzonte piatto, preparandosi a salpare per esplorare la mappa dei mari fantastici`;
        break;
    }

    // somatic traits translation
    let physicalFocus = '';
    if (eyeStyle === 'wide_curious') {
      physicalFocus = `I suoi occhi grandi e spalancati brillano di una curiosità vivace che non teme le insidie del mondo`;
    } else if (eyeStyle === 'cool_almond') {
      physicalFocus = `Il suo sguardo profondo e affilato cela una maturità silenziosa e una concentrazione d'ferro`;
    } else if (eyeStyle === 'sleepy_half') {
      physicalFocus = `La sua espressione sonnacchiosa e rilassata rivela un animo pacifico, desideroso di godere della bellezza senza fretta`;
    } else if (eyeStyle === 'spirit_no_face') {
      physicalFocus = `I suoi occhi neri e impalpabili ricordano la sostanza misteriosa ed innocente degli spiriti primordiali`;
    } else {
      physicalFocus = `I suoi occhi fieri e determinati trasmettono la caparbietà indomita tipica delle stirpi degli altipiani`;
    }

    let accessoryImpact = '';
    let magicItemName = 'Pietra del Vento Azzurro';
    let magicItemEffects = 'Un amuleto che pulsa di una tenue luce celeste quando l’aria circostante cambia direzione.';

    switch (accessoryStyle) {
      case 'kiki_bow':
        accessoryImpact = `, fiero del suo grande fiocco di velluto rosso che ne decora la chioma indomita`;
        magicItemName = 'Fiocco della Portatrice del Vento';
        magicItemEffects = 'Dona una straordinaria stabilità durante i voli acrobatici e attira correnti ascensionali favorevoli.';
        break;
      case 'sophie_hat':
        accessoryImpact = `, riparandosi la fronte con il suo fidato cappello di paglia decorato da un nastro porpora`;
        magicItemName = 'Cappello dei Passi Leggeri';
        magicItemEffects = 'Rende intangibili e invisibili agli incantesimi di rintracciamento dei maghi reali.';
        break;
      case 'totoro_leaf':
        accessoryImpact = `, reggendo con allegria una grande foglia verde di farfaraccio sopra la testa bagnata di gocce`;
        magicItemName = 'Foglia Ombrello dei Kodama';
        magicItemEffects = 'Se agitata sotto la pioggia, evoca piccoli spiriti fruscianti che indicano sentieri perduti.';
        break;
      case 'round_glasses':
        accessoryImpact = `, sistemandosi continuamente sulla sella del naso i suoi spessi occhiali tondi d’ottone da scolaro`;
        magicItemName = 'Lenti del Disvelamento Arcano';
        magicItemEffects = 'Permettono di scorgere le formule magiche invisibili e le impronte lasciate dagli spiriti del fango.';
        break;
      case 'goggles_aviator':
        accessoryImpact = `, con gli occhialoni da volo in ottone e cuoio pronti per essere allacciati sulla fronte`;
        magicItemName = 'Goggles dell’Alta Quota';
        magicItemEffects = 'Permettono di vedere nitidamente attraverso tempeste di sabbia ed imponenti banchi di nebbia densa.';
        break;
      case 'flower_crown':
        accessoryImpact = `, coronato da un intreccio profumato di margherite di campo e gemme di ranuncolo`;
        magicItemName = 'Ghirlanda della Linfa Antica';
        magicItemEffects = 'Evita la stanchezza mentale e permette di comprendere i sussurri degli animali silvestri.';
        break;
      default:
        accessoryImpact = '';
        magicItemName = 'Pietra Amuleto Blu Cobalto';
        magicItemEffects = 'Un frammento di cristallo luminescente che vibra per risonanza in prossimità di macchine volanti.';
        break;
    }

    // Construct full backstory
    const backstory = `${name}, conosciuto da tutti come ${role}, vive ${sceneryNarrative}${accessoryImpact}. ${physicalFocus}. Ognuno nel villaggio conosce la sua determinazione, nata per proteggere l'equilibrio della natura e per svelare l'enigma che unisce la tecnologia degli umani ai cuori ribelli degli spiriti celesti.`;

    // quotes based on role & background & hairstyle
    const quotesList: string[] = [];
    if (mouthStyle === 'happy_open' || mouthStyle === 'broad_grin') {
      quotesList.push(`"Non serve un motivo speciale per sorridere! Se ascolti da vicino, anche il vento sta cantando d'allegria!"`);
      quotesList.push(`"Guarda oltre quelle montagne, {name}... il futuro ha sempre il sapore dei sogni caldi appena sfornati!"`);
    } else if (mouthStyle === 'neutral_line' || mouthStyle === 'determined_pout') {
      quotesList.push(`"Anche se il cielo dovesse crollare, io non farò un solo passo indietro. Difenderò questa foresta."`);
      quotesList.push(`"La paura è un'illusione della nebbia. Noi camminiamo verso il sole senza esitazioni."`);
    } else {
      quotesList.push(`"Prenditi un momento per respirare. Le cose davvero importanti richiedono cuore, non fretta."`);
      quotesList.push(`"Il treno passerà ancora, e la laguna sarà di nuovo specchio del cielo pulito d'estate."`);
    }

    // traits calculation based on somatic coordinates
    const traits: string[] = [];
    if (faceShape === 'round' || faceShape === 'chubby') {
      traits.push('Innocenza Serena');
      traits.push('Puro Stupore');
    } else {
      traits.push('Costanza Ferrea');
      traits.push('Intelletto Acuto');
    }

    if (earStyle === 'elf_pointed' || earStyle === 'totoro_fluffy') {
      traits.push('Ascolto della Foresta');
    } else {
      traits.push('Saggezza Empatica');
    }

    if (faceMarkings === 'san_paint') {
      traits.push('Istinto Indomito');
    } else if (faceMarkings === 'ashitaka_curse') {
      traits.push('Destino Segnato');
    } else if (faceMarkings === 'freckles') {
      traits.push('Simpatia di Campagna');
    } else {
      traits.push('Sguardo Puro');
    }

    return {
      backstory,
      quotes: quotesList,
      magicItemName,
      magicItemEffects,
      personalityTraits: traits
    };
  }, [
    frontHair,
    backHair,
    eyeStyle,
    earStyle,
    noseStyle,
    mouthStyle,
    faceShape,
    faceMarkings,
    clothingStyle,
    accessoryStyle,
    background,
    characterName,
    characterRole,
  ]);

  return (
    <div className="w-full max-w-[440px] mx-auto mt-4 px-1 select-none">
      <motion.div
        key="story-parchment"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
        className="relative p-6 md:p-8 rounded-3xl border-2 border-amber-900/15 bg-[#FAF3E3] shadow-2xl overflow-hidden text-amber-950"
        style={{
          backgroundImage: 'radial-gradient(#FFF8EB 40%, transparent 100%), linear-gradient(180deg, #FDF4E1 0%, #EFE1C5 100%)',
          boxShadow: '0 25px 44px -12px rgba(95, 62, 38, 0.22), inset 0 0 40px rgba(139, 90, 43, 0.08)'
        }}
      >
        {/* Parchment aesthetic frame corners */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-amber-900/20" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-amber-900/20" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-amber-900/20" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-amber-900/20" />

        {/* Story Header */}
        <div className="text-center mb-5 relative">
          <div className="flex justify-center mb-1.5">
            <BookOpen className="w-5 h-5 text-amber-800/40" />
          </div>
          <h4 className="font-serif text-2xl font-extrabold tracking-tight text-amber-950 leading-tight">
            {avatar.characterName.trim() || 'Il tuo Personaggio'}
          </h4>
          <p className="text-[10px] uppercase font-mono font-bold tracking-widest text-amber-900/50 mt-0.5">
            {avatar.characterRole.trim() || 'Viandante Silenzioso'}
          </p>
          <div className="h-[1.5px] w-20 bg-amber-900/20 mx-auto my-2.5 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-900" />
          </div>
        </div>

        {/* Story Description (Brief Narrative woven live) */}
        <div className="mb-5 relative bg-white/30 p-3.5 rounded-2xl border border-amber-900/5">
          <span className="absolute -top-3 -left-1 text-5xl font-serif text-amber-900/10 italic">“</span>
          <p className="font-serif text-[13px] md:text-[14px] italic text-amber-900/90 leading-relaxed text-justify px-2 relative z-10">
            {story.backstory}
          </p>
        </div>

        {/* Personality pressed herbs */}
        <div className="mb-5 bg-amber-900/5 p-4 rounded-2xl border border-amber-900/10">
          <h5 className="font-serif text-[11px] font-bold uppercase tracking-wider text-amber-850 mb-2 flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 fill-amber-700 stroke-amber-700" />
            <span>Tratti dell'Anima (Fisiognomica)</span>
          </h5>
          <div className="flex flex-wrap gap-1.5">
            {story.personalityTraits.map((trait, index) => (
              <span 
                key={index} 
                className="px-2.5 py-0.5 bg-amber-950/10 hover:bg-amber-950/15 text-[11px] font-semibold text-amber-900 rounded-full transition-colors font-sans border border-amber-900/5"
              >
                🌱 {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Magic Item */}
        <div className="mb-5 bg-white/60 p-3.5 rounded-xl border border-amber-900/5 shadow-sm">
          <h5 className="font-serif text-[10px] font-bold uppercase tracking-wider text-amber-800 mb-1 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-amber-850" />
            <span>Oggetto del Destino (Risonanza)</span>
          </h5>
          <h6 className="font-serif text-[13px] font-bold text-amber-950">
            {story.magicItemName}
          </h6>
          <p className="text-[11px] text-amber-900/75 leading-relaxed mt-0.5 italic">
            {story.magicItemEffects}
          </p>
        </div>

        {/* Dialogue Quotes */}
        <div className="space-y-2">
          <h5 className="font-serif text-[10px] font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
            <Scroll className="w-3.5 h-3.5 text-amber-850" />
            <span>Saggezza delle Valli</span>
          </h5>
          {story.quotes.map((quote, idx) => (
            <div key={idx} className="relative pl-3 border-l-2 border-amber-900/15 py-0.5">
              <p className="font-serif text-[12px] text-amber-900/80 leading-relaxed italic">
                "{quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Regenerate story triggers */}
        <div className="mt-5 pt-3 border-t border-amber-950/5 flex justify-between items-center text-[9px] text-amber-900/35 uppercase tracking-wide font-mono">
          <span>Tessitura Narrativa Live</span>
          <span className="flex items-center gap-1">
            <Landmark className="w-3 h-3" />
            <span>100% Autonomo</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
};
