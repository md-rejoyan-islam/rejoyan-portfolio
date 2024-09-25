import Image from "next/image";
import { RiNextjsFill } from "react-icons/ri";

export default function SkillCard({ data }) {
  return (
    <div className="flex  cursor-pointer border border-project-card-border flex-col justify-between project-card rounded-md bg-project-card-bg-secondary  hover:-translate-y-2 w-40  h-32 transition:translate duration-300 m-3">
      <div className=" flex justify-center -translate-y-[1px] top-bar">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full"></div>
        </div>
      </div>
      <div className="  flex-1 flex items-center  justify-center mx-auto flex-col">
        <Image
          src={data.icon}
          alt={data.name}
          width={55}
          height={55}
          className="mx-auto"
        />
        <h3 className="text-lg font-medium text-text-primary pt-2">
          {data.name}
        </h3>
      </div>
      <div className=" w-full bottom-bar flex justify-center -translate-y-[0px] ">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent  w-full"></div>
        </div>
      </div>
    </div>
  );
}
