import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

export const Meteors = ({ number, className }) => {
  // Memoize the meteors array to avoid creating a new reference on every render
  const meteors = useMemo(() => new Array(number || 20).fill(true), [number]);

  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const newStyles = meteors.map(() => ({
      top: 0,
      left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
      animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
    }));
    setMeteorStyles(newStyles);
  }, [meteors]); // Only run effect when meteors array changes

  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#827cfd3e] before:to-transparent",
            className
          )}
          style={meteorStyles[idx]} // Use the style from state
        ></span>
      ))}
    </>
  );
};
