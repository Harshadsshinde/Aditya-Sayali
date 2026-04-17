import { useState, useEffect, useMemo } from 'react';

const COLORS = [
  '#d4af37', '#f5d87a', '#ff9eb5', '#ff6b8b',
  '#ffb7c5', '#ffd700', '#ffffff', '#c41e3a',
];

const Confetti = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setActive(false), 5500);
    return () => clearTimeout(t);
  }, []);

  const particles = useMemo(() =>
    Array.from({ length: 90 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: COLORS[i % COLORS.length],
      w: 5 + Math.random() * 7,
      h: 6 + Math.random() * 12,
      dur: 2.8 + Math.random() * 2.2,
      delay: Math.random() * 1.8,
      dx: (Math.random() - 0.5) * 180,
      rot: (Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 540),
      round: Math.random() > 0.55,
    })), []
  );

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: `${p.w}px`,
            height: `${p.h}px`,
            background: p.color,
            borderRadius: p.round ? '50%' : '2px',
            '--cf-dur': `${p.dur}s`,
            '--cf-delay': `${p.delay}s`,
            '--cf-dx': `${p.dx}px`,
            '--cf-rot': `${p.rot}deg`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
