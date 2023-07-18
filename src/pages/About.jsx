import React from 'react';

import Header from '../partials/Header';
import HeroAbout from '../partials/HeroAbout';
import FeaturesGallery from '../partials/FeaturesGallery';
import FeaturesAnimation from '../partials/FeaturesAnimation';
import CtaContact from '../partials/CtaContact';
import Footer from '../partials/Footer';
import Process2 from "../partials/Process2";

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <HeroAbout />
        <FeaturesGallery />
        <FeaturesAnimation />
          <Process2 />
        <CtaContact />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default About;