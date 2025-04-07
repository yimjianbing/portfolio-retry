
export default function MobileSkills() {

    return (
        <div id="skills" className="skillscontainer flex flex-col items-center justify-center h-screen w-screen relative ">
            <div className="skillstitle text-[#d30154] font-display relative top-0 left-0 text-8xl md:text-[10vw]"> 
                Skills
            </div>

            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
                <div >
                  <h2 data-text-split="true" data-word-slide-up="true" className="text-3xl text-[#54b9ca] font-bold mb-4">Languages</h2>
                  <ul className="space-y-2 text-8xl md:text-[8vw] font-display">
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>

                <div >
                  <h2 data-text-split="true" data-word-slide-up="true" className="text-3xl text-[#54b9ca] font-bold mb-4">Libraries/Frameworks</h2>
                  <ul className="space-y-2 text-8xl md:text-[8vw] font-display">
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

                <div >
                  <h2 data-text-split="true" data-word-slide-up="true" className="text-3xl text-[#54b9ca] font-bold mb-4">Tools</h2>
                  <ul className="space-y-2 text-8xl md:text-[8vw] font-display">
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