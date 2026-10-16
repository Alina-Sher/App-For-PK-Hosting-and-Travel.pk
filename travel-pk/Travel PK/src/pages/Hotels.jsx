import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import EmptyState from '../components/EmptyState.jsx';
import { HotelCard } from '../components/Cards.jsx';
import { hotelCategories, hotelCities, hotels } from '../data/hotels.js';
import { fmtDate, nightsBetween } from '../utils/format.js';

export default function Hotels() {
  const [params] = useSearchParams();
  const checkIn = params.get('checkIn');
  const checkOut = params.get('checkOut');
  const nights = nightsBetween(checkIn, checkOut);
  const [city, setCity] = useState(params.get('city') || '');
  const [cat, setCat] = useState('');
  const [max, setMax] = useState('');
  const [sort, setSort] = useState('rating');
  const list = useMemo(() => {
    const r = hotels.filter((h) => (!city || h.city === city) && (!cat || h.category === cat) && (!max || h.price <= +max));
    return r.sort((a, b) => (sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : b.rating - a.rating));
  }, [city, cat, max, sort]);
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Hotels' }]} />
      <div className="container-x pb-10">
        <h1 className="text-3xl font-bold sm:text-4xl">Hotels</h1>
        <p className="mt-1 text-ink/60">Sample properties with simulated rates. Hotel booking arrives in Phase 2.</p>
        {nights > 0 && <p className="mt-2 inline-block rounded-lg bg-brand-light px-3 py-1.5 text-sm text-brand-dark">{fmtDate(checkIn)} to {fmtDate(checkOut)} · {nights} night{nights > 1 && 's'} · {params.get('guests') || 2} guest(s), {params.get('rooms') || 1} room(s)</p>}
        <div className="mt-6 grid gap-3 rounded-2xl border border-ink/10 bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
          <div><label htmlFor="hcity" className="label">City</label><select id="hcity" className="input" value={city} onChange={(e) => setCity(e.target.value)}><option value="">All cities</option>{hotelCities.map((c) => <option key={c}>{c}</option>)}</select></div>
          <div><label htmlFor="hcat" className="label">Property type</label><select id="hcat" className="input" value={cat} onChange={(e) => setCat(e.target.value)}><option value="">All types</option>{hotelCategories.map((c) => <option key={c}>{c}</option>)}</select></div>
          <div><label htmlFor="hmax" className="label">Max price / night</label><select id="hmax" className="input" value={max} onChange={(e) => setMax(e.target.value)}><option value="">Any</option><option value="10000">PKR 10,000</option><option value="25000">PKR 25,000</option><option value="40000">PKR 40,000</option></select></div>
          <div><label htmlFor="hsort" className="label">Sort by</label><select id="hsort" className="input" value={sort} onChange={(e) => setSort(e.target.value)}><option value="rating">Top rated</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div>
        </div>
        <div className="mt-6">
          {list.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((h) => <HotelCard key={h.id} h={h} nights={nights} />)}</div>
            : <EmptyState title="No hotels match" text="Try another city, type or price limit." cta="Reset search" to="/hotels" />}
        </div>
      </div>
    </>
  );
}
