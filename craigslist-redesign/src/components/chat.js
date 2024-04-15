import React from 'react';

export default function ChatWindow() {
  return (
    <div className="flex h-screen">
      {/* Chat-Bereich: 2/3 der Ansicht */}
      <div className="flex flex-col w-2/3 border-r border-gray-200">
        {/* Nachrichten Bereich */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-4 p-2 bg-blue-100 rounded-md">
            <p className="text-sm">Hallo, wie kann ich Ihnen helfen?</p>
          </div>
          <div className="mb-4 p-2 bg-green-100 rounded-md self-end">
            <p className="text-sm">Ich hätte gerne mehr Informationen über das Produkt.</p>
          </div>
          {/* Weitere Nachrichten hier hinzufügen */}
        </div>
        {/* Eingabebereich */}
        <div className="border-t border-gray-200 p-4">
          <input
            type="text"
            placeholder="Schreibe eine Nachricht..."
            className="w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
      </div>

      {/* Verkäufer-Info Bereich: 1/3 der Ansicht */}
      <div className="w-1/3 p-4">
        <h3 className="text-lg font-semibold">Verkäufer Informationen</h3>
        <div className="mt-4">
          <p><strong>Name:</strong> Max Mustermann</p>
          <p><strong>Standort:</strong> Berlin, Deutschland</p>
          <p><strong>Bewertung:</strong> ★★★★☆</p>
          <p><strong>Weitere Infos:</strong> Erfahrener Verkäufer mit über 200 Verkäufen.</p>
        </div>
      </div>
    </div>
  );
}
