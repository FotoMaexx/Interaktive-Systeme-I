import { products } from './products';
import React from 'react';

function getRandomProducts(num) {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export default function HomepageProductSlider() {
  const randomProducts = getRandomProducts(4);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Aktuell heiß in deiner Nähe</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {randomProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={product.images[0].src} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
                <button className="bg-cl2 text-white px-3 py-1.5 rounded-md text-sm font-medium">
                  {product.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}