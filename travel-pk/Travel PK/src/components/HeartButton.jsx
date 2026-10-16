import { Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext.jsx';

export default function HeartButton({ id, label, className = '' }) {
  const { has, toggle } = useWishlist();
  const saved = has(id);
  return (
    <button type="button" onClick={() => toggle(id)} aria-pressed={saved}
      aria-label={saved ? `Remove ${label} from wishlist` : `Save ${label} to wishlist`}
      className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow transition hover:bg-white ${className}`}>
      <Heart size={18} className={saved ? 'fill-rose-500 text-rose-500' : 'text-ink'} />
    </button>
  );
}
