import React, { useState, useEffect } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const autoResponses = [
    "Hallo, der letzte Preis für den Artikel ist 50€.",
    "Ja, ich biete auch Versand an. Bezahlung dann bitte per PayPal Freunde und Familie.",
    "Ja, das Geld ist angekommen. Ich werde den Artikel morgen versenden.",
    "Kein Thema, der Artikel wurde gerade versendet. 00340434384468912657"
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: "Käufer"
      };
      setMessages(messages => [...messages, userMessage]);
      setNewMessage("");
    }
  };

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === "Käufer" && messages.length <= 8) {
      setTimeout(() => {
        const responseIndex = (messages.filter(msg => msg.sender === "Verkäufer").length) % autoResponses.length;
        const sellerMessage = {
          id: messages.length + 1,
          text: autoResponses[responseIndex],
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sender: "Verkäufer"
        };
        setMessages(messages => [...messages, sellerMessage]);
      }, 1000);
    }
  }, [messages]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full">
          {/* Chat-Bereich */}
          <div className="flex flex-col w-full md:w-2/3" style={{ minHeight: '80vh' }}>
            {/* Nachrichten Bereich */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "Verkäufer" ? "justify-start" : "justify-end"}`}>
                  <div className={`flex flex-col ${message.sender === "Verkäufer" ? "items-start" : "items-end"}`}>
                    <div className={`px-4 py-2 rounded-lg ${message.sender === "Verkäufer" ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"}`}>
                      {message.text}
                    </div>
                    <span className="text-xs text-gray-500">{message.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Eingabebereich */}
            <div className="mb-4 mx-4">
              <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg">
                <input
                  type="text"
                  placeholder="Schreibe eine Nachricht..."
                  className="bg-transparent p-2 w-full focus:outline-none text-sm text-gray-700"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  className="p-2 text-blue-500 hover:text-blue-400"
                  onClick={handleSendMessage}
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Verkäufer-Info Bereich */}
          <div className="w-full md:w-1/3 p-4 bg-white">
            <h3 className="text-lg font-semibold border-b border-gray-300 pb-2">Verkäufer Informationen</h3>
            <div className="mt-4 text-sm">
              <p><strong>Name:</strong> Max Mustermann</p>
              <p><strong>Standort:</strong> Berlin, Deutschland</p>
              <p><strong>Bewertung:</strong> ★★★★☆</p>
              <p><strong>Weitere Infos:</strong> Erfahrener Verkäufer mit über 200 Verkäufen.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
