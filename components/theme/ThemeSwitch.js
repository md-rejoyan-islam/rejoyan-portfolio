"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { FiSun } from "react-icons/fi";
import { useOnClickOutside } from "usehooks-ts";
import MagicButton from "../animation/MagicButton";
import ColorMovingButton from "../animation/ColorMovingButton";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // New state to control dropdown visibility
  const { setTheme, resolvedTheme, themes, theme } = useTheme();
  const ref = useRef(null);
  useEffect(() => setMounted(true), []);
  useOnClickOutside(ref, () => setIsOpen(false));
  if (!mounted)
    return (
      <ColorMovingButton>
        <button
          className="bg-background-secondary hover:gap-4 transition-all rounded-xl uppercase py-2 px-3 flex gap-2 items-center"
          // onClick={hashAdded}
        >
          <span>Theme</span>
          <FiSun />
        </button>
      </ColorMovingButton>
    );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={ref} className="relative inline-block text-left">
      <ColorMovingButton>
        <button
          className="bg-background-secondary  hover:gap-4 transition-all rounded-xl  py-1.5 px-4 flex gap-2 items-center"
          onClick={toggleDropdown}
        >
          <span>Theme</span>
          <FiSun />
        </button>
      </ColorMovingButton>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-full origin-top-right rounded-md text-text-primary bg-dropdown shadow-lg">
          <div
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {themes.map((themeItem) => {
              return (
                <button
                  key={themeItem}
                  onClick={() => {
                    setTheme(themeItem);
                    setIsOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-left text-sm hover:bg-dropdownHover ${
                    themeItem === theme
                      ? "bg-selected text-text-root  hover:bg-selected"
                      : ""
                  }`}
                >
                  {themeItem}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
