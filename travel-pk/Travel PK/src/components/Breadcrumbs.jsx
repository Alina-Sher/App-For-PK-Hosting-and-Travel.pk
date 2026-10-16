import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="container-x py-4 text-sm text-ink/60">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            {it.to ? <Link to={it.to} className="hover:text-brand">{it.label}</Link> : <span className="text-ink" aria-current="page">{it.label}</span>}
            {i < items.length - 1 && <ChevronRight size={14} />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
