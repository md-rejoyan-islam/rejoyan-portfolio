"use client";

import { FaUserNinja } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

import ColorMovingButton from "../animation/ColorMovingButton";
import ShowLottieFile from "./ShowLottieFile";

import lootieAnimation from "../../app/public/bannerAnimation.json";
import Link from "next/link";

export default function Banner() {
  return (
    <div className=" mt-16 mb-32 px-0 grid grid-cols-3">
      <div className="col-span-2">
        <h2 className="text-text-primary text-3xl font-semibold">
          Hi, I&apos;m{" "}
        </h2>
        <h2 className="  text-[35px] sm:text-[45px] md:text-[55px] lg:text-[60px] font-semibold ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r  to-[#2a0ca1]  via-[#5f3573] from-[#b52ac4] ">
            Md. Rejoyan Islam
          </span>{" "}
          <br />
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
          className="bg-clip-text inline-block text-[3em] text-transparent bg-gradient-to-r from-[#4d1cb8] via-[#12e435] to-[#b72a77]"
          repeat={Infinity}
        />
        {/* type data  */}
        <h2 className="  text-[3em] font-semibold ">
          <span className="text-text-secondary">
            I build things for the web.
          </span>
        </h2>

        <div className="lg:w-2/3 pt-6">
          <p className="text-[#8892b0] text-[17px] sm:text-lg">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </p>
        </div>

        <div className="resume flex gap-4 items-center py-4">
          <ColorMovingButton>
            <Link
              href={"#contact"}
              className="bg-background-secondary hover:gap-4 transition-all rounded-xl uppercase py-2 px-3 flex gap-2 items-center"
              // onClick={hashAdded}
            >
              <span>Contact me</span>
              <FaUserNinja />
            </Link>
          </ColorMovingButton>
          <ColorMovingButton>
            <button className="bg-background-secondary hover:gap-4  transition-all rounded-xl uppercase py-2  px-3  flex gap-2 items-center">
              <span>Get resume</span>
              <MdFileDownload />
            </button>
          </ColorMovingButton>
        </div>
      </div>

      <div className="w-full col-span-1 flex justify-center items-center relative">
        <div className="absolute top-0 -left-40">
          <ShowLottieFile
            src={lootieAnimation}
            loop={true}
            className={"w-[120%]"}
          />
        </div>
      </div>
    </div>
  );
}
