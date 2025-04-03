
import Scene from "./components/Scene";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HelloThere from "./components/HelloThere";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hackathons from "./components/Hackathons";

export default function Home() {
  return (
      <div className="h-screen w-screen">
        <Header />
        <HelloThere/>
        <Scene />
        <AboutMe/>
        <Projects/>
        <Hackathons/>
        <Skills/>
        <Footer/>
     
      </div>
  );
}
