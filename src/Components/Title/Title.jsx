import { useEffect } from "react";
import { Icons } from "../Icons/Icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Title = () => {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <>
      <div className="-mb-[5rem] flex items-center relative  border-2 border-red-600 left-1">
        <h1 data-aos="fade-up" className="font-bold text-white text-[8rem] flex items-center z-10">
          FULLSTACK
          <Icons/>
        </h1>
      </div>

      <h1 className="font-bold text-title text-[12rem] -mt-[7.5rem] z-10" data-aos="fade-up">
        DEVELOPER
      </h1>
    </>
  );
};
