import { Link } from 'react-router-dom';
import { SearchX } from 'lucide-react';

export default function EmptyState({ title, text, cta, to }) {
  return (
    <div className="rounded-2xl border border-dashed border-ink/20 bg-white px-6 py-14 text-center">
      <SearchX className="mx-auto mb-3 text-ink/40" size={36} />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mx-auto mt-1 max-w-md text-sm text-ink/60">{text}</p>
      {cta && <Link to={to} className="btn-primary mt-5">{cta}</Link>}
    </div>
  );
}
