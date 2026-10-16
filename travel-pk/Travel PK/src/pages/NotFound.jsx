import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container-x py-24 text-center">
      <Compass className="mx-auto text-brand" size={48} />
      <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-brand">Error 404</p>
      <h1 className="mt-2 text-4xl font-bold">This trail doesn’t lead anywhere</h1>
      <p className="mx-auto mt-3 max-w-md text-ink/60">The page you’re looking for has moved or never existed. Let’s get you back on the route.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn-primary">Back to home</Link>
        <Link to="/destinations" className="btn-outline">Browse destinations</Link>
      </div>
    </div>
  );
}
