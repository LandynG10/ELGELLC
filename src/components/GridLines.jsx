export default function GridLines({ columns = 4, className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 mx-auto hidden max-w-[1440px] md:block ${className}`}
    >
      <div className="grid h-full" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns }).map((_, i) => (
          <div key={i} className="h-full border-r border-[var(--line)] last:border-r-0" />
        ))}
      </div>
    </div>
  );
}
