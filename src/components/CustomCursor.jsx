import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const sx = useSpring(mx, { damping: 22, stiffness: 220 });
  const sy = useSpring(my, { damping: 22, stiffness: 220 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Only run on mouse devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const move = (e) => { mx.set(e.clientX); my.set(e.clientY); setVisible(true); };
    const over = (e) => { if (e.target.closest('a,button,[role="button"],input,select,textarea,[tabindex]')) setHovered(true); };
    const out  = () => setHovered(false);
    const down = () => setClicking(true);
    const up   = () => setClicking(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
    };
  }, [mx, my]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      {/* Outer ring — spring lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10001] rounded-full border-2"
        style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%', opacity: visible ? 1 : 0 }}
        animate={{
          width:  clicking ? 20  : hovered ? 54  : 36,
          height: clicking ? 20  : hovered ? 54  : 36,
          borderColor: hovered ? '#d4af37' : 'rgba(212,175,55,0.5)',
          backgroundColor: hovered ? 'rgba(212,175,55,0.08)' : 'transparent',
        }}
        transition={{ duration: 0.16 }}
      />
      {/* Inner dot — instant */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10002] rounded-full bg-[#d4af37]"
        style={{ x: mx, y: my, translateX: '-50%', translateY: '-50%', opacity: visible ? 1 : 0 }}
        animate={{ width: clicking ? 16 : hovered ? 5 : 8, height: clicking ? 16 : hovered ? 5 : 8 }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
