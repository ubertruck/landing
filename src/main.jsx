import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*<GoogleReCaptchaProvider*/}
      {/*    reCaptchaKey="6LcIRTInAAAAADqCdzqKyIfBqhNUinJZmvCLhKFb"*/}
      {/*    scriptProps={{*/}
      {/*        async: false,*/}
      {/*        defer: false,*/}
      {/*        appendTo: "head",*/}
      {/*        nonce: undefined,*/}
      {/*    }}*/}
      {/*>*/}
    <Router>
      <App />
    </Router>
      {/*</GoogleReCaptchaProvider>*/}
  </React.StrictMode>
);
