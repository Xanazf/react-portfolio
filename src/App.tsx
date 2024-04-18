import { useEffect } from "react";
import "./App.css";
import Menu from "./header/menu/Menu";
import Cookies from "js-cookie";
import Footer from "./footer/Footer";
import Name from "./main-body/name/Name";
import Skills from "./main-body/skills/Skills";

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
    <div id="app">
      <header>
        <Menu />
      </header>
      <main>
        <Name />
        <Skills />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
