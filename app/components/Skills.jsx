'use client';

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CharBlock = ({ char, children, style }) => (
    <div data-char={char} style={style}>
      {children}
    </div>
  );

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {

    useGSAP(() => {
      gsap.set(".dp_creative div", {yPercent:-103})
      gsap.set(".dp_creative", {autoAlpha:1})
      const tl = gsap.timeline({})
      .to(".dp_creative div", {duration:1, yPercent:0, stagger:0.05, ease:"expo.inOut"})
      
      .to(".dp_creative div:not([data-char='.'])", {duration:1, yPercent:103, stagger:0.1, ease:"expo.inOut"})
    
      ScrollTrigger.create({
        trigger:".skillscontainer", 
        start:"center center",
        end:"center center",
        pin:true,
        markers:true,
        animation:tl,
        scrub:true
        }) 
    });


    return (
        <div className="skillscontainer flex flex-col items-center justify-center h-[500vh] w-screen relative">
            <div className="skillstitle font-display relative top-0 left-0 text-8xl md:text-[10vw]"> 
                Skills
            </div>

    <>


      {/* Main Container */}
      <div
        id="dropdown"
        className="w-[375px] h-[375px] bg-[#220614] border border-[#64133c] overflow-hidden relative"
        style={{ '--heading-size': '60px' }}
      >
        {/* Inner Wrapper */}
        <div className="flex items-center justify-center w-full h-full">
          <div>
            <div className="dp_creative">
              <CharBlock char=".">C</CharBlock>
              <CharBlock char="R">A</CharBlock>
              <CharBlock char="E">F</CharBlock>
              <CharBlock char=".">A</CharBlock>
              <CharBlock char="T">S</CharBlock>
              <CharBlock char=".">I</CharBlock>
              <CharBlock char="V">R</CharBlock>
              <CharBlock char=".">E</CharBlock>
            </div>
            <div className="dp_creative">
              <CharBlock char="C">R</CharBlock>
              <CharBlock char="O">G</CharBlock>
              <CharBlock char=".">D</CharBlock>
              <CharBlock char=".">I</CharBlock>
              <CharBlock char="N">F</CharBlock>
              <CharBlock char="." style={{ left: '4px' }}>
                G
              </CharBlock>
            </div>
          </div>
        </div>

        {/* Extra styling */}
        <style>{`
          .dp_creative {
            font-family: ui-monospace, Menlo, monospace, sans-serif;
            visibility: hidden;
            padding-top: 2px;
            font-size: var(--heading-size);
            line-height: 0.79;
            display: flex;
            overflow: hidden;
            padding-bottom: 0;
            color: #f39;
          }

          .dp_creative div {
            display: inline-block;
            letter-spacing: -0.3vw;
            position: relative;
          }

          .dp_creative div::before {
            position: absolute;
            top: 0;
            left: 0;
            content: attr(data-char);
            transform: translateY(-103%);
          }
        `}</style>
      </div>
    </>

            {/* <div className="flex flex-row items-center justify-center w-full ">
                <div className="w-1/3">
                    <h2 className="text-3xl">Languages</h2>
                    <ul>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="w-1/3">
                    <h2 className="text-3xl">Frameworks</h2>
                    <ul>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Flask</li>
                    </ul>
                </div>
                <div className="w-1/3">
                    <h2 className="text-3xl">Tools</h2>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>VSCode</li>
                        <li>Postman</li>
                        <li>Adobe XD</li>
                    </ul>
                </div>
            </div> */}
        </div>
    );
}