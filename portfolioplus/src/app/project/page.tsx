const ProjectPage = () => {
    return (
        <div className="px-2 lg:px-10 2xl:px-28 md:pb-4 lg:pb-8">
            <h2 className="text-4xl text-center mt-10 font-bold text-black"><span className="text-pink-600">My</span> Projects</h2>
            <p className="text-center pt-4 text-lg text-neutral-800">
                A collection of projects that reflect my focus on clean design, efficient development, and meaningful digital experiences.     
            </p>
            <p className="text-center text-lg text-neutral-800">
                Each one represents a step forward in combining creativity with functionality.
            </p>
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 md:px-10 gap-10 items-center justify-center py-10 text-lg text-neutral-800">
                <section className="bg-white text-center justify-center items-center shadow-2xl hover:shadow-4xl transition-shadow duration-300 rounded-2xl">
                    <img
                        src="biletSatisSistemi.png"
                        alt="biletSatisSistemi Görseli"
                        className="w-full h-40 md:h-60 lg:h-72 2xl:h-80 rounded-t-2xl"
                    ></img>
                    <h2 className="font-bold text-xl mt-2">Bilet Satış Sistemi</h2>
                    <p className="px-2">A desktop application developed in Java that allows users to view theater performances, select seats, and purchase tickets. The system includes key features such as seat availability tracking, ticket reservation, and user management. It offers a user-friendly interface designed to provide a smooth and efficient ticket purchasing experience.</p>
                    <button>Detayları Gör</button>
                </section>
                <section className="bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <img
                        src="my-portfolio.png"
                        alt="my-portfolio görseli"
                        className="w-full h-40 md:h-60 lg:h-72 2xl:h-80 rounded-t-2xl"
                    >
                    </img>
                    <h2 className="font-bold text-xl mt-2">My Portfolio</h2>
                    <p className="px-2">A modern and responsive portfolio website built with Next.js and Tailwind CSS. The project showcases personal projects, skills, and contact information through a clean and user-friendly design. It focuses on performance, simplicity, and mobile responsiveness to create a professional digital identity.</p>
                    <button>Detayları Gör</button>
                </section>
                <section className=" bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <img
                        src="AutoFixPartsGörseli.png"
                        alt="AutoFixParts Görseli"
                        className="w-full h-40 md:h-60 lg:h-72 2xl:h-80 rounded-t-2xl"
                    >
                    </img>
                    <h2 className="font-bold text-xl mt-2">Ring Oto Far</h2>
                    <p className="px-2">A modern, performance-focused website built with Next.js and Tailwind CSS. The site showcases the brand’s products and services through a clean and user-friendly design. It offers both Turkish and English language options to reach a wider audience. With fast loading speed, responsive layout, and minimalist interface, it delivers a strong digital experience.</p>
                    <button>Detayları Gör</button>
                </section>
                <section className=" bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <img
                        src="insurance Company görseli.png"
                        alt="insurance Company görseli"
                        className="w-full h-40 md:h-60 lg:h-72 2xl:h-80 rounded-t-2xl"
                    >
                    </img>
                    <h2 className="font-bold text-xl mt-2">Gökmen Sigorta</h2>
                    <p className="px-2">insurance Company açıklaması</p>
                    <button>A modern, user-focused website built with Next.js and Tailwind CSS. It presents the insurance services offered and enables users to request quotes based on their selected insurance type. With its fast performance, responsive layout, and clean design, it provides a reliable digital experience that simplifies insurance processes.</button>
                </section>
                <section className=" bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <img
                        src="Google Docs Clone.png"
                        alt="Google Docs Clone görseli"
                        className="w-full h-40 md:h-60 lg:h-72 2xl:h-80 rounded-t-2xl"
                    >
                    </img>
                    <h2 className="font-bold text-xl mt-2">Google Docs Clone</h2>
                    <p className="px-2">A real-time document editing application built with Next.js, Tailwind CSS, and Convex database. Users can sign in to create, edit, and securely store their documents in the cloud. With its modern design and fast performance, it delivers a collaborative experience similar to Google Docs.</p>
                    <button>Detayları Gör</button>
                </section>
                <section className="bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <img
                        src="derslikTakipSistemi.png"
                        alt="Derslik Takip Sistemi Görseli"
                        className="w-full h-40 md:h-60 lg:h-72 2xl:h-80 rounded-t-2xl" 
                    >
                    </img>
                    <h2 className="font-bold text-xl mt-2">Ders ve Sınav Programı Planlama Sistemi</h2>
                    <p className="px-2">A modern web application built with TypeScript, Node.js, React, and Tailwind CSS. Users can easily plan and manage course and exam schedules. The system automatically detects scheduling conflicts and, with its user-friendly interface, streamlines the planning process efficiently.</p>
                    <button>Detayları Gör</button>
                </section>
            </div>
        </div>
    );
}
export default ProjectPage;