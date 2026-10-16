import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Check, Clock, MapPin, Star, Users, X } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import HeartButton from '../components/HeartButton.jsx';
import Img from '../components/Img.jsx';
import { TourCard } from '../components/Cards.jsx';
import { tours } from '../data/tours.js';
import { departures, fmtDate, pkr } from '../utils/format.js';
import { save } from '../utils/storage.js';
import NotFound from './NotFound.jsx';

export default function TourDetail() {
  const { id } = useParams();
  const t = tours.find((x) => x.id === id);
  const dates = departures();
  const [date, setDate] = useState(dates[0]);
  const [n, setN] = useState(2);
  const [note, setNote] = useState(null);
  if (!t) return <NotFound />;
  const valid = Number.isInteger(n) && n >= 1 && n <= t.maxGroup;
  const total = valid ? t.price * n : 0;
  const related = tours.filter((x) => x.id !== t.id && (x.category === t.category || x.destId === t.destId)).slice(0, 3);

  const saveSelection = () => {
    if (!valid) return setNote({ ok: false, text: `Choose between 1 and ${t.maxGroup} travelers.` });
    save('travelpk_draft_booking', { tourId: t.id, date, travelers: n, total });
    setNote({ ok: true, text: 'Selection saved in this browser. Online booking steps arrive in Phase 2.' });
  };
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Tour packages', to: '/tours' }, { label: t.title }]} />
      <div className="container-x">
        <Img src={t.img} alt={t.title} className="aspect-[21/9] min-h-[200px] w-full rounded-2xl" />
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="flex items-start justify-between gap-3">
              <h1 className="text-3xl font-bold sm:text-4xl">{t.title}</h1>
              <HeartButton id={`t:${t.id}`} label={t.title} className="shrink-0 border border-ink/10" />
            </div>
            <p className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-ink/70">
              <span className="flex items-center gap-1"><MapPin size={15} />{t.destId ? <Link className="hover:text-brand" to={`/destinations/${t.destId}`}>{t.dest}</Link> : t.dest}</span>
              <span className="flex items-center gap-1"><Clock size={15} />{t.days} days</span>
              <span className="flex items-center gap-1"><Users size={15} />Max {t.maxGroup}</span>
              <span className="flex items-center gap-1"><Star size={15} className="fill-amber-400 text-amber-400" />{t.rating}</span>
            </p>
            <p className="mt-4 text-lg text-ink/80">{t.summary}</p>
            <h2 className="mt-8 text-2xl font-bold">Highlights</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">{t.highlights.map((h) => <li key={h} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-brand" />{h}</li>)}</ul>
            <h2 className="mt-8 text-2xl font-bold">Day-by-day itinerary</h2>
            <ol className="mt-4 space-y-3">
              {t.itinerary.map((s, i) => (
                <li key={i} className="flex gap-4 rounded-xl border border-ink/10 bg-white p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">{i + 1}</span>
                  <div><p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Day {i + 1}</p><p className="font-medium">{s}</p></div>
                </li>
              ))}
            </ol>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-ink/10 bg-white p-5"><h3 className="mb-3 text-lg font-bold">Included</h3>
                <ul className="space-y-2 text-sm">{t.included.map((x) => <li key={x} className="flex gap-2"><Check size={16} className="shrink-0 text-emerald-600" />{x}</li>)}</ul></div>
              <div className="rounded-2xl border border-ink/10 bg-white p-5"><h3 className="mb-3 text-lg font-bold">Not included</h3>
                <ul className="space-y-2 text-sm">{t.excluded.map((x) => <li key={x} className="flex gap-2"><X size={16} className="shrink-0 text-rose-500" />{x}</li>)}</ul></div>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-ink/10 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <p className="text-sm text-ink/60">From</p>
            <p className="text-3xl font-bold text-brand-dark">{pkr(t.price)}<span className="text-sm font-normal text-ink/50"> / person</span></p>
            <div className="mt-4"><label htmlFor="dep" className="label">Departure date</label>
              <select id="dep" className="input" value={date} onChange={(e) => setDate(e.target.value)}>{dates.map((d) => <option key={d} value={d}>{fmtDate(d)}</option>)}</select></div>
            <div className="mt-3"><label htmlFor="trav" className="label">Travelers (max {t.maxGroup})</label>
              <input id="trav" type="number" min="1" max={t.maxGroup} className="input" value={Number.isNaN(n) ? '' : n} onChange={(e) => setN(parseInt(e.target.value, 10))} aria-invalid={!valid} />
              {!valid && <p role="alert" className="mt-1 text-xs text-rose-600">Enter 1 to {t.maxGroup} travelers.</p>}</div>
            <dl className="mt-4 space-y-1 border-t border-ink/10 pt-4 text-sm">
              <div className="flex justify-between"><dt>{pkr(t.price)} × {valid ? n : 0}</dt><dd>{pkr(total)}</dd></div>
              <div className="flex justify-between text-base font-bold"><dt>Estimated total</dt><dd>{pkr(total)}</dd></div>
            </dl>
            <button onClick={saveSelection} className="btn-primary mt-4 w-full">Save my selection</button>
            {note && <p role="status" className={`mt-3 text-sm ${note.ok ? 'text-emerald-700' : 'text-rose-600'}`}>{note.text}</p>}
            <p className="mt-3 text-xs text-ink/50">Simulated pricing and availability. No payment is taken.</p>
          </aside>
        </div>
        {related.length > 0 && (
          <section className="mt-14"><h2 className="mb-5 text-2xl font-bold">You may also like</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((r) => <TourCard key={r.id} t={r} />)}</div></section>
        )}
      </div>
    </>
  );
}
