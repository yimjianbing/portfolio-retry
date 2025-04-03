export default function Skills() {
    return (
        <div className="skillscontainer flex flex-col items-center justify-center h-[500vh] w-screen relative">
            <div className="AboutMeTitle font-display relative top-0 left-0 text-8xl md:text-[10vw]"> 
                Skills
            </div>
            <div className="flex flex-row items-center justify-center w-full ">
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
            </div>
        </div>
    );
}