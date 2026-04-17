import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[9997] pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #b8902a, #d4af37, #f5d87a, #d4af37, #b8902a)',
      }}
    />
  );
};

export default ScrollProgress;
