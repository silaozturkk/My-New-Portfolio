'use client';
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { t } = useLanguage();
  const projectTexts = t.project;

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop - Çok hafif şeffaf arka plan */}
      <div 
        className="fixed inset-0 bg-black/50 bg-opacity-10"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close Button - Daha görünür çarpı butonu */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-pink-500 text-white rounded-full p-3 shadow-lg hover:bg-pink-600 transition-colors"
        >
          <FaTimes className="text-lg" />
        </button>

        {/* Project Image */}
        <div className="relative h-48 md:h-64">
          <Image
            src={project.image}
            alt={`${project.title} görseli`}
            fill
            className="object-cover rounded-t-2xl"
          />
        </div>

        {/* Project Content */}
        <div className="p-6 md:p-8">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-800">
            {project.title}
          </h2>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-pink-600">
              {projectTexts.aboutProject || "Proje Hakkında"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-pink-600">
              {projectTexts.technologiesUsed || "Kullanılan Teknolojiler"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies && project.technologies.map((tech: string) => (
                <span 
                  key={tech}
                  className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <FaGithub />
                {projectTexts.viewSourceCode || "Kaynak Kodu"}
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
              >
                <FaExternalLinkAlt />
                {projectTexts.viewLiveDemo || "Canlı Demo"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
