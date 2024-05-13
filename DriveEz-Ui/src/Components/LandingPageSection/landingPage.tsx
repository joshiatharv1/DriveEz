import React from 'react';
import AboutSection from './aboutSection.tsx';
import LandingPageFooter from './LandingPageFooter.tsx';
import LandingPageHeader from './LandingPageHeader.tsx';
import Question from '../Authentication/question.tsx';
import Carmenu from '../Authentication/Carmenu.tsx';
import Services from '../Authentication/Services.tsx';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return <div className='bg-gray-50'>
    <div >
      <LandingPageHeader />
    </div>


    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center mt-10 mr-10">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Experience the convertible lifestyle
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            There is perhaps no more enjoyable a driving experience than cruising in fresh air. This rings true whether you’re in a busy city, high up in the mountains, or along the coast. Convertibles just do not disappoint.
          </p>
          <p className="hidden text-gray-500 md:mt-4 md:block">
            In addition to windblown hair, many convertibles boast smooth rides, powerful engines, and a suite of creature comforts. From two- and four-seaters to soft and hard tops, Turo is the place to find a stylish convertible for top-down cruising.
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              to="/register"
              className="inline-block rounded custom-bg-color px-12 py-3 text-sm font-medium text-white transition hover:custom-bg-color focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      <img
        alt="Violin"
        src="/images/image1.jpg"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>

    <div id="home">
      <AboutSection />
    </div>

    <div id="about">
      <Services />
    </div>

    <div >
      <Carmenu />
    </div>


    <div id="services">
      <Question />
    </div>


    <div id="contact"><LandingPageFooter /></div>
  </div>;
}

export default LandingPage;