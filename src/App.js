import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FooterComponent } from "./components/footerComponent/FooterComponent";
import { NavComponent } from "./components/navComponent/NavComponent";
import { MainSection } from "./components/sections/main/MainSection";
import { AboutSection } from "./components/sections/aboutMe/AboutSection";
import { AcademySection } from "./components/sections/academy/AcademySection";
import ExperiencesSection from "./components/sections/experiences/ExperiencesSection";
import { MomentsSection } from "./components/sections/moments/MomentsSection";
import { HobbiesSection } from "./components/sections/hobbies/HobbiesSection";
import { useEffect } from "react";


function App() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/script.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <NavComponent />

      {/* Sections */}
      <MainSection />
      <AboutSection />
      <AcademySection />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExperiencesSection></ExperiencesSection>}></Route>        
      </Routes>
      </BrowserRouter>
      <MomentsSection />
      <HobbiesSection />

      <FooterComponent />
      <script src="script.js"></script>
    </div>
  );
}

export default App;
