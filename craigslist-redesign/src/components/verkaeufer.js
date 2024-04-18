import React from 'react';

export default function Verkaeufer() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl grid gap-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Verkäufer</h2>
          <ul role="list" className="mt-8">
            <li>
              <div className="flex items-center gap-6">
                <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-6 text-gray-900">Leslie Alexander</h3>
                  <p className="text-sm font-semibold leading-5 text-purple-600">Co-Founder / CEO</p>
                  <p className="text-sm font-semibold leading-5 text-purple-600">leslie.amelie@gmail.com</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


