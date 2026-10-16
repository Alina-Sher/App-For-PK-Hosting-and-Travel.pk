import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin } from 'lucide-react';
import { isEmail } from '../utils/format.js';

const col = 'text-sm text-white/70 hover:text-white';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState(null);
  const submit = (e) => {
    e.preventDefault();
    if (!isEmail(email)) return setMsg({ ok: false, text: 'Please enter a valid email address.' });
    setMsg({ ok: true, text: 'Thanks! This is a demo, so no subscription was created.' });
    setEmail('');
  };
  return (
    <footer className="mt-20 bg-ink text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="flex items-center gap-2 font-display text-2xl font-bold"><Compass className="text-teal-300" /> Travel.pk</p>
          <p className="mt-3 text-sm text-white/70">Discover Pakistan’s mountains, cities and coastline with curated tours and hotel stays. Frontend demonstration project.</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" />Demo address, Lahore, Pakistan</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" />+92 300 0000000 (demo)</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0" />hello@travel.pk (demo)</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-sans text-sm font-bold uppercase tracking-wide">Explore</h3>
          <ul className="space-y-2">
            <li><Link className={col} to="/">Home</Link></li>
            <li><Link className={col} to="/destinations">All destinations</Link></li>
            <li><Link className={col} to="/tours">Tour packages</Link></li>
            <li><Link className={col} to="/hotels">Hotels</Link></li>
            <li><Link className={col} to="/wishlist">Wishlist</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-sans text-sm font-bold uppercase tracking-wide">Popular</h3>
          <ul className="space-y-2">
            {[['hunza', 'Hunza Valley'], ['skardu', 'Skardu'], ['fairy-meadows', 'Fairy Meadows'], ['swat', 'Swat Valley']].map(([id, n]) => (
              <li key={id}><Link className={col} to={`/destinations/${id}`}>{n}</Link></li>
            ))}
            {['Adventure', 'Family', 'Honeymoon'].map((c) => <li key={c}><Link className={col} to={`/tours?category=${c}`}>{c} tours</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-sans text-sm font-bold uppercase tracking-wide">Newsletter</h3>
          <form onSubmit={submit} noValidate>
            <label htmlFor="nl" className="sr-only">Email address</label>
            <input id="nl" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="input" aria-describedby="nl-msg" />
            <button className="btn-primary mt-2 w-full">Subscribe</button>
            <p id="nl-msg" role="status" className={`mt-2 text-xs ${msg?.ok ? 'text-teal-300' : 'text-rose-300'}`}>{msg?.text}</p>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Travel.pk demo. Prices, availability and bookings are simulated.
      </div>
    </footer>
  );
}
