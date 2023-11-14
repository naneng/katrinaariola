// import React, { useEffect, useState, useRef } from "react";
// import { useProgress } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Links } from './components';
// import LoadingBar from 'react-top-loading-bar';

const App = () => {
  // const [showBottomBar, setShowBottomBar] = useState(false);
  // const { progress } = useProgress();
  // const loadingBarRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const windowHeight = window.innerHeight;
  //     const documentHeight = document.documentElement.scrollHeight;
  //     const scrollPosition = window.scrollY;

  //     const isAtBottom = scrollPosition + windowHeight >= documentHeight;

  //     setShowBottomBar(isAtBottom);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   loadingBarRef.current.continuousStart();
  //   if (progress === 100) {
  //     loadingBarRef.current.complete();
  //   }
  // }, [progress]);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <Experience />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Links />
      </div>
    </BrowserRouter>
  )
}

export default App