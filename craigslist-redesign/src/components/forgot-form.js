import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Example() {
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmailSent(true);
        setTimeout(() => setEmailSent(false), 5000); // Nachricht nach 5 Sekunden ausblenden
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Passwort vergessen?
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
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
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-cl1 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cl2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cl1"
                            >
                                Passwort zurücksetzen
                            </button>
                        </div>
                    </form>

                    {emailSent && (
                        <div className="mt-4 p-4 rounded-md bg-green-100 border border-green-400 text-green-800">
                            <div className="flex items-center">
                                <svg className="h-6 w-6 flex-none fill-current text-green-600" viewBox="0 0 20 20">
                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L9 12.586l3.293-3.293a1 1 0 011.414 0z" />
                                </svg>
                                <span className="ml-3">E-Mail zur Passwortrücksetzung wurde gesendet.</span>
                            </div>
                        </div>
                    )}

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Doch erinnert?{' '}
                        <Link to="/login" className="font-semibold leading-6 text-cl1 hover:text-cl2">
                            Zurück zum Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}