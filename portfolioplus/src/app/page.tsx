'use client'
import DaysICode from "@/components/DaysICode";
import { AiOutlineExport } from "react-icons/ai";
import { Typewriter } from 'react-simple-typewriter'
import FadeIn from "@/components/FadeIn";


export default function Home() {
  
  return (
    <div>
      <div className="flex lg:flex-row text-neutral-700 flex-col justify-center items-center 2xl:px-52 px-2 lg:pl-20">
        <div className="flex flex-col gap-4">
          <p className="md:text-5xl text-3xl font-semibold lg:text-start text-center">Hi, I'm Sıla. </p>
          <p className="md:text-4xl text-2xl font-bold text-center lg:text-start">
            I am a{' '}
            <span className="bg-linear-to-r from-pink-600 via-pink-300 to-pink-600 bg-clip-text text-transparent">
            <Typewriter
              words={[
                'Computer Engineering Student',
                'Future Software Engineer',
                'Frontend Developer',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
            </span>
          </p>
          <p className="md:text-2xl text-lg text-center lg:text-start">I am currently a 3rd-year Computer Engineering student. I focus on full stack web development. I actively translate the theoretical knowledge I gain in school into practical applications by working on real-world projects. I am passionate about continuous learning and constantly improving my skills in this dynamic field.</p>
          <div className="flex gap-4 items-center lg:justify-start justify-center md:pb-0 pb-6">
          <div className="flex flex-row items-center gap-2 text-xl p-2 bg-pink-400 text-white rounded-md shadow-md hover:bg-pink-500 ">
            <a 
              href="https://www.linkedin.com/in/sıla-öztürk1/"
            >
              Resume 
            </a>
            <AiOutlineExport />
          </div>
          <a 
            href="mailto:ozturksila100@gmail.com" 
            className="p-2 text-xl text-pink-500 hover:text-pink-600"
          >
            Contact 🩷
          </a>
          </div>
        </div>
        <img
          src="avatar-2.png"
          alt="Avatar"
          className="2xl:size-200 lg:size-150 md:size-120 order-first lg:order-last"
        >
        </img>        
      </div>
      <DaysICode />

    </div>
  );
}
