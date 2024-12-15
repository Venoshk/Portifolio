import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Icons = () => {
  return (
    <>
      <section className="relative flex justify-center items-center -mb-10">
        <a href="https://www.linkedin.com/in/paulo-henrique-b1a699227/" className="group flex justify-center transition-all rounded-full p-1">
            <FaLinkedin size={30}/>
          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-7 duration-700 text-lg text-title ">
            Linkedin
          </span>
        </a>

        <a className="group flex justify-center transition-all rounded-full p-1">
            <FaInstagram size={30}/>
          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-7 duration-700 text-lg text-title ">
            Instagram
          </span>
        </a>

        <a className="group flex justify-center transition-all rounded-full p-1">
            <FaGithub size={30}/>
          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-7 duration-700 text-lg text-title ">
            GitHub
          </span>
        </a>
      </section>
    </>
  );
};
