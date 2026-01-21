'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
  const { t } = useLanguage();
  const project = t.project;
  
  // Get the id from params (we need to unwrap the Promise)
  const [id, setId] = React.useState<string | null>(null);
  
  React.useEffect(() => {
    params.then((resolvedParams) => {
      setId(resolvedParams.id);
    });
  }, [params]);

  const currentProject = id ? project.projects.find((p) => p.id.toString() === id) : null;

  if (!id) {
    return (
      <div className="px-2 lg:px-10 2xl:px-28 py-10">
        <div className="text-center">
          <p>{project.projectNotFound}</p>
        </div>
      </div>
    );
  }

  if (!currentProject) {
    return (
      <div className="px-2 lg:px-10 2xl:px-28 py-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">{project.projectNotFound}</h1>
          <Link 
            href="/project" 
            className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors"
          >
            {project.backToProjects}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-2 lg:px-10 2xl:px-28 py-10 text-neutral-800">
      {/* Back Button */}
      <div className="mb-6">
        <Link 
          href="/project"
          className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors"
        >
          ← {project.backToProjects}
        </Link>
      </div>

      {/* Project Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentProject.title}</h1>
      </div>

      {/* Project Image */}
      <div className="max-w-4xl mx-auto mb-10">
        <Image
          src={currentProject.image}
          alt={`${currentProject.title} görseli`}
          width={800}
          height={450}
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Project Content */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Column - Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-pink-600">{project.aboutProject}</h2>
          <p className="text-lg leading-relaxed mb-6">{currentProject.description}</p>

          {/* Technologies Used */}
          <h3 className="text-xl font-bold mb-4 text-pink-600">{project.technologiesUsed}</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {currentProject.technologies.map((tech) => (
              <span 
                key={tech}
                className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column - Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-pink-600">{project.projectLinks}</h3>
          <div className="space-y-4">
            {currentProject.github && (
              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <FaGithub className="text-2xl text-gray-700" />
                <span className="font-medium">{project.viewSourceCode}</span>
              </a>
            )}
            {currentProject.live && (
              <a
                href={currentProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors"
              >
                <FaExternalLinkAlt className="text-2xl text-pink-600" />
                <span className="font-medium">{project.viewLiveDemo}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
