import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

function TestimonialsCarousel() {

  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const [autorotateTiming] = useState(7000);
  const [items] = useState([
    {
      quote: '“ Joining the platform has been a game-changer for our business. The streamlined process, efficient load booking, and real-time tracking have significantly improved our operations. We\'ve experienced a 25% increase in productivity and saved valuable time and resources. Thanks to the platform, we\'ve successfully expanded our reach and forged strong partnerships. Highly recommended!“',
      name: 'Chad Townsend',
      role: 'CEO at',
      team: 'SKTO Logistics',
      link: '#0'
    },
    {
      quote: '“ The platform has transformed the way we manage our shipments. With its user-friendly interface and robust features, we effortlessly connect with reliable carriers and efficiently publish loads. The real-time monitoring and insightful analytics have empowered us to make informed decisions, ensuring on-time deliveries and exceeding customer expectations. It\'s been a game-changer for our logistics management.“',
      name: 'David Smith',
      role: 'Head of Logistics at',
      team: 'Carggo',
      link: '#0'
    },
    {
      quote: '“ Our experience with the platform has been exceptional. The powerful dashboard and mobile app have provided us with complete visibility and control over our transportation process. The seamless communication with carriers, along with the easy load booking and tracking, has optimized our workflow and improved overall efficiency. We\'ve seen a 20% reduction in costs and a significant boost in customer satisfaction. Truly impressive!“',
      name: 'Sam Jones',
      role: 'Logistics Manager at',
      team: 'Logistics Plus',
      link: '#0'
    }
  ]);

  const testimonials = useRef(null);

  const stopAutorotate = () => {
    setAutorotate(null);
  }

  const heightFix = () => {
    if (testimonials.current.children[active]) {
      testimonials.current.style.height = testimonials.current.children[active].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, autorotate])

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Carousel area */}
          <div className="max-w-5xl mx-auto">

            {/* Carousel */}
            <div className="relative" data-aos="fade-down">

              {/* Testimonials */}
              <div className="relative flex items-start z-10 transition-all duration-300 ease-in-out" ref={testimonials}>

                {items.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    appear={true}
                    className="w-full text-center px-12 py-8 mx-4 md:mx-0"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 -translate-y-8"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 translate-y-8"
                  >

                    <blockquote className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-400 mb-4">{item.quote}</blockquote>
                    <div className="font-medium text-lg">
                      <cite className="not-italic text-gray-800 dark:text-gray-100">{item.name}</cite>
                      <span className="text-gray-200 dark:text-gray-700"> - </span>
                      <span className="text-gray-500 dark:text-gray-400">{item.role}</span> <a className="text-teal-500 hover:underline" href={item.link}>{item.team}</a>
                    </div>

                  </Transition>
                ))}

              </div>

              {/* Skewed borders */}
              <div className="absolute inset-0 transform -skew-x-3 border-2 border-gray-200 dark:border-gray-800 pointer-events-none" aria-hidden="true"></div>

              {/* Arrows */}
              <div className="absolute inset-0 flex items-center justify-between">
                <button
                  className="relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group transform -translate-x-2 md:-translate-x-1/2 bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 transition duration-150 ease-in-out"
                  onClick={() => { setActive(active === 0 ? items.length - 1 : active - 1); stopAutorotate(); }}
                >
                  <span className="sr-only">Previous</span>
                  <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
                  </svg>
                </button>
                <button
                  className="relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group transform translate-x-2 md:translate-x-1/2 bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 transition duration-150 ease-in-out"
                  onClick={() => { setActive(active === items.length - 1 ? 0 : active + 1); stopAutorotate(); }}
                >
                  <span className="sr-only">Next</span>
                  <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                  </svg>
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;