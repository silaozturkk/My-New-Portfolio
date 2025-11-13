import Skills from "@/components/skills";
import { FaCss3Alt, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const AboutPage = () => {
    return (
        <div className="items-center justify-center ">
            <h2 className="text-5xl 2xl:text-6xl text-center mt-10 font-bold "><span className="bg-linear-to-r from-pink-300 via-pink-400 to-pink-600 bg-clip-text text-transparent">About</span> Me <span className="text-pink-500"></span></h2>
            <div className="flex items-center justify-center gap-10 px-36 2xl:px-60">
                <img src="aboutme1.png" className="w-60" alt="Avatar" />
                <p className="text-lg text-center 2xl:pr-40 pt-3">A problem solver who loves turning ideas into digital experiences. I enjoy learning new technologies and creating solutions that make a real impact. Always eager to grow, I approach every challenge as an opportunity to innovate..</p>      
            </div>
            <div className="items-center justify-center py-20">
                <h2 className="text-5xl text-center font-semibold pb-10 bg-linear-to-r from-pink-200 via-pink-600 to-pink-800 bg-clip-text text-transparent">Skills <span className="text-black">and</span> Technologies</h2>
                <div className="flex px-40 gap-10 items-center justify-center">
                    <Skills icon={FaJava} />
                    <Skills icon={IoLogoJavascript} />
                    <Skills icon={FaHtml5} />
                    <Skills icon={RiTailwindCssFill} />
                    <Skills icon={FaCss3Alt} />
                    <Skills icon={FaReact} />
                    <Skills icon={RiNextjsFill} />
                    <Skills icon={FaPython} />
                </div>
            </div>
            <div className="px-32 flex items-center gap-20">
                <img src="kitap.png" className="size-120"/>
                <div>
                <h2 className="text-5xl mt-10 py-4 font-bold text-neutral-800"> Education</h2>
                <div className="flex flex-col">
                    <h1 className="text-2xl bg-linear-to-r text-pink-500 font-semibold md:font-bold ">Computer Engineering | İstanbul Rumeli University </h1>
                    <p className="text-base text-pink-500">2023-2027</p>
                    <p>I am a 3nd-year Computer Engineering student at İstanbul Rumeli University with a GPA of 3.62/4.00.</p>
                    <p>During my studies, I have completed courses such as Object-Oriented Programming, Data Structures, Computer Architecture, Visual Programming, and Numerical Analysis.</p>
                    <p>I develop personal and academic projects using Java, JavaScript, React and Next.js.</p>
                    <p>I am particularly interested in software development, algorithms, and data analysis, and I am continuously working to improve myself in these areas.</p>
                </div>   
                </div>   
            </div>
            <div className="px-32 flex items-center gap-20">
                <div>
                <h2 className="text-5xl mt-10 py-4 font-bold text-neutral-800"> Experience</h2>
                <div className="flex flex-col dark:text-white ">
                    <h1 className="text-xl md:text-2xl bg-linear-to-r text-pink-500 font-semibold md:font-bold">Software Developer Intern | Beylikdüzü Municipality<span className="hidden md:flex"> Directorate of Information Technologies</span></h1>
                    <p className="text-base text-pink-500 ">June 2025 – July 2025</p>
                    <p>Learned web development technologies including JavaScript, React, and Next.js during the internship.</p>
                    <p>Developed a personal portfolio website using React, Next.js, and Tailwind CSS to showcase my projects and skills.</p>
                    <p>Built a simple blog application where users can view and add posts, applying component-based architecture and basic state management.</p>
                    <p>Gained hands-on experience in modern web development processes and project implementation.</p>
                </div>
                </div>
                <img src="bilgisayar.png" className="size-120"/>
            </div>
            
        </div>
    );
}
export default AboutPage;