import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import DesignProcess from "./pages/DesignProcess";
import Vision from "./pages/Vision";

function PageRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<About />} />
      <Route path="/design-process" element={<DesignProcess />} />
      <Route path="/vision" element={<Vision />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <PageRoutes />
      <Footer />
    </Router>
  );
}

export default App;
