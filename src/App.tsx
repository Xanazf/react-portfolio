import { useEffect } from "react";
import "./App.css";
import Menu from "./header/menu/Menu";
import Cookies from "js-cookie";
import Hero from "./header/hero-section/Hero";

function App() {
  useEffect(() => {
    if (!Cookies.get("theme")) {
      Cookies.set("theme", "light");
    }

    if (!Cookies.get("language")) {
      Cookies.set("language", "en");
    }
  }, []);

  return (
    <div className="app-container">
      <header>
        <div>
          <Menu />
        </div>
        <div className="hero-section">
          <Hero />
        </div>
      </header>
      <main>{/* Add your main content here */}</main>
    </div>
  );
}

export default App;
