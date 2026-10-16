import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Heart, Menu, X, Compass } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext.jsx';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/destinations', label: 'Destinations' },
  { to: '/tours', label: 'Tour Packages' },
  { to: '/hotels', label: 'Hotels' },
];
const linkCls = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-brand-light text-brand-dark' : 'text-ink/80 hover:text-brand'}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { items } = useWishlist();
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold text-ink" aria-label="Travel.pk home">
          <Compass className="text-brand" /> Travel<span className="text-brand">.pk</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map((l) => <NavLink key={l.to} {...l} className={linkCls}>{l.label}</NavLink>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/wishlist" className="relative rounded-full p-2 hover:bg-sand" aria-label={`Wishlist, ${items.length} saved`}>
            <Heart size={22} />
            {items.length > 0 && <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-xs font-bold text-white">{items.length}</span>}
          </Link>
          <Link to="/tours" className="btn-primary hidden sm:inline-flex">Explore Tours</Link>
          <button className="rounded-md p-2 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-ink/10 bg-white lg:hidden">
          <div className="container-x flex flex-col gap-1 py-3">
            {links.map((l) => <NavLink key={l.to} {...l} className={linkCls}>{l.label}</NavLink>)}
            <NavLink to="/wishlist" className={linkCls}>Wishlist ({items.length})</NavLink>
            <Link to="/tours" className="btn-primary mt-2">Explore Tours</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
