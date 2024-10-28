"use client";

import { useRouter } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa";
import AnimatedButton from "../animation/AnimatedButton";

export function ProjectButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/projects");
  };

  return (
    <div onClick={handleClick}>
      <AnimatedButton
        title={"All Projects"}
        icon={<FaLocationArrow />}
      ></AnimatedButton>
    </div>
  );
}

export function BlogButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/blogs");
  };

  return (
    <div onClick={handleClick}>
      <AnimatedButton
        title={"All Blogs"}
        icon={<FaLocationArrow />}
      ></AnimatedButton>
    </div>
  );
}
