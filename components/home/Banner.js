"use client";
import Lottie from "lottie-react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaUserNinja,
} from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

import file from "../../app/public/Animation - 1727036180998.json";

export default function Banner() {
  return (
    <div className=" mt-16 mb-32 px-0 grid grid-cols-3">
      <div className="col-span-2">
        <h2 className="text-text-root text-3xl font-semibold">Hi, I&apos;m </h2>
        <h2 className="  text-[35px] sm:text-[45px] md:text-[55px] lg:text-[60px] font-semibold ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r  to-[#b96ef4]  from-[#5b60eb] via-[#7c52e6]">
            Md. Rejoyan Islam
          </span>{" "}
          <br />
          <span className="text-[#8892b0]">I build things for the web.</span>
        </h2>

        {/* type data  */}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "MERN Stack Developer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Full Stack Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        {/* type data  */}

        <div className="lg:w-2/3 pt-6">
          <p className="text-[#8892b0] text-[17px] sm:text-lg">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </p>
        </div>

        <div className="resume flex gap-4 items-center py-4">
          <div className="bg-gradient-to-r to-pink-500  from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600 delay-200 ">
            <button className="bg-[#0a192f] hover:gap-4  transition-all rounded-full uppercase py-2  px-3  flex gap-2 items-center">
              <span>Contact me</span>
              <FaUserNinja />
            </button>
          </div>
          <div className="bg-gradient-to-r to-pink-500  from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600 delay-200 ">
            <button className="bg-[#0a192f] hover:gap-4  transition-all rounded-full uppercase py-2  px-3  flex gap-2 items-center">
              <span>Get resume</span>
              <MdFileDownload />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full col-span-1 flex justify-center items-center">
        <Lottie animationData={file} loop={false} className="w-full" />
      </div>
    </div>
  );
}
