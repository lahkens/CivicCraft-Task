import React, { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import HeroSection from "./pages/HeroSection";
import ClientsSection from "./components/ClientsSection";
import Features1Section from "./components/Features1Section";
import Features2Section from "./components/Features2Section";
import ListItem from "./components/ListItem";
import Navbar from "./components/Navbar";
import TestimonialSection from "./components/TestimonialSection";
import CTASection from "./components/CTASection";
import AppSection from "./components/AppSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import BannerSection from "./components/BannerSection";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Welcome to our website";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div>
      <HeroSection />
      <ClientsSection />
       <BannerSection />
      <Features1Section />
       <TestimonialSection />
      <Features2Section />
      <CTASection/>
      <AppSection />
      <ContactSection />
      <Footer /> 
    </div>
  );
}

export default App;
