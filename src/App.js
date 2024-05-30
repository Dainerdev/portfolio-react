import "./App.css";
import { FooterComponent } from "./components/footerComponent/FooterComponent";
import { NavComponent } from "./components/navComponent/NavComponent";
import { MainSection } from "./components/sections/main/MainSection";
import { AboutSection } from "./components/sections/aboutMe/AboutSection";
import { AcademySection } from "./components/sections/academy/AcademySection";
import { ExperiencesSection } from "./components/sections/experiences/ExperiencesSection";
import { MomentsSection } from "./components/sections/moments/MomentsSection";

function App() {
  return (
    <div className="App">
      <NavComponent />

      {/* Sections */}
      <MainSection />
      <AboutSection />
      <AcademySection />
      <ExperiencesSection />
      <MomentsSection />


      <FooterComponent />
    </div>
  );
}

export default App;
