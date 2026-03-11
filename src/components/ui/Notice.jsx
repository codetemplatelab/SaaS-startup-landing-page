const Notice = ({ title, children }) => (
  <div className="rounded-2xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-700">
    <p className="font-semibold">{title}</p>
    <p className="mt-1 text-brand-700/80">{children}</p>
  </div>
);

export default Notice;
