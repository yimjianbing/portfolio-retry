export default function Contact() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center relative">
            <h1 className="text-6xl font-bold text-center">Contact Me</h1>
            <p className="text-2xl mt-4">I'd love to hear from you!</p>
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