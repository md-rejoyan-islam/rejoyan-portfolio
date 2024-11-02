import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

//you handle routing logic. Code is not complex, just play with it and you gonna figure out how it works.
export const TabList = ({
  tabs,
  setFilter,
  projectsData,
  setProject,
  ref,
  style,
}) => {
  const fired = useRef(false);
  const defaultSelectedTabIndex = 0;
  const [currentLink, setCurrentLink] = useState({
    index: defaultSelectedTabIndex,
    left: undefined,
    width: undefined,
  });

  const defaultSelectedTabStyles = [
    "[&:nth-child(1)]:dark:bg-button-bg [&:nth-child(1)]:bg-button-bg",
    "[&:nth-child(2)]:dark:bg-button-bg [&:nth-child(2)]:bg-neutral-950",
    "[&:nth-child(3)]:dark:bg-button-bg [&:nth-child(3)]:bg-neutral-950",
    "[&:nth-child(4)]:dark:bg-button-bg [&:nth-child(4)]:bg-neutral-950",
  ];

  useEffect(() => {
    setCurrentLink(() => ({
      left: document.getElementById("uuu-btn-" + defaultSelectedTabIndex)
        ?.offsetLeft,
      width: document
        .getElementById("uuu-btn-" + defaultSelectedTabIndex)
        ?.getBoundingClientRect().width,
      index: defaultSelectedTabIndex,
    }));
  }, []);

  return (
    <div
      className={
        "w-fit relative  rounded-full flex gap-5 items-center justify-center p-2 backdrop-blur-2xl"
      }
      ref={ref}
    >
      {tabs.map((link, i) => (
        <motion.button
          key={i}
          style={style}
          id={"uuu-btn-" + i}
          onClick={() => {
            fired.current = true;
            setCurrentLink(() => ({
              left: document.getElementById("uuu-btn-" + i)?.offsetLeft,
              width: document
                .getElementById("uuu-btn-" + i)
                ?.getBoundingClientRect().width,
              index: i,
            }));

            setFilter(link);
            if (link === "All") {
              setProject([...projectsData]);
            } else {
              setProject(
                [...projectsData].filter((project) =>
                  project.techStack.find((tech) => {
                    return tech.toLowerCase() === link.toLowerCase();
                  })
                ) || []
              );
            }
          }}
          className={twMerge(
            "transition-colors border duration-200 text-sm text-text-secondary bg-transparent hover:bg-transparent hover:text-button flex items-center justify-center rounded-md h-fit px-2 py-1 text-nowrap",
            currentLink.index === i && "text-button bg-button-bg",
            fired.current
              ? ""
              : defaultSelectedTabStyles[defaultSelectedTabIndex]
          )}
        >
          {link}
        </motion.button>
      ))}
      <div className={"absolute inset-0 h-full p-2 -z-[1] overflow-hidden"}>
        <div className={"relative h-full w-full overflow-hidden"}>
          <div
            style={{
              left: `calc(${currentLink.left || 0}px - 0.75rem + 0.25rem)`,
              width: `${currentLink.width || 0}px`,
            }}
            className={twMerge(
              `transition-[color,left,width] duration-300 absolute top-1/2 -translate-y-1/2 h-full rounded-md -z-[1]`,
              //just skips animation on page load
              fired.current ? "bg-button-bg" : "bg-transparent"
            )}
          />
        </div>
      </div>
    </div>
  );
};
