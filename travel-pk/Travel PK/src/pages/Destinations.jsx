import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import EmptyState from '../components/EmptyState.jsx';
import { DestinationCard } from '../components/Cards.jsx';
import { categories, destinations, regions } from '../data/destinations.js';

export default function Destinations() {
  const [q, setQ] = useState('');
  const [region, setRegion] = useState('');
  const [cat, setCat] = useState('');
  const [sort, setSort] = useState('rating');
  const list = useMemo(() => {
    const r = destinations.filter((d) => (!q || d.name.toLowerCase().includes(q.toLowerCase())) && (!region || d.region === region) && (!cat || d.category === cat));
    return r.sort((a, b) => (sort === 'name' ? a.name.localeCompare(b.name) : b.rating - a.rating));
  }, [q, region, cat, sort]);
  const reset = () => { setQ(''); setRegion(''); setCat(''); };
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Destinations' }]} />
      <div className="container-x pb-6">
        <h1 className="text-3xl font-bold sm:text-4xl">Destinations</h1>
        <p className="mt-1 text-ink/60">{list.length} place{list.length !== 1 && 's'} to explore across Pakistan</p>
        <div className="mt-6 grid gap-3 rounded-2xl border border-ink/10 bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative"><label htmlFor="dq" className="label">Search</label><Search size={16} className="absolute bottom-3.5 left-3 text-ink/40" />
            <input id="dq" className="input pl-9" placeholder="e.g. Hunza" value={q} onChange={(e) => setQ(e.target.value)} /></div>
          <div><label htmlFor="dr" className="label">Region</label><select id="dr" className="input" value={region} onChange={(e) => setRegion(e.target.value)}><option value="">All regions</option>{regions.map((r) => <option key={r}>{r}</option>)}</select></div>
          <div><label htmlFor="dc" className="label">Category</label><select id="dc" className="input" value={cat} onChange={(e) => setCat(e.target.value)}><option value="">All categories</option>{categories.map((c) => <option key={c}>{c}</option>)}</select></div>
          <div><label htmlFor="ds" className="label">Sort by</label><select id="ds" className="input" value={sort} onChange={(e) => setSort(e.target.value)}><option value="rating">Top rated</option><option value="name">Name A–Z</option></select></div>
        </div>
      </div>
      <div className="container-x">
        {list.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{list.map((d) => <DestinationCard key={d.id} d={d} />)}</div>
          : <div><EmptyState title="No destinations match" text="Try a different name or clear the filters." /><div className="mt-4 text-center"><button onClick={reset} className="btn-outline">Clear filters</button></div></div>}
      </div>
    </>
  );
}
