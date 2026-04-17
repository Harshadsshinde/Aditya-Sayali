import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './pages/hero';
import IntroScreen from './components/IntroScreen';
import CursorTrail from './components/CursorTrail';
import SparkBurst from './components/SparkBurst';
import Confetti from './components/Confetti';
import CustomCursor from './components/CustomCursor';
import RippleEffect from './components/RippleEffect';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [confettiKey, setConfettiKey] = useState(0);

  const handleEnter = () => {
    setShowIntro(false);
    setConfettiKey(k => k + 1);
  };

  return (
    <>
      <CustomCursor />
      <CursorTrail />
      <SparkBurst />
      <RippleEffect />
      {!showIntro && <Confetti key={confettiKey} />}
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroScreen key="intro" onEnter={handleEnter} />
        ) : (
          <Hero key="hero" />
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
