import React from 'react';
import SignupOptions from "./SignupOptions";
import Modal from "../utils/Modal";

function CtaContact() {
  const [videoModalOpen, setVideoModalOpen] = React.useState(false);
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="dark relative bg-gray-800 py-10 px-8 md:py-16 md:px-12">

          {/* Background illustration */}
          <div className="absolute inset-0 left-auto  pointer-events-none" aria-hidden="true">
            <svg className="h-full" width="400" height="232" viewBox="0 0 400 232" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-a">
                  <stop stopColor="#667EEA" offset="0%" />
                  <stop stopColor="#667EEA" stopOpacity="0" offset="100%" />
                </radialGradient>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-b">
                  <stop stopColor="#3ABAB4" offset="0%" />
                  <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                </radialGradient>
              </defs>
              <g transform="translate(-85 -369)" fill="none" fillRule="evenodd">
                <circle fillOpacity=".16" fill="url(#box-gr-a)" cx="413" cy="688" r="240" />
                <circle fillOpacity=".24" fill="url(#box-gr-b)" cx="400" cy="400" r="400" />
              </g>
            </svg>
          </div>

          <div className="relative max-w-3xl mx-auto text-center">

            {/* CTA header */}
            <h3 className="h3 font-red-hat-display text-gray-100 mb-2">Let's Revolutionize Transportation Together</h3>
            <p className="text-gray-400 text-xl">We believe in the power of collaboration and innovation. Whether you're a shipper or a carrier, we welcome you to join our platform and explore exciting opportunities. Don't worry about finding the perfect fit; we'll guide you towards success.</p>

            {/* CTA button */}
            <div className="flex justify-center mt-8">
              <button type="button" onClick={(e) => {e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} className="btn text-white bg-teal-500 hover:bg-teal-400">Start Your Journey</button>
            </div>

          </div>
        </div>

      </div>

      <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
        <SignupOptions />
      </Modal>
    </section>
  );
}

export default CtaContact;
