import { useState } from 'react'
import Header from './header'
import { Link } from 'react-router-dom';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [suche, setSuche] = useState('');
  const [ort, setOrt] = useState('');

  return (
    <div className="bg-white">
      <Header />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="false"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
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
                size={suche.length || "Fahrrad".length} // Verwende die Länge des Platzhaltertexts direkt
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
                size={ort.length || "Ulm".length} // Verwende die Länge des Platzhaltertexts direkt
                placeholder="Ulm"
                className="no-border max-w-xs text-3xl underline font-light tracking-tight text-gray-900 sm:text-5xl bg-transparent"
              />
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/suche" className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Suchen
              </Link>
              {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Mehr Filter <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="false"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
