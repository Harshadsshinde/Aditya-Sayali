import { useMemo } from 'react';

const Fireflies = ({ count = 18 }) => {
  const flies = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 96 + 2,
      top: Math.random() * 90 + 5,
      size: 2 + Math.random() * 2.5,
      dur: 5 + Math.random() * 9,
      delay: Math.random() * 7,
      dx: (Math.random() - 0.5) * 70,
      dy: -(20 + Math.random() * 55),
    })),
  [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {flies.map(f => (
        <div
          key={f.id}
          className="firefly"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            '--ff-dur': `${f.dur}s`,
            '--ff-delay': `${f.delay}s`,
            '--ff-dx': `${f.dx}px`,
            '--ff-dy': `${f.dy}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Fireflies;
