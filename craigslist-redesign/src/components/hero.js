import { useState } from 'react';
import Header from './header';
import { useNavigate } from 'react-router-dom'; // Import von useNavigate

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [suche, setSuche] = useState('');
  const [ort, setOrt] = useState('');
  const navigate = useNavigate();

  // Funktion zum Ausführen der Suche
  const handleSearch = () => {
    const radius = '10'; // Standardwert für den Radius
    navigate('/suche', { state: { searchTerm: suche, location: ort, radius } });
  };

  return (
    <div className="bg-white">
      <Header />

      <div className="relative isolate px-6 pt-14 lg:px-8">
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
              <button onClick={handleSearch} className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Suchen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
