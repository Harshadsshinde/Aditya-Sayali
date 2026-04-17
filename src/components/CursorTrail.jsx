import { useState, useEffect, useRef } from 'react';

const GLITTER = [
  { sym: '✦', color: '#d4af37' },
  { sym: '✧', color: '#f5e6a0' },
  { sym: '★', color: '#e879a0' },
  { sym: '✿', color: '#fca5a5' },
  { sym: '❤', color: '#f43f5e' },
  { sym: '✦', color: '#c084fc' },
  { sym: '✧', color: '#67e8f9' },
  { sym: '★', color: '#d4af37' },
];
const THROTTLE_MS = 38;

const CursorTrail = () => {
  const [particles, setParticles] = useState([]);
  const lastTime = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    const spawn = (x, y) => {
      const now = Date.now();
      if (now - lastTime.current < THROTTLE_MS) return;
      lastTime.current = now;

      const id = idRef.current++;
      const g = GLITTER[id % GLITTER.length];
      const jx = (Math.random() - 0.5) * 14;
      const jy = (Math.random() - 0.5) * 14;
      const size = 10 + Math.random() * 8;

      setParticles(prev => [...prev, { id, x: x + jx, y: y + jy, sym: g.sym, color: g.color, size }]);
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== id));
      }, 850);
    };

    const onMouseMove = (e) => spawn(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      const t = e.touches[0];
      if (t) spawn(t.clientX, t.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <>
      {particles.map(p => (
        <span
          key={p.id}
          className="cursor-trail-particle"
          style={{
            left: p.x,
            top: p.y,
            color: p.color,
            fontSize: p.size,
            textShadow: `0 0 6px ${p.color}`,
          }}
        >
          {p.sym}
        </span>
      ))}
    </>
  );
};

export default CursorTrail;
