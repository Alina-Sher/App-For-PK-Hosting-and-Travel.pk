import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CalendarDays, Lightbulb, MapPin, Mountain, Star } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import HeartButton from '../components/HeartButton.jsx';
import Img from '../components/Img.jsx';
import { DestinationCard, TourCard } from '../components/Cards.jsx';
import { destinations } from '../data/destinations.js';
import { tours } from '../data/tours.js';
import NotFound from './NotFound.jsx';

const List = ({ title, items, icon: I }) => (
  <div className="rounded-2xl border border-ink/10 bg-white p-5">
    <h3 className="mb-3 flex items-center gap-2 text-lg font-bold"><I size={18} className="text-brand" />{title}</h3>
    <ul className="list-disc space-y-1 pl-5 text-sm text-ink/80">{items.map((x) => <li key={x}>{x}</li>)}</ul>
  </div>
);

export default function DestinationDetail() {
  const { id } = useParams();
  const d = destinations.find((x) => x.id === id);
  const [active, setActive] = useState(0);
  if (!d) return <NotFound />;
  const pics = [d.img, ...d.gallery];
  const related = destinations.filter((x) => x.id !== d.id && (x.region === d.region || x.category === d.category)).slice(0, 3);
  const relTours = tours.filter((t) => t.destId === d.id);
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Destinations', to: '/destinations' }, { label: d.name }]} />
      <div className="container-x">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">{d.name}</h1>
            <p className="mt-1 flex flex-wrap items-center gap-3 text-ink/60"><span className="flex items-center gap-1"><MapPin size={16} />{d.region}</span><span className="flex items-center gap-1"><Star size={16} className="fill-amber-400 text-amber-400" />{d.rating}</span></p>
          </div>
          <HeartButton id={`d:${d.id}`} label={d.name} className="border border-ink/10" />
        </div>
        <div className="mt-6 grid gap-3 lg:grid-cols-[2fr_1fr]">
          <Img src={pics[active]} alt={`${d.name} photo ${active + 1}`} className="aspect-[16/10] w-full rounded-2xl" />
          <div className="grid grid-cols-4 gap-3 lg:grid-cols-1 lg:grid-rows-4">
            {pics.map((p, i) => (
              <button key={i} onClick={() => setActive(i)} aria-label={`Show photo ${i + 1}`} aria-pressed={active === i} className={`overflow-hidden rounded-xl border-2 ${active === i ? 'border-brand' : 'border-transparent'}`}>
                <Img src={p} alt={`${d.name} thumbnail ${i + 1}`} className="aspect-[4/3] h-full w-full" />
              </button>
            ))}
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-lg text-ink/80">{d.desc}</p>
        <div className="mt-4 flex items-start gap-2 rounded-xl bg-brand-light p-4 text-sm"><CalendarDays size={18} className="mt-0.5 shrink-0 text-brand" /><p><strong>Best time to visit:</strong> {d.bestTime}</p></div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <List title="Attractions" items={d.attractions} icon={MapPin} />
          <List title="Activities" items={d.activities} icon={Mountain} />
          <List title="Travel tips" items={d.tips} icon={Lightbulb} />
        </div>
      </div>
      {relTours.length > 0 && (
        <section className="container-x mt-14"><h2 className="mb-5 text-2xl font-bold">Tours to {d.name}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{relTours.map((t) => <TourCard key={t.id} t={t} />)}</div></section>
      )}
      {relTours.length === 0 && <p className="container-x mt-14 text-sm text-ink/60">No tours listed for {d.name} yet. <Link className="font-semibold text-brand" to="/tours">Browse all tours</Link>.</p>}
      {related.length > 0 && (
        <section className="container-x mt-14"><h2 className="mb-5 text-2xl font-bold">Related destinations</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((r) => <DestinationCard key={r.id} d={r} />)}</div></section>
      )}
    </>
  );
}
