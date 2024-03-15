import categoryImage1 from '../assets/img/Categories1.jpg';
import categoryImage2 from '../assets/img/Categories2.jpg';
import categoryImage3 from '../assets/img/Categories3.jpg';

const callouts = [
    {
      name: 'Elektronik & Haushalt',
      description: 'Alles was du für dein Zuhause brauchst',
      imageSrc: categoryImage1,
      href: '#',
    },
    {
      name: 'Fahrzeuge & Zubehör',
      description: 'Dein nächstes Auto wartet auf dich',
      imageSrc: categoryImage2,
      href: '#',
    },
    {
      name: 'Technik & Hilfe',
      description: 'Finde den passenden Service für dein Anliegen',
      imageSrc: categoryImage3,
      href: '#',
    },
  ]
  
  export default function Example() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Stöbere druch unsere Kategorien</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }