import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import RegisterNotif from './register-notif'; // Stellen Sie sicher, dass der Pfad korrekt ist
import { useState } from 'react';

export default function Example() {
    const navigate = useNavigate();
    const [notifOpen, setNotifOpen] = useState(false); // Zustand für die Anzeige der Benachrichtigung

    const handleSubmit = async (event) => {
        event.preventDefault();
        setNotifOpen(true); // Benachrichtigung anzeigen
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Registrieren
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="flex space-x-4">
                            <div className="flex-1">
                                <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                                    Vorname
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="firstname"
                                        name="firstname"
                                        type="text"
                                        autoComplete="given-name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cl1 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="flex-1">
                                <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                                    Nachname
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="lastname"
                                        name="lastname"
                                        type="text"
                                        autoComplete="family-name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cl1 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                E-Mail Adresse
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cl1 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Passwort
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cl1 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password-confirm" className="block text-sm font-medium leading-6 text-gray-900">
                                Passwort bestätigen
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password-confirm"
                                    name="password-confirm"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cl1 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-cl1 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cl2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cl1"
                        >
                            Registrieren
                        </button>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Schon Mitglied?{' '}
                        <Link to="/login" className="font-semibold leading-6 text-cl1 hover:text-cl2">
                            Zurück zum Login
                        </Link>
                    </p>
                </div>
            </div>

            {notifOpen && <RegisterNotif />}
        </>
    );
}
