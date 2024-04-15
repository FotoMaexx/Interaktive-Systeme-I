import { Typography } from "@material-tailwind/react";
 
const LINKS = [
  {
    title: "Seiten",
    items: ["Startseite", "Suchseite v1", "Suchseite v2", "Produktseite"],
  },
  {
    title: "‎",
    items: ["Verkäuferseite", "Chat", "Login", "Registrieren"],
  },
  {
    title: "Craigslist",
    items: ["Zu Craigslist"],
  },
];
 
const currentYear = new Date().getFullYear();
 
export function FooterWithSocialLinks() {
  return (
    <footer className="relative w-full mt-24">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">
            craigslist
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} Pia Schwarz & Maximilian Hauser | Uni Ulm 2024. All
            Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
