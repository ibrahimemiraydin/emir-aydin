import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import SEO from "./components/SEO";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import './i18n';  // Ensure i18n is initialized before app renders


const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      i18n.changeLanguage(storedLang);
    }
  }, [i18n]);

  return (
    <ThemeProvider>
      <Router>
        <SEO title="Emir Aydın" description="Projelerimin yer aldığı bir website" />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
