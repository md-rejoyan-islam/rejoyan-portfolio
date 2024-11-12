"use client";
import {
  AnalysisIcon,
  DeploymentIcon,
  DesignIcon,
  DevelopmentIcon,
  MaintenanceIcon,
  TestingIcon,
} from "@/components/svg";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { StepContent } from "./StepCount";

export default function WorkingProcesses() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // interval ref
  const intervalRef = React.useRef(null);

  // step content
  function handleIntervalProgress() {
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setStep((current) => (current + 1) % 6);
    }, 4000);
  }

  useEffect(() => {
    if (!isAutoPlaying) return;

    handleIntervalProgress();

    return () => {
      clearInterval(intervalRef?.current);
    };
  }, [isAutoPlaying]);

  const handleTabClick = (newStep) => {
    if (intervalRef?.current) {
      clearInterval(intervalRef.current);
      handleIntervalProgress();
    }
    setIsAutoPlaying(true);
    setDirection(newStep > step ? 1 : -1);
    setStep(newStep);
  };

  const workProcess = [
    {
      id: 1,
      title: "Requirement analysis",
      icon: <AnalysisIcon />,
      sort_description:
        "This initial phase involves gathering and understanding project requirements to ensure alignment with client goals. It includes defining project scope, timelines, and technical needs.",
      long_description:
        "We will analyze your requirements and provide you with a detailed proposal. We will analyze your requirements and provide you with a detailed proposal. We will analyze your requirements and provide you with a detailed proposal. We will analyze your requirements and provide you with a detailed proposal.",
    },
    {
      id: 2,
      title: "Design",
      icon: <DesignIcon />,
      sort_description:
        "In this stage, visual and functional designs are created, providing a blueprint of the project's layout, user experience, and interface elements to match client expectations.",
      long_description:
        "We will design a solution that meets your requirements and is easy to maintain. We will design a solution that meets your requirements and is easy to maintain. We will design a solution that meets your requirements and is easy to maintain.",
    },
    {
      id: 3,
      title: "Development",
      icon: <DevelopmentIcon />,
      sort_description:
        "Here, the actual coding and building take place. Using modern technologies and frameworks, I bring the design to life, ensuring functionality, performance, and compatibility.",
      long_description:
        "We will develop the solution according to the design. We will develop the solution according to the design. We will develop the solution according to the design.",
    },
    {
      id: 4,
      title: "Testing",
      icon: <TestingIcon />,
      sort_description:
        "Comprehensive testing is done to identify and fix bugs, ensure usability, and meet quality standards. This includes functionality, security, and cross-device compatibility tests.",
      long_description:
        "We will test the solution, fix bugs, and test again. We will test the solution, fix bugs, and test again. We will test the solution, fix bugs, and test again.",
    },
    {
      id: 5,
      title: "Deployment",
      icon: <DeploymentIcon />,
      sort_description:
        "After thorough testing, the project is deployed to the live environment, making it accessible to users. This includes server setup, domain configuration, and initial launch.",
      long_description:
        "Post-launch, I offer ongoing support and updates to keep the project running smoothly, secure, and up-to-date with any required improvements or changes.",
    },
    {
      id: 6,
      title: "Maintenance",
      icon: <MaintenanceIcon />,
      sort_description:
        "Post-launch, I offer ongoing support and updates to keep the project running smoothly, secure, and up-to-date with any required improvements or changes.",
      long_description:
        "We will maintain the solution, fix bugs, and add new features. We will maintain the solution, fix bugs, and add new features. We will maintain the solution, fix bugs, and add new features.",
    },
  ];

  return (
    <section className="py-10">
      <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
        Working Process
      </h2>

      <div className=" pt-16 mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12  items-center gap-y-4">
          {/* Right side: Progress bars */}
          <div className="space-y-3">
            {workProcess?.map((data, index) => (
              <div
                key={index}
                onClick={() => handleTabClick(index)}
                className={cn(
                  "w-full text-left focus:outline-none group relative border py-3.5 px-2 rounded-md items-center flex h-full bg-transparent dark:bg-[#2e5b5b0d] cursor-pointer backdrop-blur-2xl dark:border-[#1c3f6335] hover:scale-[1.02] transition-all duration-200 ease-in-out",
                  step === index &&
                    "scale-[1.02] bg-[#593cea0c]  dark:bg-black/5"
                )}
              >
                <div className="flex items-center gap-4 relative pl-2 text-lg font-semibold">
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors",
                      step === index ? "text-[#583cea]" : "text-gray-500"
                    )}
                  >
                    {index + 1}
                  </span>
                  <div className="flex flex-col gap-2  ">{data.title}</div>
                </div>

                <div className="bg-gray-600/20 w-1 h-full absolute left-0 top-0  rounded-sm">
                  <motion.div
                    className=" bg-[#583cea] rounded-full w-1"
                    initial={{ height: "0%" }}
                    animate={{
                      height: step === index ? "100%" : "0%",
                    }}
                    transition={{
                      duration: step === index ? 4 : 0.3,
                      ease: "linear",
                    }}
                  />
                </div>
                {/* <div className="bg-gray-600/20 w-1 h-full absolute right-0 top-0  rounded-sm">
                  <motion.div
                    className={cn(
                      " bg-pink-500 rounded-full w-1",
                      step === index ? "opacity-100" : "opacity-0"
                    )}
                    initial={{ height: "0%" }}
                    // initial={{ height: "100%" }}
                    animate={{
                      height: step === index ? "100%" : "0%",
                      //   height: step === index ? "0%" : "100%",
                    }}
                    transition={{
                      duration: step === index ? 5 : 0.3,
                      ease: "linear",
                    }}
                  />
                </div> */}
              </div>
            ))}
          </div>
          {/* Left side: Steps */}
          <div className="relative  min-h-[300px] md:min-h-[200px] flex items-center">
            <AnimatePresence initial={false} custom={direction}>
              <StepContent
                step={step}
                direction={direction}
                key={step}
                processes={workProcess}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
