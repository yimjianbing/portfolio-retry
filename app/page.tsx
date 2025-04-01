
import Scene from "./components/Scene";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HelloThere from "./components/HelloThere";
import AboutMe from "./components/AboutMe";
import Keyhole from "./components/Keyhole";
import Projects from "./components/Projects";

export default function Home() {
  return (
      <div className="h-screen w-screen">
        <Header />
        <HelloThere/>
        <Scene />
        <AboutMe/>
        <Projects/>
        <Footer/>
      </div>
    
  );
}
