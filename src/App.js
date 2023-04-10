import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./css/header.css";
import "./css/main-section.css";
import "./css/footer.css";
import "./css/search-form.css";
import "./css/train-card.css";
import "./css/seats.css";
import "./css/passengers-page.css";
import Header from "./components/homepage/Header";
import Footer from "./components/homepage/Footer";
import HomePage from "./components/HomePage";
import PassengersPage from "./components/PassengersPage";

import SecondPage from "./components/SecondPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tickets/*" element={<SecondPage />} />
          <Route path="/passengers" element={<PassengersPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
