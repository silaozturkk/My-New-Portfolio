'use client';
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import ProjectModal from "@/components/ProjectModal2";
import { useState } from "react";

const ProjectPage = () => {
    const { t } = useLanguage();
    const project = t.project;
    const featuredProjects = project.projects.filter((item) => item.featured !== false);
    
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (projectItem: any) => {
        setSelectedProject(projectItem);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (

        <div className="px-2 lg:px-10 2xl:px-28 md:pb-4 lg:pb-8">
            <h2 className="text-5xl 2xl:text-6xl text-center mt-10 font-bold text-neutral-800 ">{project.title}</h2>
            <p className="text-center pt-4 text-lg text-neutral-800">
                {project.description}     
            </p>
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 md:2 lg:px-10 gap-6 md:gap-10 items-center justify-center py-6 md:py-10 text-md text-neutral-800">
                {featuredProjects.map((item) => (
                    <section key={item.id} className="bg-white text-center justify-center items-center shadow-2xs hover:shadow-2xl rounded-2xl transform hover:scale-104 transition-transform duration-500">
                        <Image
                            src={item.image}
                            alt={`${item.title} görseli`}
                            width={640}
                            height={360}
                            className="w-full h-40 md:h-60  2xl:h-70 rounded-t-2xl object-cover"
                        />
                        <div className="p-4">
                            <h2 className="font-bold text-xl mt-2 mb-2">{item.title}</h2>
                            <p className="mb-4 text-sm line-clamp-3">{item.description}</p>
                            <button 
                                onClick={() => handleProjectClick(item)}
                                className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300 font-medium"
                            >
                                {project.buttonText}
                            </button>
                        </div>
                    </section>
                ))}
            </div>
            
            {/* Project Modal */}
            <ProjectModal 
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>

    );
}
export default ProjectPage;