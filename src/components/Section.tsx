export function Label({ children, className="" }: { children: React.ReactNode; className?: string }) {
  return <div className={`text-[11px] uppercase tracking-[0.15em] font-bold text-teal-600 mb-2 ${className}`}>{children}</div>;
}
export function Title({ children, className="" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`font-serif text-[clamp(24px,3.5vw,36px)] leading-tight mb-4 ${className}`}>{children}</h2>;
}
