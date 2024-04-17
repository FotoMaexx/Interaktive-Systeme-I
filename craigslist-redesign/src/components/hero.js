import { useState, useEffect } from 'react';
import Header from './header';
import { useNavigate } from 'react-router-dom';
import ulm from '../assets/img/hero/ulm.jpg';
import berlin from '../assets/img/hero/berlin.jpg';
import stuttgart from '../assets/img/hero/stuttgart.jpg';
import muenchen from '../assets/img/hero/muenchen.jpg';
import hamburg from '../assets/img/hero/hamburg.jpg';
import koeln from '../assets/img/hero/koeln.jpg';
import defaultimg from '../assets/img/hero/default.jpg';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [suche, setSuche] = useState('');
  const [ort, setOrt] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(defaultimg);
  const navigate = useNavigate();

  useEffect(() => {
    const cityImages = {
      Ulm: ulm,
      Berlin: berlin,
      Stuttgart: stuttgart,
      München: muenchen,
      Hamburg: hamburg,
      Köln: koeln,
      default: defaultimg
    };
    setBackgroundImage(cityImages[ort] || cityImages.default);
  }, [ort]);

  const handleSearch = () => {
    const radius = '10';
    navigate('/suche', { state: { searchTerm: suche, location: ort, radius } });
  };

  return (
    <div>
      <Header />
      <div className="relative isolate">
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', transform: 'scale(1.05)', filter: 'blur(8px)'}} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white opacity-35"></div>
        </div>

        <div className="relative z-10 px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-3">
                Wilkommen bei Craigslist
              </h1>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Ich suche nach:{" "}
                <input
                  type="text"
                  value={suche}
                  onChange={(e) => setSuche(e.target.value)}
                  size={suche.length || "Fahrrad".length}
                  placeholder="Fahrrad"
                  className="no-border max-w-xs text-3xl underline font-light tracking-tight text-gray-900 sm:text-5xl bg-transparent"
                />
              </h2>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                In:{" "}
                <input
                  type="text"
                  value={ort}
                  onChange={(e) => setOrt(e.target.value)}
                  size={ort.length || "Ulm".length}
                  placeholder="Ulm"
                  className="no-border max-w-xs text-3xl underline font-light tracking-tight text-gray-900 sm:text-5xl bg-transparent"
                />
              </h2>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button onClick={handleSearch} className="rounded-md bg-cl1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cl2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cl2">
                  Suchen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
