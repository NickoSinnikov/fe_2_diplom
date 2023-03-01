import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./css/header.css";
import "./css/main-section.css";
import "./css/footer.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
