import logo from "./logo.svg";
import "./App.css";
import { FooterComponent } from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>KSAJDAHS</p>       

      </header>
      <FooterComponent />
    </div>
  );
}

export default App;
