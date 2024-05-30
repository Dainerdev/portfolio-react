import "./App.css";
import { FooterComponent } from "./components/footerComponent/FooterComponent";
import { NavComponent } from "./components/navComponent/NavComponent";
import { MainSection } from "./components/sections/main/MainSection";
import { AboutSection } from "./components/sections/aboutMe/AboutSection";

function App() {
  return (
    <div className="App">
      <NavComponent />

      {/* Sections */}
      <MainSection />
      <AboutSection />





      <FooterComponent />
    </div>
  );
}

export default App;
