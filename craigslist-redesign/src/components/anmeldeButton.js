import { useAuth } from '../contexts/AuthContext'; // Pfad anpassen nach Ordnerstruktur
import { useNavigate } from 'react-router-dom';
import pp from '../assets/img/pp.png';
 
function AnmeldeButton() {
  const { login } = useAuth();
  const navigate = useNavigate();

  // Simuliere eine erfolgreiche Anmeldung und navigiere zurück
  const handleLogin = () => {
    const userData = { name: "Benutzername", profilePic: pp };
    login(userData);
    navigate(-1); // Zurück navigieren, ändern Sie dies nach Bedarf
  };

  return (
    <button
      type="submit"
      onClick={handleLogin}
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Anmelden
    </button>
  );
}

export default AnmeldeButton;