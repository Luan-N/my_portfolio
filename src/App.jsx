import "./App.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden bg-white text-[#111111] dark:bg-[#111111] dark:text-white">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>

        <Footer />
        {/* Background Circles */}
        <div className="max-sm:hidden absolute bg-blue-600/50 rounded-full w-125 h-125 right-[-200px] top-[-200px] shadow-2xl shadow-blue-600/50 animate-bg-drops"></div>
        <div className="max-sm:hidden absolute bg-blue-600/50 rounded-full w-30 h-30 left-15 top-100 shadow-2xl shadow-blue-600/50 animate-bg-drops"></div>
      </div>
    </>
  );
}

export default App;
