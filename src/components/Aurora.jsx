const Aurora = () => (
  <div
    className="absolute inset-0 overflow-hidden pointer-events-none z-[2]"
    style={{ mixBlendMode: 'screen', opacity: 0.38 }}
  >
    <div className="aurora-blob aurora-pink" />
    <div className="aurora-blob aurora-violet" />
    <div className="aurora-blob aurora-gold" />
    <div className="aurora-blob aurora-cyan" />
    <div className="aurora-blob aurora-rose" />
  </div>
);

export default Aurora;
