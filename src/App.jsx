import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import FeatureSection from "./component/FeatureSection";
import Workflow from "./component/Workflow";
import Pricing from "./component/Pricing";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection />
          <FeatureSection/>
          <Workflow/>
          <Pricing/>
          <Testimonials/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
