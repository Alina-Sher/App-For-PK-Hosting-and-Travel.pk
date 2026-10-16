import { useState } from 'react';
import { ImageOff } from 'lucide-react';

export default function Img({ src, alt, className = '' }) {
  const [bad, setBad] = useState(false);
  if (bad || !src)
    return (
      <div role="img" aria-label={alt} className={`flex items-center justify-center bg-gradient-to-br from-brand/20 to-ink/20 text-ink/40 ${className}`}>
        <ImageOff />
      </div>
    );
  return <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={`object-cover ${className}`} />;
}
