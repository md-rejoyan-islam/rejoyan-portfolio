"use client";

import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "../animation/MagicButton";
import { useRouter } from "next/navigation";
import ColorMovingButton from "../animation/ColorMovingButton";

export function ProjectButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/projects");
  };

  return (
    <ColorMovingButton>
      <button
        className="bg-background-secondary hover:gap-4 transition-all rounded-xl  py-1.5 px-4 flex gap-2 items-center"
        onClick={handleClick}
      >
        <span>All Projects</span>
        <FaLocationArrow />
      </button>
    </ColorMovingButton>
  );
}

export function BlogButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/blogs");
  };

  return (
    <MagicButton
      title={"All Blogs"}
      icon={<FaLocationArrow />}
      position={"right"}
      handleClick={handleClick}
    />
  );
}
