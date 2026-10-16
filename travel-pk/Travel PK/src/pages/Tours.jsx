import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import EmptyState from '../components/EmptyState.jsx';
import { TourCard } from '../components/Cards.jsx';
import { tourCategories, tours } from '../data/tours.js';
import { fmtDate } from '../utils/format.js';

export default function Tours() {
  const [params] = useSearchParams();
  const [q, setQ] = useState(params.get('destination') || '');
  const [cat, setCat] = useState(params.get('category') || '');
  const [budget, setBudget] = useState('');
  const [dur, setDur] = useState('');
  const [sort, setSort] = useState('rating');
  const date = params.get('date');
  const travelers = params.get('travelers');

  const list = useMemo(() => {
    const r = tours.filter((t) => {
      const s = q.toLowerCase();
      if (s && !(t.title + t.dest).toLowerCase().includes(s)) return false;
      if (cat && t.category !== cat) return false;
      if (budget && t.price > +budget) return false;
      if (dur === 'short' && t.days > 3) return false;
      if (dur === 'mid' && (t.days < 4 || t.days > 6)) return false;
      if (dur === 'long' && t.days < 7) return false;
      return true;
    });
    const by = { rating: (a, b) => b.rating - a.rating, low: (a, b) => a.price - b.price, high: (a, b) => b.price - a.price, days: (a, b) => a.days - b.days };
    return r.sort(by[sort]);
  }, [q, cat, budget, dur, sort]);

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Tour packages' }]} />
      <div className="container-x pb-6">
        <h1 className="text-3xl font-bold sm:text-4xl">Tour packages</h1>
        <p className="mt-1 text-ink/60">{list.length} tour{list.length !== 1 && 's'} found. Prices are per person and simulated.</p>
        {(date || travelers) && <p className="mt-2 inline-block rounded-lg bg-brand-light px-3 py-1.5 text-sm text-brand-dark">Your search: {date ? fmtDate(date) : 'any date'} · {travelers || 2} traveler(s)</p>}
        <div className="mt-6 grid gap-3 rounded-2xl border border-ink/10 bg-white p-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="relative"><label htmlFor="tq" className="label">Destination</label><Search size={16} className="absolute bottom-3.5 left-3 text-ink/40" />
            <input id="tq" className="input pl-9" placeholder="Search tours" value={q} onChange={(e) => setQ(e.target.value)} /></div>
          <div><label htmlFor="tcat" className="label">Category</label><select id="tcat" className="input" value={cat} onChange={(e) => setCat(e.target.value)}><option value="">All</option>{tourCategories.map((c) => <option key={c}>{c}</option>)}</select></div>
          <div><label htmlFor="tb" className="label">Budget (per person)</label><select id="tb" className="input" value={budget} onChange={(e) => setBudget(e.target.value)}><option value="">Any</option><option value="25000">Up to PKR 25,000</option><option value="50000">Up to PKR 50,000</option><option value="100000">Up to PKR 100,000</option><option value="300000">Up to PKR 300,000</option></select></div>
          <div><label htmlFor="td2" className="label">Duration</label><select id="td2" className="input" value={dur} onChange={(e) => setDur(e.target.value)}><option value="">Any</option><option value="short">1–3 days</option><option value="mid">4–6 days</option><option value="long">7+ days</option></select></div>
          <div><label htmlFor="ts" className="label">Sort by</label><select id="ts" className="input" value={sort} onChange={(e) => setSort(e.target.value)}><option value="rating">Top rated</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="days">Shortest first</option></select></div>
        </div>
      </div>
      <div className="container-x">
        {list.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{list.map((t) => <TourCard key={t.id} t={t} />)}</div>
          : <EmptyState title="No tours match your filters" text="Try widening your budget or duration." cta="Reset search" to="/tours" />}
      </div>
    </>
  );
}
