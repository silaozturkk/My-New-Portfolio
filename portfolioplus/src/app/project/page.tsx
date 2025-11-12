"use client";
import FadeIn from "@/components/FadeIn";

const ProjectPage = () => {
    return (
        <FadeIn>
        <div className="px-2 lg:px-10 2xl:px-28 md:pb-4 lg:pb-8">
            <h2 className="text-4xl text-center mt-10 font-bold text-black"><span className="text-pink-600">My</span> Projects</h2>
            <p className="text-center pt-4 text-lg text-neutral-800">
                A collection of projects that reflect my focus on clean design, efficient development, and meaningful digital experiences.     
            </p>
            <p className="hidden md:grid text-center text-lg text-neutral-800">
                Each one represents a step forward in combining creativity with functionality.
            </p>
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 md:px-10 gap-6 md:gap-10 items-center justify-center py-6 md:py-10 text-md text-neutral-800">
                <section className="bg-white text-center justify-center items-center shadow-2xl hover:shadow-4xl rounded-2xl transform hover:scale-104 transition-transform duration-500">
                    <img
                        src="biletSatisSistemi.png"
                        alt="biletSatisSistemi Görseli"
                        className="w-full h-40 md:h-60  2xl:h-80 rounded-t-2xl"
                    ></img>
                    <h2 className="font-bold text-xl mt-2">Bilet Satış Sistemi</h2>
                    <p className="px-2">A desktop Java application that allows users to view theater performances, select seats, and purchase tickets. The system includes features such as seat tracking, ticket reservation, and user management. It offers a user-friendly interface providing a smooth, efficient ticket purchasing experience.</p>
                    <button 
                        onClick={() => window.open("https://github.com/silaozturkk/Tiyatro-Bilet-Sat-Sistemi","_blank")}
                        className="px-10 py-2 m-2 rounded-2xl font-semibold text-neutral-700 bg-pink-200 border-2 border-pink-200 hover:bg-pink-400 hover:text-white transform hover:scale-105 transition-transform duration-400"
                    >
                        View Project
                    </button>
                </section>
                <section className="bg-white text-center justify-center items-center shadow-2xl hover:shadow-4xl rounded-2xl transform hover:scale-104 transition-transform duration-500">
                    <img
                        src="my-portfolio.png"
                        alt="my-portfolio görseli"
                        className="w-full h-40 md:h-60 2xl:h-80 rounded-t-2xl"
                    >
                    </img>
                    <h2 className="font-bold text-xl mt-2">My Portfolio</h2>
                    <p className="px-2">A modern, responsive portfolio website built with Next.js and Tailwind CSS. The project showcases personal projects, skills, and contact information through a clean, user-friendly design. It focuses on performance, simplicity, and mobile responsiveness to create a professional digital identity.</p>
                    <button 
                        onClick={() => window.open("https://www.silaozturk.me","_blank")}
                        className="px-10 py-2 m-2 rounded-2xl font-semibold text-neutral-700 bg-pink-200 border-2 border-pink-200 hover:bg-pink-400 hover:text-white transform hover:scale-105 transition-transform duration-400"
                    >
                        View Project
                    </button>
                </section>
                <section className="hidden bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <img
                        src="AutoFixPartsGörseli.png"
                        alt="AutoFixParts Görseli"
                        className="w-full h-40 md:h-60 lg:h-72 2xl:h-80 rounded-t-2xl"
                    >
                    </img>
                    <h2 className="font-bold text-xl mt-2">Ring Oto Far</h2>
                    <p className="px-2">A modern, performance-focused website built with Next.js and Tailwind CSS. It showcases the brand’s products and services through a clean, user-friendly design. With Turkish and English options, fast loading, and a minimalist interface, it delivers a strong digital experience.</p>
                    <button className="px-10 py-2 m-2 rounded-2xl font-semibold text-neutral-700 bg-pink-200 border-2 border-pink-200 hover:bg-pink-400 hover:text-white transform hover:scale-105 transition-transform duration-400">View Project</button>
                </section>
                <section className="hidden bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <img
                        src="insurance Company görseli.png"
                        alt="insurance Company görseli"
                        className="w-full h-40 md:h-60 lg:h-72 2xl:h-80 rounded-t-2xl"
                    >
                    </img>
                    <h2 className="font-bold text-xl mt-2">Gökmen Sigorta</h2>
                    <p className="px-2">A modern, user-focused website built with Next.js and Tailwind CSS. It presents insurance services and enables users to request quotes based on their selected insurance type. With its fast performance, responsive layout, and clean design, it provides a reliable digital experience that simplifies insurance.</p>
                    <button className="px-10 py-2 m-2 rounded-2xl font-semibold text-neutral-700 bg-pink-200 border-2 border-pink-200 hover:bg-pink-400 hover:text-white transform hover:scale-105 transition-transform duration-400">View Project</button>
                </section>
                <section className="bg-white text-center justify-center items-center shadow-2xl hover:shadow-4xl rounded-2xl transform hover:scale-104 transition-transform duration-500">
                    <img
                        src="Google Docs Clone.png"
                        alt="Google Docs Clone görseli"
                        className="w-full h-40 md:h-60 2xl:h-80 rounded-t-2xl"
                    >
                    </img>
                    <h2 className="font-bold text-xl mt-2">Google Docs Clone</h2>
                    <p className="px-2">A real-time document editing application built with Next.js, Tailwind CSS, and Convex database. Users can sign in to create, edit, and securely store their documents in the cloud. With its modern design and fast performance, it delivers a collaborative experience similar to Google Docs.</p>
                    <button
                        onClick={() => window.open("https://github.com/silaozturkk/google-docs-clone","_blank")}
                        className="px-10 py-2 m-2 rounded-2xl font-semibold text-neutral-700 bg-pink-200 border-2 border-pink-200 hover:bg-pink-400 hover:text-white transform hover:scale-105 transition-transform duration-400"
                    >
                        View Project
                    </button>
                </section>
                <section className="bg-white text-center justify-center items-center shadow-2xl hover:shadow-4xl rounded-2xl transform hover:scale-104 transition-transform duration-500">
                    <img
                        src="derslikTakipSistemi.png"
                        alt="Derslik Takip Sistemi Görseli"
                        className="w-full h-40 md:h-60 2xl:h-80 rounded-t-2xl" 
                    >
                    </img>
                    <h2 className="font-bold text-xl mt-2">Ders ve Sınav Programı Planlama Sistemi</h2>
                    <p className="px-2">A modern web application built with Node.js, React, and Tailwind CSS. Users can easily plan and manage course and exam schedules. The system detects conflicts and, with its user-friendly interface, efficiently streamlines the scheduling process.</p>
                    <button
                        onClick = {() => window.open("https://www.linkedin.com/feed/update/urn:li:activity:7387448017836085248/","_blank")} 
                        className="px-10 py-2 m-2 rounded-2xl font-semibold text-neutral-700 bg-pink-200 border-2 border-pink-200 hover:bg-pink-400 hover:text-white transform hover:scale-105 transition-transform duration-400"
                    >
                        View Project
                    </button>
                </section>
            </div>
        </div>
        </FadeIn>
    );
}
export default ProjectPage;