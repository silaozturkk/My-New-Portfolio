import React from "react";

type SkillsProps = {
    icon: React.ElementType;
    label?: string;
};

const Skills: React.FC<SkillsProps> = ({ icon, label }) => {
  const Icon = icon;
  return (
    <div className="bg-pink-50 border border-pink-500 shadow-sm hover:shadow-xl rounded-2xl flex flex-col items-center justify-center gap-2 p-4 transform hover:scale-110 transition-transform duration-500 text-center">
      <Icon size={60} />
      {label && <span className="text-sm font-semibold text-neutral-700">{label}</span>}
    </div>
  );
};

export default Skills;