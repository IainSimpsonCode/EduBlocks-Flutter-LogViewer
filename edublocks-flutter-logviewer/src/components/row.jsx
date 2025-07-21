function Row({ children, style = {}, className = '' }) {
  return (
    <div
      className={className}
      style={{ display: 'flex', flexDirection: 'row', gap: '1rem', ...style }}
    >
      {children}
    </div>
  );
}

export default Row;

