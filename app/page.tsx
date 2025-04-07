'use client';

import Scene from "./components/Scene";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HelloThere from "./components/HelloThere";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ScrollDownArrow from "./components/ScrollDownArrow";
import Contact from "./components/Contact";
import MobileWarning from "./components/MobileWarning";
import { DeviceProvider } from "./DeviceProvider";

export default function Home() {
  return (
    <DeviceProvider>
      <div className="h-screen w-screen">
        <Header />
        <MobileWarning />
        <HelloThere />
        <ScrollDownArrow />
        <Scene />
        <AboutMe />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </DeviceProvider>
  );
}