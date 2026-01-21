import React from "react";

type SkillsProps = {
    icon: React.ElementType;
    label?: string;
};

const Skills: React.FC<SkillsProps> = ({ icon, label }) => {
  const Icon = icon;
  return (
    <div className="bg-pink-50 border border-pink-500 shadow-sm hover:shadow-xl rounded-full w-24 h-24 flex flex-col items-center justify-center gap-1 p-2 transform hover:scale-110 transition-transform duration-500 text-center">
      <Icon size={50} />
     
    </div>
  );
};

export default Skills;