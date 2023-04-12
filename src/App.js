import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/header.css';
import './css/main-section.css';
import './css/footer.css';
import './css/search-form.css';
import './css/train-card.css';
import './css/seats.css';
import './css/passengers-page.css';
import './css/pay-form.css';
import './css/verification.css';
import './css/success.css';
import './css/stage-bar.css';
import "./css/tickets-page.css";
import "./css/tickettrain.css";
import Header from './components/homepage/Header';
import Footer from './components/homepage/Footer';
import HomePage from './components/HomePage';
import Passengers from './components/Passengers';
import SecondPage from './components/SecondPage';
import SuccessPage from './components/SuccessPage';

function App() {
   return (
      <div className="App">
         <Router>
            <Header />
            <Routes>
               <Route path="/fe_2_diplom" element={<HomePage />} />
               <Route path="/" element={<HomePage />} />
               <Route path="/tickets/*" element={<SecondPage />} />
               <Route path="/passengers/*" element={<Passengers />} />
               <Route path="/success/" element={<SuccessPage />} />
            </Routes>
            <Footer />
         </Router>
      </div>
   );
}

export default App;
