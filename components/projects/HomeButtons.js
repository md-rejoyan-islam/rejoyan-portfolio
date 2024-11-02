"use client";

import { useRouter } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa";
import TextShimmerButton from "../home/TextShimmerButton";

export function ProjectButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/projects");
  };

  return (
    <div onClick={handleClick}>
      <TextShimmerButton duration={1.2} title={"All Projects"} icon={true}>
        <span className=" group-hover:animate-bounce">
          <FaLocationArrow />
        </span>
      </TextShimmerButton>
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
      <TextShimmerButton duration={1.2} title={"All Blogs"} icon={true}>
        <span className=" group-hover:animate-bounce">
          <FaLocationArrow />
        </span>
      </TextShimmerButton>
    </div>
  );
}
