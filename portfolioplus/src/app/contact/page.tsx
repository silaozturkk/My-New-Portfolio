import FadeIn from "@/components/FadeIn";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
    return (
 
        <div className="pb-6 md:pb-20 text-neutral-800">
            <h2 className="text-5xl 2xl:text-6xl text-center mt-10 font-bold "><span className="bg-linear-to-r from-pink-300 via-pink-400 to-pink-600 bg-clip-text text-transparent">Talk To</span> Me <span className="text-pink-500">!</span></h2>
            <div className="flex flex-col lg:flex-row mt-10 lg:px-30 gap-10 items-center justify-center">  
                <div className="w-full px-4 lg:w-1/2 flex flex-col items-center">
                    <img src="avatar2.png" className="w-60 pb-6" />
                    
                    <p className="text-center text-lg">
                        I’m always open to new opportunities, collaborations, or just a friendly hello. Whether you have a question, want to discuss a project, or share some feedback, feel free to reach out. You can contact me via email, or simply fill out the form below and I’ll get back to you as soon as possible.
                    </p>
                    <div className="flex flex-row gap-5 p-5">
                        <a 
                            href="https://github.com/silaozturkk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-500 hover:text-black transition-colors duration-300 text-4xl"
                        >
                            <FaGithub />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/sıla-öztürk1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500  hover:text-black transition-colors duration-300 text-4xl"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div className="w-full px-4 lg:w-1/2">
                    <form action="https://formsubmit.co/ozturksila100@gmail.com" method="POST"  className="flex flex-col gap-4 ">
                        <h2 className="lg:hidden text-center md:text-start text-3xl font-semibold bg-linear-to-r from-pink-600 via-pink-300 to-pink-400 bg-clip-text text-transparent ">Say Hello <span className="text-yellow-300">💛</span></h2>
                        <div className="flex flex-col">
                            <label>Name</label>
                            <input type="text" name="name" required className="bg-white rounded-md shadow-2xl border-2 border-white hover:border-pink-300 w-full" />
                        </div> 
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input type="email" name="email" required className="bg-white rounded-md shadow-2xl border-2 border-white hover:border-pink-300 w-full" />
                        </div>
                        <div className="flex flex-col">
                            <label>Subject</label>
                            <input type="subject" name="subject" required className="bg-white rounded-md shadow-2xl border-2 border-white hover:border-pink-300 w-full" />
                        </div>
                        <div className="flex flex-col">
                            <label>Message</label>
                            <textarea name="message" rows={5} required className="bg-white rounded-md shadow-2xl border-2 border-white hover:border-pink-300 w-full"></textarea>
                        </div>
                        <button className="bg-pink-400 py-2 text-white rounded-md   hover:bg-pink-500 ">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
 
    );
}
export default ContactPage;
