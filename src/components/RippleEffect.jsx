import { useState, useEffect, useCallback } from 'react';

let uid = 0;

const SIZES = [60, 100, 150];

const RippleEffect = () => {
  const [ripples, setRipples] = useState([]);

  const spawnRipples = useCallback((x, y) => {
    const newRipples = SIZES.map((size, i) => ({
      id: ++uid,
      x,
      y,
      size,
      delay: i * 120,
    }));
    setRipples(prev => [...prev, ...newRipples]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => !newRipples.find(n => n.id === r.id)));
    }, 1100);
  }, []);

  useEffect(() => {
    const handleClick = (e) => spawnRipples(e.clientX, e.clientY);
    const handleTouch = (e) => {
      const t = e.touches[0];
      if (t) spawnRipples(t.clientX, t.clientY);
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('touchstart', handleTouch, { passive: true });
    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, [spawnRipples]);

  return (
    <>
      {ripples.map(r => (
        <div
          key={r.id}
          className="ripple-ring"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            animationDelay: `${r.delay}ms`,
          }}
        />
      ))}
    </>
  );
};

export default RippleEffect;
