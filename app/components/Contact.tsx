export default function Contact() {

    

    return (
        <div className="h-screen w-screen text-[#000000] font-display flex flex-col justify-center items-center relative">
            <h1 className="text-6xl text-center">Want to know more about me?</h1>
            <p className="text-2xl mt-4">Download my resume here</p>
            <a 
                href="/Jian_Bing_Resume_Apr_2025.pdf" 
                download="Jian_Bing_Resume_Apr_2025.pdf"
                className="mt-4 px-6 py-3 bg-[#d30154] text-white rounded-md hover:bg-opacity-80 transition-all duration-300 flex items-center font-semibold"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
            </a>
            <form className="mt-8">
                <input type="text" placeholder="Your Name" className="border border-gray-300 p-2 rounded-md mb-4"/>
                <input type="email" placeholder="Your Email" className="border border-gray-300 p-2 rounded-md mb-4"/>
                <textarea placeholder="Your Message" className="border border-gray-300 p-2 rounded-md mb-4"></textarea>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Send</button>
            </form>
        </div>
    )
}
//         )}