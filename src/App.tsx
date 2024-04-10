import { useEffect } from "react";
import "./App.css";
import Menu from "./header/menu/Menu";
import Cookies from "js-cookie";
import Hero from "./main-body/hero-section/Hero";
import Footer from "./footer/Footer";

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
        <Menu />
      </header>
      <main>
        <div className="hero-section">
          <Hero />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
