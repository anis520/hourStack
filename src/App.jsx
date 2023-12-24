import "./App.css";
import BrowserDiv from "./components/BrowserDiv/BrowserDiv";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="wrapper">
      {" "}
      <Navbar />
      <Hero />
      <BrowserDiv />
    </div>
  );
}

export default App;
