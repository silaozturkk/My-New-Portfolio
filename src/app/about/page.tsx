'use client';
import Skills from "@/components/skills";
import { FaCss3Alt, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";


const AboutPage = () => {
    const { t } = useLanguage();
    const about = t.about;
    const { sections } = about;

    const skillIconMap: Record<string, React.ElementType> = {
        Java: FaJava,
        JavaScript: IoLogoJavascript,
        HTML: FaHtml5,
        CSS: FaCss3Alt,
        React: FaReact,
        "Next.js": RiNextjsFill,
        "Tailwind CSS": RiTailwindCssFill,
        Python: FaPython,
    };

    return (
        <div className="items-center justify-center pb-6 px-2 lg:px-0">
            <h2 className="text-5xl 2xl:text-6xl text-center mt-10 font-bold"><span className="bg-linear-to-r from-pink-300 via-pink-400 to-pink-600 bg-clip-text text-transparent">{about.title}</span></h2>
            <div className="md:flex items-center justify-center gap-10 lg:px-36 2xl:px-60">
                <Image
                    src="/aboutme1.png"
                    alt="About me avatar"
                    width={240}
                    height={240}
                    className="w-40 md:w-60 pt-10 mx-auto md:mx-0"
                    priority
                />
                <div className="flex flex-col gap-3 text-lg text-center  2xl:pr-40 pt-3">
                    <p>{about.bio["1"]}</p>
                    <p>{about.bio["2"]}</p>
                </div>
            </div>
            <div className="items-center justify-center py-20">
                <h2 className="text-5xl text-center font-semibold pb-10 bg-linear-to-r from-pink-200 via-pink-600 to-pink-800 bg-clip-text text-transparent">{sections.skills.title}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-10 md:gap-6 px-20 lg:px-50 2xl:px-90 place-items-center">
                    {sections.skills.items.map((skill) => {
                        const Icon = skillIconMap[skill.name] ?? FaHtml5;
                        return <Skills key={skill.name} icon={Icon} label={skill.name} />;
                    })}
                </div>
            </div>
            <div className="lg:px-32 lg:flex items-center gap-20">
                <h2 className="flex text-center justify-center lg:hidden text-5xl mt-10 font-bold text-neutral-800"> {sections.education.title}</h2>
                <Image
                    src="/kitap.png"
                    alt="Kitap avatar"
                    width={320}
                    height={320}
                    className="md:size-120 mx-auto lg:mx-0"
                />
                <div>
                    <h2 className="hidden lg:flex text-5xl mt-10 py-4 font-bold text-neutral-800"> {sections.education.title}</h2>
                    <div className="flex flex-col gap-3">
                        {sections.education.items.map((edu) => (
                            <div key={edu.degree} className="flex flex-col">
                                <h1 className="text-2xl bg-linear-to-r text-pink-500 font-semibold md:font-bold ">
                                    {edu.degree} | {edu.university}
                                </h1>
                                <p className="text-base text-pink-500">{edu.period}</p>
                                <p>{edu.description}</p>
                            </div>
                        ))}
                    </div>   
                </div>   
            </div>
            <div className="lg:px-32 lg:flex items-center gap-20">
                <h2 className="flex text-center justify-center lg:hidden text-5xl mt-20 font-bold text-neutral-800">{sections.experience.title}</h2>
                <div>
                    <h2 className="hidden lg:flex text-5xl mt-10 py-4 font-bold text-neutral-800"> {sections.experience.title}</h2>
                    <div className="flex flex-col dark:text-white pt-10 lg:pt-0 gap-4">
                        {sections.experience.items.map((exp) => (
                            <div key={exp.position} className="flex flex-col">
                                <h1 className="text-xl md:text-2xl bg-linear-to-r text-pink-500 font-semibold md:font-bold">
                                    {exp.position} | {exp.company}
                                    {exp.department ? <span className="hidden md:inline"> {exp.department}</span> : null}
                                </h1>
                                <p className="text-base text-pink-500 ">{exp.period}</p>
                                <p>{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Image 
                    src="/bilgisayar.png" 
                    alt="Bilgisayar avatar" 
                    width={320}
                    height={320}
                    className="md:size-120 mx-auto lg:mx-0"
                />
            </div>
        </div>
    );
}
export default AboutPage;