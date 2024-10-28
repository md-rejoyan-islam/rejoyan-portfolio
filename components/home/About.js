"use client";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import photo from "./../../app/public/images/rejoyan.jpeg";

export default function About() {
  return (
    <section className="py-10">
      <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
        About Me
      </h2>
      <div className="pt-10">
        <div className=" grid grid-cols-1 lg:grid-cols-5 lg:gap-40 gap-20  text-[#8892b0] justify-items-center ">
          <div className=" grid place-content-center lg:col-span-3">
            <div className="space-y-5">
              <p>
                Hello! My name is Md Rejoyan Islam, and I&apos;m a full-stack
                web developer with a passion for creating impactful digital
                experiences. My journey began with JavaScript and Python, and
                I&apos;ve since mastered both SQL and NoSQL databases, ensuring
                efficient data solutions.
              </p>
              <p>
                I specialize in React.js with Next.js for modern, user-friendly
                interfaces, utilizing Redux for state management, and Node.js
                for robust server-side development. I also build APIs using
                RESTful or GraphQL approaches.
              </p>
              <p>
                I&apos;m always eager to learn and adapt to new technologies,
                and I&apos;m excited about the potential of tech to solve
                problems and enhance user experiences.
              </p>
            </div>
          </div>
          <div className="flex-1  lg:col-span-2 px-6 max-w-[400px]">
            <BackgroundGradient className="rounded-[22px] p-1">
              {" "}
              <figure className="relative" id="imgFigur">
                <Image
                  src={photo}
                  alt="Md. Rejoyan Islam"
                  height={"400"}
                  width={"400"}
                  className="   mix-blend-multiple  rounded-[22px]"
                />
                {/* <div className="w-full h-full absolute top-0 rounded-md  border-red-400 border-2 -z-10 "></div> */}
              </figure>
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </section>
  );
}
