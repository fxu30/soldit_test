
import './App.css';
import './css/contactUs.css'
import './css/sidebar.css'

import SignUpPage from './pages/SignUpPage';

import SellerReviewPage from './pages/SellerReviewPage';
import ContactUsPage from './pages/ContactUsPage';
import SignInPage from './pages/SignInPage';
import Footer from './components/Footer';



function App() {
  return (

    <div className="contact-us-page flex-col-hstart-vstart clip-contents">

      {/* <SignUpPage /> */}
      {/* <SellerReviewPage /> */}

      <SignInPage />
      {/* <ContactUsPage /> */}
      
      <Footer />
    </div>

  );
}

export default App;
