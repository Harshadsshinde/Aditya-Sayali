import { motion } from 'framer-motion';
import '@fontsource/great-vibes';

const IntroScreen = ({ onEnter }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0d0a07] cursor-pointer select-none"
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      onClick={onEnter}
    >
      {/* Subtle radial glow behind the ring */}
      <div className="absolute w-72 h-72 rounded-full bg-[#d4af37]/5 blur-3xl" />

      {/* SVG Ring */}
      <div className="relative flex items-center justify-center mb-10">
        <svg width="220" height="220" viewBox="0 0 220 220">
          {/* Outer ring */}
          <circle
            cx="110" cy="110" r="90"
            fill="none"
            stroke="#d4af37"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="565.5"
            strokeDashoffset="565.5"
            className="ring-draw"
          />
          {/* Inner ring */}
          <circle
            cx="110" cy="110" r="76"
            fill="none"
            stroke="#d4af37"
            strokeWidth="0.6"
            strokeOpacity="0.5"
            strokeDasharray="477.5"
            strokeDashoffset="477.5"
            className="ring-draw-inner"
          />
          {/* Tiny diamond markers at cardinal points */}
          {[0, 90, 180, 270].map(deg => {
            const r = (deg * Math.PI) / 180;
            const cx = 110 + Math.cos(r) * 90;
            const cy = 110 + Math.sin(r) * 90;
            return (
              <motion.circle
                key={deg}
                cx={cx} cy={cy} r="3"
                fill="#d4af37"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.4 }}
              />
            );
          })}
        </svg>

        {/* Initials inside ring */}
        <motion.div
          className="absolute flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 1, ease: 'easeOut' }}
        >
          <span
            className="text-[#d4af37] leading-none"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: '3.5rem' }}
          >
            Aditya
          </span>
          <span className="text-[#d4af37] text-xl leading-none my-1">♥</span>
          <span
            className="text-[#d4af37] leading-none"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: '3.5rem' }}
          >
            Sayali
          </span>
        </motion.div>
      </div>

      {/* Wedding date */}
      <motion.p
        className="text-white/50 tracking-[0.5em] uppercase text-[10px] mb-14 font-light"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        07 · May · 2026
      </motion.p>

      {/* Tap to Enter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.1, duration: 0.8 }}
        className="flex flex-col items-center gap-3"
      >
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-[#d4af37]/30" />
          <p className="intro-pulse text-[#d4af37]/80 tracking-[0.35em] uppercase text-[10px]">
            Tap to Enter
          </p>
          <div className="h-px w-8 bg-[#d4af37]/30" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IntroScreen;
