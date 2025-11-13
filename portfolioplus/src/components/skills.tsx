import React from "react";

type SkillsProps = {
    icon: React.ElementType;
};

const Skills: React.FC<SkillsProps> = ({ icon }) => {
  const Icon = icon;
  return (
    <div className="bg-pink-50 border border-pink-500 shadow-sm hover:shadow-xl rounded-full flex items-center justify-center p-4 transform hover:scale-110 transition-transform duration-500">
      <Icon size={60} className="" />
    </div>
  );
};

export default Skills;