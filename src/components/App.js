import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AccountSettingPage from "../pages/AccountSettingPage";
import PendingReviewPage from "../pages/PendingReviewPage";


import './../assets/css/App.css';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccountSettingPage />} />
        <Route path="/Pendingreview" element={<PendingReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
