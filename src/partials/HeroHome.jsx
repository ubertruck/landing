import React from 'react';
import { Link } from 'react-router-dom';

// import HeroBg from '../images/hero-bg.jpg';
import HeroBg from '../images/downloads/main_12.jpg';

function HeroHome() {

  return (
      <section className="relative">

        {/* Background image */}
        <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
          <img className="absolute inset-0 w-full h-full object-cover opacity-30" src={HeroBg} width="1440" height="577" alt="About" />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-16">

            {/* Featured article */}
            <div className="max-w-3xl" data-aos="fade-down">
              <article>
                <header>
                  {/* Title and excerpt */}
                  <div className="text-center md:text-left">
                      <h1 className="h1 font-red-hat-display mb-4">Revolutionize Your Shipping Process</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">Optimize your freight operations with our intuitive dashboard, mobile app, and advanced analytics. Stay in control from pickup to drop-off.</p>
                  </div>
                  {/* Article meta */}
                  <div className="md:flex md:items-center md:justify-between mt-5">
                    {/* Author meta */}
                    <form className="mt-8" data-aos="fade-down" data-aos-delay="300">
                      <div className="flex flex-col sm:flex-row justify-center max-w-sm mx-auto sm:max-w-md md:mx-0">
                        <Link to="/contact">
                          <p className="btn text-white bg-teal-500 hover:bg-teal-400 shrink-0">Request one time shipment</p>
                        </Link>
                      </div>
                      {/* Success message */}
                      {/* <p className="text-center md:text-left mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
                    </form>
                  </div>
                </header>
              </article>
            </div>

          </div>
        </div>

      </section>
  );
}

export default HeroHome;