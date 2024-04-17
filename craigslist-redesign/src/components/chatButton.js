import { useNavigate } from 'react-router-dom'; // Importieren von useNavigate

function ChatButton() {
  const navigate = useNavigate(); // useNavigate Hook verwenden

  // Funktion zum Navigieren zur Chat-Seite
  const goToChat = () => {
    navigate('/chat');
  };

  return (
    <button
      type="submit"
      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-cl1 px-8 py-3 text-base font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-cl1 focus:ring-offset-2"
      onClick={goToChat} // Hinzufügen des onClick-Eventhandlers
    >
      Verkäufer kontaktieren
    </button>
  );
}

export default ChatButton;
