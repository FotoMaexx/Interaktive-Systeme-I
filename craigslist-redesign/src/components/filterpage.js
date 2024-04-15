import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XMarkIcon, ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import ProductGrid from './product-grid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const initialProducts = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '/Product',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'black',
    size: 'M',
    category: 'abholung'
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '/Product',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'black',
    size: 'M',
    category: 'abholung'
  },
  // Weitere Produkte hinzufügen
];

const sortOptions = [
  { name: 'Näheste', href: '#', current: false },
  { name: 'Neuste', href: '#', current: false },
  { name: 'Preis: niedrig zu hoch', href: '#', current: false },
  { name: 'Preis: hoch zu niedrig', href: '#', current: false },
];

const subCategories = [
  { name: 'T-Shirts', href: '#' },
  { name: 'Pullover', href: '#' },
  { name: 'Hosen', href: '#' },
  { name: 'Schuhe', href: '#' },
];

const filters = [
  {
    id: 'color',
    name: 'Farbe',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
      { value: 'red', label: 'Red', checked: false },
      { value: 'yellow', label: 'Yellow', checked: false },
      { value: 'gray', label: 'Gray', checked: false },
      { value: 'black', label: 'Black', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Kauf',
    options: [
      { value: 'abholung', label: 'Abholung möglich', checked: false },
      { value: 'versand', label: 'Versand möglich', checked: false },
      { value: 'kaeuferschutz', label: 'bietet Käuferschutz an', checked: false },
      { value: 'paypal', label: 'Zahlung per PayPal möglich', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Größe',
    options: [
      { value: 'XS', label: 'XS', checked: false },
      { value: 'S', label: 'S', checked: false },
      { value: 'M', label: 'M', checked: false },
      { value: 'L', label: 'L', checked: false },
      { value: 'XL', label: 'XL', checked: false },
      { value: 'XXL', label: 'XXL', checked: false },
    ],
  },
];

export default function FilterPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  // Aktualisiere Filter basierend auf den Auswahlen
  const updateFilters = (sectionId, value, checked) => {
    const newFilters = { ...activeFilters };
    
    // Sicherstellen, dass das Array existiert
    if (!newFilters[sectionId]) {
      newFilters[sectionId] = [];
    }
    
    if (checked) {
      // Hinzufügen des Wertes, wenn er noch nicht vorhanden ist
      if (!newFilters[sectionId].includes(value)) {
        newFilters[sectionId].push(value);
      }
    } else {
      // Entfernen des Wertes, wenn der Filter deaktiviert wird
      newFilters[sectionId] = newFilters[sectionId].filter(item => item !== value);
    }
  
    setActiveFilters(newFilters);
  };

  // Wende Filter auf Produkte an
  useEffect(() => {
    let products = initialProducts;
  
    // Überprüfung, ob Filter aktiv sind
    const filtersActive = Object.keys(activeFilters).some(
      key => activeFilters[key].length > 0
    );
  
    if (filtersActive) {
      // Anwenden der aktiven Filter auf die Produktliste
      Object.keys(activeFilters).forEach(filterKey => {
        if (activeFilters[filterKey].length > 0) {
          products = products.filter(product =>
            activeFilters[filterKey].includes(product[filterKey])
          );
        }
      });
    }
  
    // Setzt die gefilterten Produkte, oder alle Produkte, wenn keine Filter aktiv sind
    setFilteredProducts(products);
  }, [activeFilters, initialProducts]);
  

  return (
    <div className="bg-white">
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Categories</h3>
                  <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href} className="block px-2 py-3">
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    onChange={e => updateFilters(section.id, option.value, e.target.checked)}
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Aktuelle Suche</h1>

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
              <span className="sr-only">View grid</span>
              <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters on the left and product grid on the right */}
            <form className="hidden lg:block">
              <h3 className="sr-only">Categories</h3>
              <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                {subCategories.map((category) => (
                  <li key={category.name}>
                    <a href={category.href}>{category.name}</a>
                  </li>
                ))}
              </ul>

              {filters.map((section) => (
                <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">{section.name}</span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon className="h-5 w-5" aria-hidden="true" />
                            ) : (
                              <PlusIcon className="h-5 w-5" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex items-center">
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                defaultChecked={option.checked}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                onChange={e => updateFilters(section.id, option.value, e.target.checked)}
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </form>
            <div className="lg:col-span-3">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
