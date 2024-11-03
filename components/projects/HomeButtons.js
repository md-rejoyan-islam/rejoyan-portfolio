"use client";

import { useRouter } from "next/navigation";
import { RiExternalLinkLine } from "react-icons/ri";
import TextShimmerButton from "../home/TextShimmerButton";

export function ProjectButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/projects");
  };

  return (
    <div onClick={handleClick}>
      <TextShimmerButton
        duration={1.2}
        title={"All Projects"}
        icon={true}
        width={"hover:gap-4"}
      >
        <span className=" ">
          <RiExternalLinkLine />
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
      <TextShimmerButton
        duration={1.2}
        title={"All Blogs"}
        icon={true}
        width={"hover:gap-4"}
      >
        <span className=" ">
          <RiExternalLinkLine />
        </span>
      </TextShimmerButton>
    </div>
  );
}
