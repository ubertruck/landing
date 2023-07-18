import React from 'react';

function Stats() {
  return (
    <section className="relative bg-transparent">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-4 text-center" data-aos-id-stats>
            {/* 1st item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]">
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">49K+</div>
              <div className="text-gray-600 dark:text-gray-400">Loads Delivered</div>
            </div>
            {/* 2nd item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="100">
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">96%</div>
              <div className="text-gray-600 dark:text-gray-400">On-time Delivery Rate</div>
            </div>
            {/* 3rd item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="200">
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">30%</div>
              <div className="text-gray-600 dark:text-gray-400">Reduced Turnaround Time</div>
            </div>
            {/* 4th item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="300">
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">300%</div>
              <div className="text-gray-600 dark:text-gray-400">Increase in User Base</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
