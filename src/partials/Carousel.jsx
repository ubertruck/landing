import React, {useEffect, useState} from 'react';

import CarouselImage01 from '../images/downloads/hand_1.jpg';
import CarouselImage02 from '../images/downloads/main_5.jpg';
import CarouselImage03 from '../images/downloads/main_18.jpg';
import CarouselImage04 from '../images/downloads/laptop_1.jpg';

// Import Swiper
import Swiper, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import SignupOptions from "./SignupOptions";
import Modal from "../utils/Modal";
Swiper.use([Autoplay, Navigation]);

function Carousel() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);


  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper('.carousel', {
      slidesPerView: 'auto',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
  }, [])

  return (
    <section className="border-t border-transparent dark:border-gray-800">
      <div className="py-12 md:py-20">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">

            <h1 className="h2 font-red-hat-display mb-4">Empower your transportation experience</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Effortlessly navigate the world of logistics with our innovative platform that connects truck drivers, shippers, carriers, and customers, offering a seamless transportation experience.</p>
          </div>

        </div>

        {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
        {/* * Custom styles in src/css/additional-styles/theme.scss */}
        <div className="carousel swiper-container">
          <div className="swiper-wrapper">
            {/* Carousel items */}
            <div className="swiper-slide max-w-lg">
              <img className="transition-opacity duration-300" src={CarouselImage01} width="540" height="460" alt="Carousel item 01" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex grow">
                    <div className="w-full h-full bg-gray-900 bg-opacity-80 from-gray-900 p-10">
                      <p className="font-bold leading-relaxed text-lg inline-flex text-white mx-auto self-center">Join our platform and enjoy the benefits of efficient transportation. Register and create an account today to gain access to faster load bookings, real-time shipment tracking, and optimized route planning. Experience a user-friendly dashboard and mobile app to monitor every step of your shipments. Let us streamline your logistics and elevate your transportation experience. Sign up now!</p>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <button type="button" onClick={(e) => {e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-teal-500  bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out">Get started</button>
                </div>
              </div>
            </div>

            <div className="swiper-slide max-w-lg">
              <img className="transition-opacity duration-300" src={CarouselImage02} width="540" height="460" alt="Carousel item 01" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex grow">
                  <div className="w-full h-full bg-gray-900 bg-opacity-80 from-gray-900 p-10">
                    <p className="font-bold leading-relaxed text-lg inline-flex text-white mx-auto self-center">Discover a seamless trucking experience with our platform. Register and create an account to access a world of loads waiting for you. Effortlessly find and book shipments, optimize routes, and track deliveries in real-time. Our user-friendly dashboard and mobile app keep you in control at every turn. Sign up now and take your trucking journey to new heights!</p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <button type="button" onClick={(e) => {e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-teal-500  bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out">Get started</button>
                </div>
              </div>
            </div>

            <div className="swiper-slide max-w-lg">
              <img className="transition-opacity duration-300" src={CarouselImage03} width="540" height="460" alt="Carousel item 01" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex grow">
                  <div className="w-full h-full bg-gray-900 bg-opacity-80 from-gray-900 p-10">
                    <p className="font-bold leading-relaxed text-lg inline-flex text-white mx-auto self-center">Welcome to a platform built for shippers like you. Simplify the way you ship goods with our user-friendly registration and account creation. Publish loads and connect with reliable carriers instantly. Enjoy the ease of live monitoring, tracking your shipments in real-time from pickup to delivery. Our intuitive dashboard and mobile app make managing your loads a breeze. Experience efficient shipping like never before</p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <button type="button" onClick={(e) => {e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-teal-500 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out">Get started</button>
                </div>
              </div>
            </div>

            <div className="swiper-slide max-w-lg">
              <img className="transition-opacity duration-300" src={CarouselImage04} width="540" height="460" alt="Carousel item 01" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex grow">
                  <div className="w-full h-full bg-gray-900 bg-opacity-80 from-gray-900 p-10">
                    <p className="font-bold leading-relaxed text-lg inline-flex text-white mx-auto self-center">Welcome to a platform built for shippers like you. Simplify the way you ship goods with our user-friendly registration and account creation. Publish loads and connect with reliable carriers instantly. Enjoy the ease of live monitoring, tracking your shipments in real-time from pickup to delivery. Our intuitive dashboard and mobile app make managing your loads a breeze. Experience efficient shipping like never before</p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <button type="button" onClick={(e) => {e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-teal-500 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out">Get started</button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Arrows */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mt-12 md:mt-16">
            <button className="carousel-prev relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
        <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
          <SignupOptions />
        </Modal>
      </div>
    </section>
  );
}

export default Carousel;
