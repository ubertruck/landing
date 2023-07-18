// import React from 'react';
//
// import Header from '../partials/Header';
// import PageIllustration from '../partials/PageIllustration';
// import Footer from '../partials/Footer';
//
// function Contact() {
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//
//
//     const formData = new FormData(e.target);
//
//     const user = {
//         firstName: formData.get('first-name'),
//         image: null,
//     }
//
//     const imageFile = formData.get('image');
//
//     if (imageFile) {
//       console.log(imageFile)
//       const reader = new FileReader();
//       reader.onload = async () => {
//         console.log('onloadend')
//         const imageData = reader.result.split(',')[1];
//         user.image = imageData;
//
//         console.log(imageData)
//         console.log(user)
//       }
//
//       reader.readAsDataURL(imageFile);
//
//     }
//   }
//   return (
//       <div className="flex flex-col min-h-screen overflow-hidden">
//
//         {/*  Site header */}
//         <Header />
//
//         {/*  Page content */}
//         <main className="grow">
//
//           {/*  Page illustration */}
//           <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
//             <PageIllustration />
//           </div>
//
//           <section className="relative">
//             <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
//               <div className="pt-32 pb-12 md:pt-40 md:pb-20">
//
//                 {/* Page header */}
//                 <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
//                   <h1 className="h1 font-red-hat-display mb-4">Get started with Appy in seconds</h1>
//                   <p className="text-xl text-gray-600 dark:text-gray-400">We'll send you a text with a link to download the app.</p>
//                 </div>
//
//                 {/* Contact form */}
//                 <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
//                   <div className="flex flex-wrap -mx-3 mb-5">
//                     <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
//                       <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">First Name <span className="text-red-600">*</span></label>
//                       <input id="first-name" name="first-name" type="text" className="form-input w-full" placeholder="Enter your first name" required />
//                     </div>
//                     <div className="w-full md:w-1/2 px-3">
//                       <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="image">Image<span className="text-red-600">*</span></label>
//                       <input id="image" name="image" type="file" className="form-input w-full" placeholder="Enter your last name" />
//                     </div>
//                   </div>
//                   <div className="flex flex-wrap -mx-3 mt-6">
//                     <div className="w-full px-3">
//                       <button type="submit" className="btn text-white bg-teal-500 hover:bg-teal-400 w-full flex items-center">
//                         <span>Request code</span>
//                         <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//                           <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//
//               </div>
//             </div>
//           </section>
//
//         </main>
//
//         {/*  Site footer */}
//         <Footer />
//
//       </div>
//   );
// }
//
// export default Contact;

import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';
import ShipmentForm from "../partials/ShipmentForm";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Contact() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <p className="text-xl text-gray-600 dark:text-gray-400">Effortlessly submit your one-time shipment details, and let us take care of the rest!</p>
              </div>
              <GoogleReCaptchaProvider
                  reCaptchaKey="6LcIRTInAAAAADqCdzqKyIfBqhNUinJZmvCLhKFb"
                  scriptProps={{
                      async: false,
                      defer: false,
                      appendTo: "head",
                      nonce: undefined,
                  }}
              >
                <ShipmentForm />
              </GoogleReCaptchaProvider>

            </div>
          </div>
        </section>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Contact;