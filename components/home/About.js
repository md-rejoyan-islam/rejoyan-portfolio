"use client";
import Image from "next/image";
import { BackgroundLines } from "../ui/background-lines";
import { InView } from "../ui/InView";
import { LetterPullup } from "../ui/LetterPullUp";
import { NeonGradientCard } from "../ui/NeonGradientCard";
import TextAnimation from "../ui/TextAnimation";
import photo from "./../../app/public/images/rejoyan.jpeg";

export default function About() {
  return (
    <section className="py-10">
      <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
        <TextAnimation
          text="About Me"
          as="p"
          variants={{
            hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
            visible: {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              transition: { ease: "linear" },
            },
          }}
        />
        <LetterPullup words={""} delay={0.1} />
      </h2>
      <div className="">
        <div className=" grid grid-cols-1 text-lg lg:grid-cols-7 lg:gap-41 gap-16   text-[#666687] justify-items-center ">
          <div className=" grid place-content-center lg:col-span-4">
            <div className="space-y-5">
              <InView
                variants={{
                  hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -40px 0px" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p>
                  Hello! My name is Md Rejoyan Islam, and I&apos;m a full-stack
                  web developer with a passion for creating impactful digital
                  experiences. My journey began with JavaScript and Python, and
                  I&apos;ve since mastered both SQL and NoSQL databases,
                  ensuring efficient data solutions.
                </p>
              </InView>
              <InView
                variants={{
                  hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -40px 0px" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p>
                  I specialize in React.js with Next.js for modern,
                  user-friendly interfaces, utilizing Redux for state
                  management, and Node.js for robust server-side development. I
                  also build APIs using RESTful or GraphQL approaches.
                </p>
              </InView>
              <InView
                variants={{
                  hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -40px 0px" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p>
                  I&apos;m always eager to learn and adapt to new technologies,
                  and I&apos;m excited about the potential of tech to solve
                  problems and enhance user experiences.
                </p>
              </InView>
            </div>
          </div>
          <div className="flex-1  lg:col-span-3 px-6  relative">
            <BackgroundLines
              svgOptions={{
                duration: 1,
              }}
            >
              <figure className="relative p-4 md:px-16 md:py-6" id="imgFigur">
                <NeonGradientCard borderSize={1} borderRadius={15}>
                  <Image
                    src={photo}
                    alt="Md. Rejoyan Islam"
                    height={"400"}
                    width={"400"}
                    className="   mix-blend-multiple  rounded-[15px]"
                  />
                </NeonGradientCard>
                {/* <div className="w-full h-full absolute top-0 rounded-md  border-red-400 border-2 -z-10 "></div> */}
              </figure>
            </BackgroundLines>
            {/* <BackgroundGradient className="rounded-[22px] p-1">
              {" "}
            </BackgroundGradient> */}
          </div>
        </div>
      </div>
    </section>
  );
}
