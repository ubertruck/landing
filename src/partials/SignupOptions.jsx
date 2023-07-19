import React from 'react';
import { Link } from 'react-router-dom';

function SignupOptions() {
  return (
      <div className="relative min-w-full">
        <div className="-my-3 p-10 py-20">

          {/* 1st Item */}
          <a className="cursor-pointer flex justify-between items-center p-4 rounded border border-gray-200 transition duration-300 ease-in-out bg-gray-100 shadow-md hover:bg-white hover:shadow-lg mb-3" href="https://admin.cargocode.ai/sign-up-shipper">
            <div>
              <h4 className="h4 dark:text-gray-900 mb-3">Shippers</h4>
              <p className="text-gray-900">Get instant quotes and real-time tracking for streamlined operations. Access trusted carriers anytime. Join us now!</p>
            </div>
            <svg className="w-5 h-5 fill-current text-blue-600 shrink-0 ml-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.707 1h-8v2h5.586L1 13.293l1.414 1.414L12.707 4.414V10h2V2a1 1 0 00-1-1z" />
            </svg>
          </a>

          {/* 2nd Item */}
          <a className="cursor-pointer flex justify-between items-center p-4 rounded border border-gray-200 transition duration-300 ease-in-out bg-gray-100 shadow-md hover:bg-white hover:shadow-lg mb-3" href="https://admin.cargocode.ai/sign-up-cargo">
            <div>
              <h4 className="h4 dark:text-gray-900 mb-3">Carriers</h4>
              <p className="text-gray-900">Seamless load bookings, real-time shipment tracking, and trusted shippers at your fingertips. Join now to elevate your carrier operations and grow your business.</p>
            </div>
            <svg className="w-5 h-5 fill-current text-blue-600 shrink-0 ml-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.707 1h-8v2h5.586L1 13.293l1.414 1.414L12.707 4.414V10h2V2a1 1 0 00-1-1z" />
            </svg>
          </a>

          {/* 3rd Item */}
          <a className="cursor-pointer flex justify-between items-center p-4 rounded border border-gray-200 transition duration-300 ease-in-out bg-gray-100 shadow-md hover:bg-white hover:shadow-lg mb-3" href="https://admin.cargocode.ai/sign-up-shipper">
            <div>
              <h4 className="h4 dark:text-gray-900 mb-3">Customers</h4>
              <p className="text-gray-900">Instant quotes, live load monitoring, trusted carriers. Join now for streamlined shipping solutions.</p>
            </div>
            <svg className="w-5 h-5 fill-current text-blue-600 shrink-0 ml-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.707 1h-8v2h5.586L1 13.293l1.414 1.414L12.707 4.414V10h2V2a1 1 0 00-1-1z" />
            </svg>
          </a>

          <Link className="cursor-pointer flex justify-between items-center p-4 rounded border border-gray-200 transition duration-300 ease-in-out bg-gray-100 shadow-md hover:bg-white hover:shadow-lg" to="/request">
            <div>
              <h4 className="h4 dark:text-gray-900 mb-3">Request one time shipment</h4>
              <p className="text-gray-900">Tell us your requirements, and we'll arrange the best transport for your cargo.</p>
            </div>
            <svg className="w-5 h-5 fill-current text-blue-600 shrink-0 ml-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.707 1h-8v2h5.586L1 13.293l1.414 1.414L12.707 4.414V10h2V2a1 1 0 00-1-1z" />
            </svg>
          </Link>
        </div>
      </div>
  );
}

export default SignupOptions;
