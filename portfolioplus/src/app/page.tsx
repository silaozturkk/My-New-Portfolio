import GitHubSection from "@/components/GithubCalendar";
import Image from "next/image";
import { AiOutlineExport } from "react-icons/ai";

export default function Home() {
  
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-center 2xl:px-52 px-2 md:pl-20">
        <div className="2xl:pt-40 md:pt-32 flex flex-col gap-4 text-">
          <p className="text-5xl text-pink-500 font-semibold md:text-start text-center">Hi, I'm Sıla. </p>
          <p className="text-4xl ">I'm a Computer Engineering Student.</p>
          <p className="text-2xl ">I am currently a 3rd-year Computer Engineering student. I specialize in Full Stack Web Development. I actively translate the theoretical knowledge I gain in school into practical applications by working on real-world projects. I am passionate about continuous learning and constantly improving my skills in this dynamic field.</p>
          <div className="flex gap-4 items-center md:justify-start justify-center md:pb-0 pb-6">
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
            className="p-2 text-xl text-pink-500 hover:text-pink-600  "
          >
            Contact 🩷
          </a>
          </div>
        </div>
        <img
          src="avatar-2.png"
          alt="Avatar"
          className="2xl:size-200 md:size-150 size-w-1/2  order-first md:order-last"
        >
        </img>        
      </div>
    </div>
  );
}
