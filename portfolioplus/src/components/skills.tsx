import React from "react";

type SkillsProps = {
    icon: React.ElementType;
};

const Skills: React.FC<SkillsProps> = ({icon}) => {
    const Icon = icon;
    return (
        <div className="bg-pink-50 border border-pink-500 shadow-2xs hover:shadow-2xl rounded-full items-center justify-center px-4 py-4 transform hover:scale-120 transition-transform duration-500">
            <Icon size={60} className="text-center"/>
        </div>

    );
}
export default Skills;