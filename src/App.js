import "./App.css";
import { FooterComponent } from "./components/footerComponent/FooterComponent";
import { NavComponent } from "./components/navComponent/NavComponent";
import { MainSection } from "./components/sections/main/MainSection";
import { AboutSection } from "./components/sections/aboutMe/AboutSection";
import { AcademySection } from "./components/sections/academy/AcademySection";

function App() {
  return (
    <div className="App">
      <NavComponent />

      {/* Sections */}
      <MainSection />
      <AboutSection />
      <AcademySection />




      <FooterComponent />
    </div>
  );
}

export default App;
