import React from "react";
import { Link } from 'react-router-dom';

// Services component displays information about browsing car options and booking on DriveEz
export default function Services() {
  return (
    <div className="mx-auto max-w-2xl lg:text-center">
      {/* Section heading */}
      <h1 className="text-3xl font-semibold leading-7" style={{ color: 'rgb(248, 161, 63)' }}>Endless options</h1>

      {/* Subheading */}
      <p className="mt-2 font-bold tracking-tight text-gray-900 sm:text-2xl">
        Browse the world’s largest car sharing marketplace
      </p>

      {/* Description of car options */}
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Whether it’s an SUV for a family road trip, a pickup truck for some errands, 
        or a classic sports car for a special night out,
        find the perfect car for all kinds of occasions and budgets on DriveEz.
      </p>

      {/* CTA button to redirect to the login page */}
      <div className="mt-4 md:mt-8">
        <Link
          to="/login"
          className="inline-block rounded custom-bg-color px-12 py-3 text-sm font-medium text-white transition hover:custom-bg-color focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Book the perfect car
        </Link>
      </div>
    </div>
  );
}
