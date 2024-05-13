
import { Carousel } from 'flowbite-react';
import React from 'react';

export default function Carmenu() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h4 className="text-l font-bold text-gray-900 sm:text-2xl">Car Collection</h4>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <a href="#" className="group block overflow-hidden">
              <div className="relative aspect-w-2 aspect-h-6">
                <img
                  src="/images/bmw1.jpg"
                  alt="OD"
                  className="object-cover object-center w-full h-full transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative bg-white pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  BMW
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>
                  <span className="tracking-wider text-gray-900"> $ 45/hr </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <div className="relative aspect-w-2 aspect-h-8">
                <img
                  src="/images/car1.jpg"  
                  alt="OD"
                  className="object-cover object-center w-full h-full transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative bg-white pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Audi
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>
                  <span className="tracking-wider text-gray-900"> $ 30/hr </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <div className="relative aspect-w-2 aspect-h-6">
                <img
                  src="/images/merce.jpeg"  
                  alt="OD"
                  className="object-cover object-center w-full h-full transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative bg-white pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Mercedes
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>
                  <span className="tracking-wider text-gray-900"> $ 38/hr </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <div className="relative aspect-w-2 aspect-h-6">
                <img
                  src="/images/suv.jpg"  
                  alt="OD"
                  className="object-cover object-center w-full h-full transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative bg-white pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  SUV
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>
                  <span className="tracking-wider text-gray-900"> $ 50/hr </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

