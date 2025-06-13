import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home/index';
import FineasePaymentAppHomepage from './pages/finease-payment-app-homepage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/finease-payment-app-homepage" element={<FineasePaymentAppHomepage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;