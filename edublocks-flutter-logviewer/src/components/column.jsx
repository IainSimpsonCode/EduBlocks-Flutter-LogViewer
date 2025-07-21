function Column({ children, style = {}, className = '' }) {
  return (
    <div
      className={className}
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem', ...style }}
    >
      {children}
    </div>
  );
}

export default Column;
