import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import WhatsAppFloat from "./components/common/WhatsAppFloat";
import Contact from "./pages/Contact";
import About from "./pages/About.jsx";
import Programs from "./pages/Programs";
//import Services from "./pages/Services";
import Trainers from "./pages/Trainers";
import Workshops from "./pages/Workshops";
import WorkshopDetails from "./components/sections/WorkshopDetails";
import WorkshopRegistration from "./pages/WorkshopRegistration";
import AcademyHomepage from "./pages/AcademyHomepage";
import Courses from "./pages/Courses";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AcademyHomepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Programs />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/workshops/:slug" element={<WorkshopDetails />} />
        <Route path="/workshops/:slug/register" element={<WorkshopRegistration />}/>
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <WhatsAppFloat />
      <Footer />
    </div>
  );
}

export default App;
