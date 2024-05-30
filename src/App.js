import "./App.css";
import { FooterComponent } from "./components/footerComponent/FooterComponent";
import { NavComponent } from "./components/navComponent/NavComponent";
import { MainSection } from "./components/sections/main/MainSection";

function App() {
  return (
    <div className="App">
      <NavComponent />

      {/* Sections */}
      <MainSection />






      <FooterComponent />
    </div>
  );
}

export default App;
