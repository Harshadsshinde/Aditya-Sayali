import { useState, useEffect, useRef } from 'react';

const CHARS = 'アイウエオカキABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%!?*';

const ScrambleText = ({ text, className, tag: Tag = 'span' }) => {
  const [output, setOutput] = useState(text);
  const [fired, setFired] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired) {
          setFired(true);
          let frame = 0;
          const total = 24;
          const iv = setInterval(() => {
            setOutput(
              text.split('').map((ch, i) => {
                if (ch === ' ') return ' ';
                if (frame > (i / text.length) * total) return ch;
                return CHARS[Math.floor(Math.random() * CHARS.length)];
              }).join('')
            );
            frame++;
            if (frame > total + 4) { clearInterval(iv); setOutput(text); }
          }, 42);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [text, fired]);

  return <Tag ref={ref} className={className}>{output}</Tag>;
};

export default ScrambleText;
