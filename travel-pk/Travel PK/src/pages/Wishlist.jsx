import Breadcrumbs from '../components/Breadcrumbs.jsx';
import EmptyState from '../components/EmptyState.jsx';
import { DestinationCard, TourCard } from '../components/Cards.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';
import { destinations } from '../data/destinations.js';
import { tours } from '../data/tours.js';

export default function Wishlist() {
  const { items } = useWishlist();
  const ds = destinations.filter((d) => items.includes(`d:${d.id}`));
  const ts = tours.filter((t) => items.includes(`t:${t.id}`));
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Wishlist' }]} />
      <div className="container-x">
        <h1 className="text-3xl font-bold sm:text-4xl">Your wishlist</h1>
        <p className="mt-1 text-ink/60">Saved on this device in your browser.</p>
        {!ds.length && !ts.length ? (
          <div className="mt-6"><EmptyState title="Nothing saved yet" text="Tap the heart on any destination or tour to keep it here." cta="Explore destinations" to="/destinations" /></div>
        ) : (
          <>
            {ds.length > 0 && <><h2 className="mb-4 mt-8 text-2xl font-bold">Destinations ({ds.length})</h2><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{ds.map((d) => <DestinationCard key={d.id} d={d} />)}</div></>}
            {ts.length > 0 && <><h2 className="mb-4 mt-10 text-2xl font-bold">Tours ({ts.length})</h2><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{ts.map((t) => <TourCard key={t.id} t={t} />)}</div></>}
          </>
        )}
      </div>
    </>
  );
}
