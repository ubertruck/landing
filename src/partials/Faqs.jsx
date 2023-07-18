import React from 'react';
import Accordion from '../utils/Accordion';

function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-20">
            <h2 className="h2">Questions & Answers</h2>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl mx-auto pl-12">
            <Accordion title="Can truck drivers and shippers register and create accounts on your platform?">
              Get all the details on how truck drivers and shippers can easily sign up and access our transportation platform. Learn how to streamline your freight operations hassle-free.
            </Accordion>
            <Accordion title="Are there real-time tracking features available for shipments?">
              Discover how our platform offers real-time tracking to monitor your shipments from pickup to delivery. Stay informed and in control throughout the transportation process.
            </Accordion>
            <Accordion title="Do you provide a user-friendly dashboard for carriers and shippers?">
              Find out how our user-friendly dashboard simplifies logistics management. Carriers and shippers can efficiently manage loads, bookings, and more through our intuitive interface.
            </Accordion>
            <Accordion title="What sets your platform apart from other transportation solutions in the market?" active>
              Learn about the unique features and advantages that make our platform stand out. Explore how we revolutionize the transportation industry for both carriers and shippers.
            </Accordion>
            <Accordion title="Can I become an affiliate reseller and earn from your platform?">
              See how you can benefit from our affiliate program and become a reseller of our transportation platform. Earn rewards by helping others discover the power of our services.
            </Accordion>
            <span className="block border-t border-gray-200" aria-hidden="true"></span>
          </ul>

        </div >
      </div >
    </section >
  );
}

export default Faqs;
