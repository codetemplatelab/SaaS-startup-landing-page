const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700 shadow-inner-soft ${className}`}
  >
    {children}
  </span>
);

export default Badge;
