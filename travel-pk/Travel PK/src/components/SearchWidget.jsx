import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hotel, Map, Search } from 'lucide-react';
import { hotelCities } from '../data/hotels.js';
import { tourCategories, tourDestinations } from '../data/tours.js';
import { todayISO } from '../utils/format.js';

const Err = ({ m }) => (m ? <p role="alert" className="mt-1 text-xs text-rose-600">{m}</p> : null);

export default function SearchWidget() {
  const nav = useNavigate();
  const [tab, setTab] = useState('hotels');
  const [errs, setErrs] = useState({});
  const [h, setH] = useState({ city: '', checkIn: '', checkOut: '', guests: 2, rooms: 1 });
  const [t, setT] = useState({ destination: '', date: '', travelers: 2, category: '' });
  const today = todayISO();

  const submitHotels = (e) => {
    e.preventDefault();
    const x = {};
    if (!h.city) x.city = 'Choose a destination.';
    if (!h.checkIn || h.checkIn < today) x.checkIn = 'Pick a check-in date from today.';
    if (!h.checkOut || h.checkOut <= h.checkIn) x.checkOut = 'Check-out must be after check-in.';
    if (h.guests < 1 || h.guests > 20) x.guests = '1 to 20 guests.';
    if (h.rooms < 1 || h.rooms > 10) x.rooms = '1 to 10 rooms.';
    setErrs(x);
    if (Object.keys(x).length) return;
    nav(`/hotels?${new URLSearchParams({ city: h.city, checkIn: h.checkIn, checkOut: h.checkOut, guests: h.guests, rooms: h.rooms })}`);
  };
  const submitTours = (e) => {
    e.preventDefault();
    const x = {};
    if (t.date && t.date < today) x.date = 'Travel date cannot be in the past.';
    if (t.travelers < 1 || t.travelers > 20) x.travelers = '1 to 20 travelers.';
    setErrs(x);
    if (Object.keys(x).length) return;
    const p = new URLSearchParams();
    Object.entries(t).forEach(([k, v]) => v && p.set(k, v));
    nav(`/tours?${p}`);
  };
  const tabBtn = (id, Icon, label) => (
    <button type="button" role="tab" aria-selected={tab === id} onClick={() => { setTab(id); setErrs({}); }}
      className={`flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-semibold sm:flex-none ${tab === id ? 'border-b-2 border-brand text-brand' : 'text-ink/60 hover:text-ink'}`}>
      <Icon size={18} />{label}
    </button>
  );

  return (
    <div className="rounded-2xl bg-white p-4 shadow-xl sm:p-6">
      <div role="tablist" className="mb-4 flex border-b border-ink/10">{tabBtn('hotels', Hotel, 'Hotels')}{tabBtn('tours', Map, 'Tour Packages')}</div>
      {tab === 'hotels' ? (
        <form onSubmit={submitHotels} noValidate className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2"><label className="label" htmlFor="hc">Destination</label>
            <select id="hc" className="input" value={h.city} onChange={(e) => setH({ ...h, city: e.target.value })}>
              <option value="">Select a city</option>{hotelCities.map((c) => <option key={c}>{c}</option>)}
            </select><Err m={errs.city} /></div>
          <div><label className="label" htmlFor="ci">Check-in</label>
            <input id="ci" type="date" min={today} className="input" value={h.checkIn} onChange={(e) => setH({ ...h, checkIn: e.target.value })} /><Err m={errs.checkIn} /></div>
          <div><label className="label" htmlFor="co">Check-out</label>
            <input id="co" type="date" min={h.checkIn || today} className="input" value={h.checkOut} onChange={(e) => setH({ ...h, checkOut: e.target.value })} /><Err m={errs.checkOut} /></div>
          <div className="grid grid-cols-2 gap-3 lg:col-span-1">
            <div><label className="label" htmlFor="hg">Guests</label>
              <input id="hg" type="number" min="1" max="20" className="input" value={h.guests} onChange={(e) => setH({ ...h, guests: +e.target.value })} /><Err m={errs.guests} /></div>
            <div><label className="label" htmlFor="hr">Rooms</label>
              <input id="hr" type="number" min="1" max="10" className="input" value={h.rooms} onChange={(e) => setH({ ...h, rooms: +e.target.value })} /><Err m={errs.rooms} /></div>
          </div>
          <div className="flex items-end"><button className="btn-primary w-full"><Search size={16} />Search</button></div>
        </form>
      ) : (
        <form onSubmit={submitTours} noValidate className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div><label className="label" htmlFor="td">Destination</label>
            <select id="td" className="input" value={t.destination} onChange={(e) => setT({ ...t, destination: e.target.value })}>
              <option value="">Any destination</option>{tourDestinations.map((c) => <option key={c}>{c}</option>)}
            </select></div>
          <div><label className="label" htmlFor="tc">Category</label>
            <select id="tc" className="input" value={t.category} onChange={(e) => setT({ ...t, category: e.target.value })}>
              <option value="">All categories</option>{tourCategories.map((c) => <option key={c}>{c}</option>)}
            </select></div>
          <div><label className="label" htmlFor="tdate">Travel date</label>
            <input id="tdate" type="date" min={today} className="input" value={t.date} onChange={(e) => setT({ ...t, date: e.target.value })} /><Err m={errs.date} /></div>
          <div><label className="label" htmlFor="tt">Travelers</label>
            <input id="tt" type="number" min="1" max="20" className="input" value={t.travelers} onChange={(e) => setT({ ...t, travelers: +e.target.value })} /><Err m={errs.travelers} /></div>
          <div className="flex items-end"><button className="btn-primary w-full"><Search size={16} />Find tours</button></div>
        </form>
      )}
      <p className="mt-3 text-xs text-ink/50">Flights arrive in a later phase. All results are simulated demo data.</p>
    </div>
  );
}
