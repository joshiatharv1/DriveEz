import React from "react";
import Content from "./content.tsx";
import LandingPageFooter from "../LandingPageSection/LandingPageFooter.tsx";
import Navbar from "../navbar.tsx";
import { Link } from "react-router-dom";

const Userhome = () => {
  return (
    <>
    <Navbar/>
    <section
      className="overflow-hidden relative"
      style={{
        backgroundImage: `url('/images/user.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <div className="absolute inset-0 bg-black/25"></div>
      <div className="relative flex justify-end items-center h-full p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-left">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Instantly book cars near you
          </h2>

          <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Whether it’s an SUV for a family road trip, a pickup truck for some errands,
            or a classic sports car for a special night out,
            find the perfect car for all kinds of occasions and budgets on DriveEz.
          </p>

          <div className="mt-4 sm:mt-8">
            <Link to="/map"
              
              className="inline-block rounded-full bg-orange-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-orange-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Search for a car
            </Link>
          </div>
        </div>
      </div>
      
    </section>

    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-semibold leading-7  "style={{ color: 'rgb(248, 161, 63)' }}>DriveEz in Boston</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Zip North Shore or South Shore. Go outlet shopping at Wrentham. Or just cruise around your
           favorite square—Davis or Copley? Explore more with the world's leading car-sharing network. 
          </p>
        </div>
        </div>
      </div>
    
  

    <div className="mt-29">
        <Content />
        </div>

        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Instantly book cars near you
          </h2>

      <div><LandingPageFooter /></div>
  

</>


  );
};

export default Userhome;
