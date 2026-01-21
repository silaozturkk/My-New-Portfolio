'use client';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const ContactPage = () => {
    const { t } = useLanguage();
    const contact = t.contact;
    const formFields = contact.form?.fields ?? [];
    return (
 
        <div className="pb-6 md:pb-20 text-neutral-800">
            <h2 className="text-5xl 2xl:text-6xl text-center mt-10 font-bold ">
                <span className="bg-linear-to-r from-pink-300 via-pink-400 to-pink-600 bg-clip-text text-transparent">{contact.title}</span>
            </h2>
            <div className="flex flex-col lg:flex-row mt-10 lg:px-30 gap-10 items-center justify-center">  
                <div className="w-full px-4 lg:w-1/2 flex flex-col items-center">
                    <Image
                        src="/avatar2.png"
                        alt="Contact avatar illustration"
                        width={240}
                        height={240}
                        className="w-60 pb-6"
                        priority
                    />
                    
                    <p className="text-center text-lg">
                        {contact.description}
                    </p>
                    <div className="flex flex-row gap-5 p-5">
                        <a 
                            href="https://github.com/silaozturkk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-500 hover:text-black transition-colors duration-300 text-4xl"
                        >
                            <FaGithub />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/sıla-öztürk1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500  hover:text-black transition-colors duration-300 text-4xl"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div className="w-full px-2 lg:w-1/2">
                    <form action={`https://formsubmit.co/${contact.email}`} method="POST"  className="flex flex-col gap-4 ">
                        <h2 className="lg:hidden text-center md:text-start text-3xl font-semibold bg-linear-to-r from-pink-600 via-pink-300 to-pink-400 bg-clip-text text-transparent ">{contact.form.title}</h2>
                        {formFields.map((field) => (
                            <div className="flex flex-col" key={field.name}>
                                <label>{field.label}</label>
                                {field.type === "textarea" ? (
                                    <textarea
                                        name={field.name}
                                        rows={5}
                                        required={field.required}
                                        placeholder={field.placeholder}
                                        className="bg-white rounded-md shadow-2xl border-2 border-white hover:border-pink-300 w-full px-1"
                                    />
                                ) : (
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        required={field.required}
                                        placeholder={field.placeholder}
                                        className="bg-white rounded-md shadow-2xl border-2 border-white hover:border-pink-300 w-full px-1"
                                    />
                                )}
                            </div>
                        ))}
                        <button className="bg-pink-400 py-2 text-white rounded-md   hover:bg-pink-500 ">
                            {contact.form.submitButton}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ContactPage;
