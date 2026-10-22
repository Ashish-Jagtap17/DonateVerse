// import React from 'react';
// import DonateVerseLanding from './pages/Landing/DonateVerseLanding';
// import LoginPage from './pages/Auth/LoginPage';
// import { Route,Routes } from 'react-router-dom';
// import SignUpPage from './pages/Auth/SignUpPage';
// import DonateVerseDashboard from './pages/NGO/DonateVerseDashboard';
// import ForgotPassword from './pages/Auth/ForgotPassword';
// import NgoSignUpPage from './pages/Auth/NgoSignUpPage';
// import NgoLoginPage from './pages/Auth/NgoLoginPage';
// //  import NGODashboard from './NGODashboard';
//  import RestaurantDashboard from './pages/Restaurant/RestaurantDashboard';
//  import 'leaflet/dist/leaflet.css';

// const App = () => {
  
//   return (
//      //<RestaurantDashboard/>
    
//      <Routes>
//        <Route path="/" element={<DonateVerseLanding />} />
//        <Route path="/donate" element={<LoginPage />} />
//        <Route path="/signup" element={<SignUpPage />} />
//        <Route path="/login" element={<LoginPage />} />
//        <Route path="/forgotpassword" element={<ForgotPassword />} />
//        <Route path="/ngologin" element={<NgoLoginPage />} />
//        <Route path="/ngosignup" element={<NgoSignUpPage/>} />
//        <Route path="/home" element={<DonateVerseLanding/>} />
//       <Route path="/donateversedashboard" element={<DonateVerseDashboard/>} />
//       <Route path="/restaurantdashboard" element={<RestaurantDashboard/>} />


//        </Routes>






      
//   );
// };


// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DonateVerseLanding from './pages/Landing/DonateVerseLanding';
import LoginPage from './pages/Auth/LoginPage';
import SignUpPage from './pages/Auth/SignUpPage';
import DonateVerseDashboard from './pages/NGO/DonateVerseDashboard';
import ForgotPassword from './pages/Auth/ForgotPassword';
import NgoSignUpPage from './pages/Auth/NgoSignUpPage';
import NgoLoginPage from './pages/Auth/NgoLoginPage';
import RestaurantDashboard from './pages/Restaurant/RestaurantDashboard';
import 'leaflet/dist/leaflet.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DonateVerseLanding />} />
      <Route path="/donate" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/ngologin" element={<NgoLoginPage />} />
      <Route path="/ngosignup" element={<NgoSignUpPage />} />
      <Route path="/home" element={<DonateVerseLanding />} />
      <Route path="/donateversedashboard" element={<DonateVerseDashboard />} />
      <Route path="/restaurantdashboard" element={<RestaurantDashboard />} />
    </Routes>
  );
};

export default App;
