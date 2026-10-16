import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { WishlistProvider } from './context/WishlistContext.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Destinations from './pages/Destinations.jsx';
import DestinationDetail from './pages/DestinationDetail.jsx';
import Tours from './pages/Tours.jsx';
import TourDetail from './pages/TourDetail.jsx';
import Hotels from './pages/Hotels.jsx';
import Wishlist from './pages/Wishlist.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  return (
    <WishlistProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="destinations/:id" element={<DestinationDetail />} />
            <Route path="tours" element={<Tours />} />
            <Route path="tours/:id" element={<TourDetail />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WishlistProvider>
  );
}
