import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from "./components/sections/Home"
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

import { useState, useSyncExternalStore, useEffect } from 'react';

function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  
  return <>
    {/* {!isLoaded && <LoadingScreen onComplete = {() => {setIsLoaded(true)}}/>} */}
    <div
        className={`min-h-screen w-full p-0 m-0 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-white text-black dark:bg-[#0d0d0d] dark:text-white`}
      >
        <Navbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <MobileMenu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  </>;
}

export default App
