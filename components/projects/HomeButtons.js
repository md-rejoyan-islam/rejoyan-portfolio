"use client";

import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "../animation/MagicButton";
import { useRouter } from "next/navigation";

export function ProjectButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/projects");
  };

  return (
    <MagicButton
      title={"All Projects"}
      icon={<FaLocationArrow />}
      position={"right"}
      handleClick={handleClick}
    />
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
