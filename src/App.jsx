
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import WhatsAppFloat from "./components/common/WhatsAppFloat";

import { useSiteSettings } from "./cms/useSiteSettings";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About.jsx"));
const Programs = lazy(() => import("./pages/Programs"));
const Trainer = lazy(() => import("./pages/Trainers.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Workshops = lazy(() => import("./pages/Workshops"));
const WorkshopDetails = lazy(
  () => import("./components/sections/WorkshopDetails")
);
const WorkshopRegistration = lazy(
  () => import("./pages/WorkshopRegistration")
);
const Courses = lazy(() => import("./pages/Courses"));

function App() {
  const { siteSettings, error } = useSiteSettings();

  if (error) {
    console.error("Could not load global site settings:", error);
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      <Navbar data={siteSettings} />

      <ScrollToTop />

      <Suspense
        fallback={
          <main
            className="grid min-h-[60vh] place-items-center"
            aria-live="polite"
          >
            <p className="text-sm text-[var(--color-text-secondary)]">
              Loading page...
            </p>
          </main>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/trainers" element={<Trainer />} />
          <Route
            path="/contact"
            element={<Contact siteSettings={siteSettings} />}
          />
          <Route path="/workshops" element={<Workshops />} />
          <Route
            path="/workshops/:slug"
            element={<WorkshopDetails />}
          />
          <Route
            path="/workshops/:slug/register"
            element={<WorkshopRegistration />}
          />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </Suspense>

      <WhatsAppFloat />
      <Footer data={siteSettings} />
    </div>
  );
}

export default App;
