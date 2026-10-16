import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Section({ title, sub, to, cta, children, tone = '' }) {
  return (
    <section className={`py-12 sm:py-16 ${tone}`}>
      <div className="container-x">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div><h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>{sub && <p className="mt-1 text-ink/60">{sub}</p>}</div>
          {to && <Link to={to} className="flex items-center gap-1 text-sm font-semibold text-brand hover:underline">{cta} <ArrowRight size={16} /></Link>}
        </div>
        {children}
      </div>
    </section>
  );
}
