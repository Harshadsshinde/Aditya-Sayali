const ITEMS = [
  'Aditya', '♥', 'Sayali', '·',
  'May 7, 2026', '·', 'Suvarna Lawns', '·',
  'Save The Date', '·', 'Together Forever', '·',
  'Aditya', '♥', 'Sayali', '·',
  'May 7, 2026', '·', 'Suvarna Lawns', '·',
  'Save The Date', '·', 'Together Forever', '·',
];

const Ticker = () => (
  <div className="overflow-hidden bg-[#0d0a07] border-y border-gold/15 py-3 select-none flex items-center">
    <div className="ticker-track flex gap-8 whitespace-nowrap" style={{ width: 'max-content' }}>
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span
          key={i}
          className={`text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold ${
            item === '♥'
              ? 'text-rose-400'
              : item === '·'
              ? 'text-gold/25'
              : 'text-gold/55'
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default Ticker;
