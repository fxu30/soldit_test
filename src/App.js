
import './App.css';
import './css/contactUs.css'
import './css/sidebar.css'

import SignUpPage from './pages/SignUpPage';

import SellerReviewPage from './pages/SellerReviewPage';
import ContactUsPage from './pages/ContactUsPage';
import SignInPage from './pages/SignInPage';



function App() {
  return (

    <div className="contact-us-page flex-col-hstart-vstart clip-contents">

      {/* <SignUpPage /> */}
      {/* <SellerReviewPage /> */}

      {/* <SignInPage /> */}
      <ContactUsPage />
      
    </div>

  );
}

export default App;
