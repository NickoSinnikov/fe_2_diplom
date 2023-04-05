import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/header.css';
import './css/main-section.css';
import './css/footer.css';
import './css/search-form.css';
import './css/train-card.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

import SecondPage from './components/SecondPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tickets/" element={<SecondPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
