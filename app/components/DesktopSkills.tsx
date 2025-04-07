import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function DesktopSkills() {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    // gsap.set("[data-text-split]", { opacity: 1})
    // document.querySelectorAll("[data-text-split]").forEach((el) => {
    //   new SplitType(el, {
    //     types: "words, chars",
    //     tagName: "span",
    //   });
    // });

    // document.querySelectorAll("[data-word-slide-up]").forEach((el) => {
    //   const tl = gsap.timeline({ paused: true });
    //   tl.from(el.querySelectorAll(".word"), {
    //     opacity: 0,
    //     yPercent: 100,
    //     duration: 0.5,
    //     ease: "back.out(2)",
    //     stagger: {amount: 1},
    //     scrub: true,
    //   });
    //   ScrollTrigger.create(el, tl)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skillscontainer",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true, 
        pin: true,
      },
    });
    tl.to(".leftskillscol", { yPercent: -50, ease: "none", opacity: 1 });
    tl.to(".midskillscol", { yPercent: -130, ease: "none", opacity: 1 }, "<");
    tl.to(".rightskillscol", { yPercent: -60, ease: "none", opacity: 1 }, "<");
    tl.to(".skillstitle", {  ease: "none", opacity: 0 }, "<");
    


  });
    return (
        <div id="skills" className="skillscontainer flex flex-col text-center items-center justify-center h-screen w-screen relative ">
          <div className="skillstitle text-center text-[#d30154] font-display relative top-0 left-0 text-8xl md:text-[10vw]">
            Skills
          </div>

            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
                <div className="leftskillscol">
                  <h2 data-text-split="true" data-word-slide-up="true" className="text-center text-3xl text-[#54b9ca] font-bold mb-4">Languages</h2>
                  <ul className="space-y-2 text-8xl md:text-[6vw] font-display text-center">
                  <li className="text-center">Python</li>
                  <li className="text-center">JavaScript</li>
                  <li className="text-center">Java</li>
                  <li className="text-center">HTML</li>
                  <li className="text-center">CSS</li>
                  <li className="text-center">PostgreSQL</li>
                </ul>
                </div>

                <div className="midskillscol">
                  <h2 data-text-split="true" data-word-slide-up="true" className="text-center text-3xl text-[#54b9ca] font-bold mb-4">Libraries/Frameworks</h2>
                  <ul className="space-y-2 text-8xl md:text-[6vw] font-display text-center">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>FastAPI</li>
                    <li>HuggingFace</li>
                    <li>Tailwind CSS</li>
                    <li>GSAP</li>
                    <li>Three.js</li>
                    <li>React 3 Fiber</li>
                    <li>Firebase</li>
                    <li>MongoDB</li>
                    <li>OpenAI API</li>
                  </ul>
                </div>

                <div className="rightskillscol">
                  <h2 cdata-text-split="true" data-word-slide-up="true" className="text-center text-3xl text-[#54b9ca] font-bold mb-4">Tools</h2>
                  <ul className="space-y-2 text-8xl md:text-[6vw] font-display text-center">
                    <li>Figma</li>
                    <li>Canva</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>VSCode</li>
                    <li>IntelliJ</li>
                    <li>Postman</li>
                  </ul>
                </div>

              </div>
            </div>

        </div>
    );
}