import { useState, useEffect, useRef } from 'react';

const SYMBOLS = ['✦', '✧', '★', '✦', '✧', '✦', '✧', '★', '✦', '✧'];
const COUNT = 10;

const SparkBurst = () => {
  const [bursts, setBursts] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    const onClick = (e) => {
      const burstId = idRef.current++;
      const particles = Array.from({ length: COUNT }, (_, i) => {
        const angle = (i / COUNT) * 360 + Math.random() * 20;
        const distance = 45 + Math.random() * 65;
        const rad = (angle * Math.PI) / 180;
        return {
          id: i,
          dx: Math.cos(rad) * distance,
          dy: Math.sin(rad) * distance,
          symbol: SYMBOLS[i],
        };
      });

      setBursts(prev => [...prev, { id: burstId, x: e.clientX, y: e.clientY, particles }]);
      setTimeout(() => {
        setBursts(prev => prev.filter(b => b.id !== burstId));
      }, 650);
    };

    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      {bursts.map(burst =>
        burst.particles.map(p => (
          <span
            key={`${burst.id}-${p.id}`}
            className="spark-particle"
            style={{
              left: burst.x,
              top: burst.y,
              '--dx': `${p.dx}px`,
              '--dy': `${p.dy}px`,
            }}
          >
            {p.symbol}
          </span>
        ))
      )}
    </>
  );
};

export default SparkBurst;
