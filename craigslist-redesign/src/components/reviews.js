import { useState } from 'react';

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    {
      id: 1,
      user: 'Max Mustermann',
      rating: 4,
      comment: 'Tolles Produkt, sehr zufrieden!',
    },
    {
      id: 2,
      user: 'Erika Musterfrau',
      rating: 5,
      comment: 'Super Qualität und schnelle Lieferung.',
    },
    {
      id: 3,
      user: 'Hans Müller',
      rating: 3,
      comment: 'Gutes Preis-Leistungs-Verhältnis, aber etwas lange Lieferzeit.',
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Kundenbewertungen</h2>
        <div className="mt-6">
          {reviews.map((review) => (
            <div key={review.id} className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-gray-900 font-semibold">{review.user}</div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-yellow-400 ${index >= review.rating ? 'opacity-25' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 2a.75.75 0 0 1 .673.418l1.882 3.815 4.21.614a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L10 14.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.192-3.046-2.971a.75.75 0 0 1 .416-1.279l4.21-.614L9.327 2.418A.75.75 0 0 1 10 2zm0 2.445L8.615 7.06a.75.75 0 0 1-.572.41l-3.14.457 2.273 2.215a.75.75 0 0 1 .216.665l-.536 3.125 2.805-1.473a.75.75 0 0 1 .698 0l2.805 1.473-.536-3.125a.75.75 0 0 1 .216-.665l2.273-2.215-3.14-.457a.75.75 0 0 1-.572-.41L10 4.444v.001z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                  <span className="ml-1 text-gray-500">({review.rating})</span>
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
          {!showAll && reviews.length > 2 && (
            <button onClick={() => setShowAll(true)} className="text-purple-600 font-semibold hover:underline">
              Alle Bewertungen anzeigen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
