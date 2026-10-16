import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, Users } from 'lucide-react';
import Img from './Img.jsx';
import HeartButton from './HeartButton.jsx';
import { pkr } from '../utils/format.js';

const Rating = ({ v }) => (
  <span className="inline-flex items-center gap-1 text-sm font-semibold"><Star size={14} className="fill-amber-400 text-amber-400" />{v}</span>
);

export function DestinationCard({ d }) {
  return (
    <article className="card group relative">
      <HeartButton id={`d:${d.id}`} label={d.name} className="absolute right-3 top-3 z-10" />
      <Link to={`/destinations/${d.id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <Img src={d.img} alt={`${d.name}, ${d.region}`} className="h-full w-full transition duration-500 group-hover:scale-105" />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold">{d.name}</h3><Rating v={d.rating} />
          </div>
          <p className="mt-1 flex items-center gap-1 text-sm text-ink/60"><MapPin size={14} />{d.region}</p>
          <p className="mt-2 text-sm text-ink/70">{d.tagline}</p>
        </div>
      </Link>
    </article>
  );
}

export function TourCard({ t }) {
  return (
    <article className="card group relative flex flex-col">
      <HeartButton id={`t:${t.id}`} label={t.title} className="absolute right-3 top-3 z-10" />
      <Link to={`/tours/${t.id}`} className="flex flex-1 flex-col">
        <div className="aspect-[16/10] overflow-hidden">
          <Img src={t.img} alt={t.title} className="h-full w-full transition duration-500 group-hover:scale-105" />
        </div>
        <div className="flex flex-1 flex-col p-4">
          <span className="mb-2 w-fit rounded-full bg-brand-light px-2.5 py-0.5 text-xs font-semibold text-brand-dark">{t.category}</span>
          <h3 className="text-lg font-bold leading-snug">{t.title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink/60">
            <span className="flex items-center gap-1"><Clock size={14} />{t.days} days</span>
            <span className="flex items-center gap-1"><Users size={14} />Up to {t.maxGroup}</span>
            <Rating v={t.rating} />
          </div>
          <div className="mt-auto flex items-end justify-between pt-4">
            <div><span className="text-xs text-ink/50">From</span><p className="text-lg font-bold text-brand-dark">{pkr(t.price)}</p></div>
            <span className="text-sm font-semibold text-brand">View details</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export function HotelCard({ h, nights = 0 }) {
  return (
    <article className="card flex flex-col">
      <div className="aspect-[16/10] overflow-hidden"><Img src={h.img} alt={`${h.name} in ${h.city}`} className="h-full w-full" /></div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold leading-snug">{h.name}</h3><Rating v={h.rating} />
        </div>
        <p className="mt-1 flex items-center gap-1 text-sm text-ink/60"><MapPin size={14} />{h.city} · {h.category}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {h.amenities.map((a) => <li key={a} className="rounded bg-sand px-2 py-0.5 text-xs text-ink/70">{a}</li>)}
        </ul>
        <div className="mt-auto flex items-end justify-between pt-4">
          <div>
            <p className="text-lg font-bold text-brand-dark">{pkr(h.price)}<span className="text-xs font-normal text-ink/50"> / night</span></p>
            {nights > 0 && <p className="text-xs text-ink/60">{nights} night{nights > 1 ? 's' : ''}: {pkr(h.price * nights)}</p>}
          </div>
          <Link to={`/destinations/${h.destId}`} className="text-sm font-semibold text-brand">Explore {h.city}</Link>
        </div>
      </div>
    </article>
  );
}
