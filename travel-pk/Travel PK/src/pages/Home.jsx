import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Compass, Headphones, ShieldCheck, Wallet } from 'lucide-react';
import SearchWidget from '../components/SearchWidget.jsx';
import Section from '../components/Section.jsx';
import Img from '../components/Img.jsx';
import { DestinationCard, HotelCard, TourCard } from '../components/Cards.jsx';
import { destinations, IMG } from '../data/destinations.js';
import { tours } from '../data/tours.js';
import { hotels } from '../data/hotels.js';

const themes = [
  { c: 'Adventure', img: IMG.night, text: 'Treks and high-altitude journeys' },
  { c: 'Family', img: IMG.lake, text: 'Easy-paced trips for all ages' },
  { c: 'Honeymoon', img: IMG.road, text: 'Quiet, romantic escapes' },
  { c: 'Weekend', img: IMG.city, text: 'Short breaks close to home' },
  { c: 'International', img: IMG.travel, text: 'Sample overseas packages' },
];
const faqs = [
  ['Are bookings real?', 'No. Travel.pk is a frontend demonstration. Prices, availability and reservations are simulated and no payment is taken.'],
  ['Where is my wishlist stored?', 'In your browser’s localStorage on this device only. Clearing site data removes it.'],
  ['Can I change my search after submitting?', 'Yes. Results pages keep your criteria in the URL and let you refine filters.'],
  ['When is the best time to visit the north?', 'Generally May to September for most valleys. Each destination page lists its own best season.'],
];

export default function Home() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <section className="relative">
        <Img src={IMG.hero} alt="Mountain landscape in northern Pakistan" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/70" />
        <div className="container-x relative py-16 sm:py-24">
          <h1 className="max-w-3xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">Discover the mountains, cities and coast of Pakistan</h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">Curated tours, handpicked stays and honest travel guidance for your next journey.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/destinations" className="btn-primary">Explore Destinations</Link>
            <Link to="/tours" className="btn bg-white text-ink hover:bg-sand">Discover Tours</Link>
          </div>
          <div className="mt-10"><SearchWidget /></div>
        </div>
      </section>

      <Section title="Popular destinations" sub="Places travellers return to again and again" to="/destinations" cta="All destinations">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{destinations.slice(0, 6).map((d) => <DestinationCard key={d.id} d={d} />)}</div>
      </Section>

      <Section title="Featured tour packages" sub="Guided itineraries with transport and stays included" to="/tours" cta="All tours" tone="bg-white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{tours.filter((t) => t.category !== 'International').slice(0, 4).map((t) => <TourCard key={t.id} t={t} />)}</div>
      </Section>

      <Section title="Travel by experience" sub="Adventure, family, honeymoon, weekend and international">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {themes.map((x) => (
            <Link key={x.c} to={`/tours?category=${x.c}`} className="group relative block aspect-[4/5] overflow-hidden rounded-2xl">
              <Img src={x.img} alt={`${x.c} tours`} className="h-full w-full transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white"><h3 className="text-xl font-bold">{x.c}</h3><p className="text-sm text-white/80">{x.text}</p></div>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Recommended hotels" sub="Sample properties across popular destinations" to="/hotels" cta="Browse hotels" tone="bg-white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{hotels.slice(0, 3).map((h) => <HotelCard key={h.id} h={h} />)}</div>
      </Section>

      <Section title="Why Travel.pk">
        <div className="grid gap-6 sm:grid-cols-3">
          {[[Compass, 'Local expertise', 'Itineraries shaped around seasons and road conditions.'], [Wallet, 'Clear pricing', 'Per-person prices with inclusions listed up front.'], [ShieldCheck, 'Honest demo', 'Everything on this site is simulated and labelled as such.']].map(([I, t, d]) => (
            <div key={t} className="rounded-2xl border border-ink/10 bg-white p-6"><I className="text-brand" /><h3 className="mt-3 text-lg font-bold">{t}</h3><p className="mt-1 text-sm text-ink/70">{d}</p></div>
          ))}
        </div>
      </Section>

      <Section title="Questions, answered" sub="Quick answers about this demo" tone="bg-white">
        <div className="mx-auto max-w-3xl divide-y divide-ink/10 rounded-2xl border border-ink/10">
          {faqs.map(([q, a], i) => (
            <div key={q}>
              <button type="button" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left font-semibold">
                {q}<ChevronDown size={18} className={`shrink-0 transition ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && <p className="px-5 pb-4 text-sm text-ink/70">{a}</p>}
            </div>
          ))}
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-ink/60"><Headphones size={16} />Support contact details are in the footer (demo).</p>
      </Section>
    </>
  );
}
