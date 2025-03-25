// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Gallery from "./pages/Gallery";
import WaterProject from "./pages/Projects/WaterProject";
import CommunityInvolvement from "./pages/Projects/CommunityInvolvement";
import Staff from "./pages/Staff";
import Mission from "./pages/Mission";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/water-project" element={<WaterProject />} />
            <Route
              path="/community-involvement"
              element={<CommunityInvolvement />}
            />
            <Route path="/mission" element={<Mission />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
