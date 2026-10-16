import { createContext, useContext, useEffect, useState } from 'react';
import { load, save } from '../utils/storage.js';

const Ctx = createContext(null);

// Keys look like "d:hunza" (destination) or "t:t1" (tour).
export function WishlistProvider({ children }) {
  const [items, setItems] = useState(() => load('travelpk_wishlist', []));
  useEffect(() => save('travelpk_wishlist', items), [items]);
  const toggle = (key) => setItems((p) => (p.includes(key) ? p.filter((k) => k !== key) : [...p, key]));
  const has = (key) => items.includes(key);
  return <Ctx.Provider value={{ items, toggle, has }}>{children}</Ctx.Provider>;
}
export const useWishlist = () => useContext(Ctx);
