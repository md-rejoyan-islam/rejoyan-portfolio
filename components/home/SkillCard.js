import { RiNextjsFill } from "react-icons/ri";

export default function SkillCard({ index }) {
  return (
    <div className="flex  cursor-pointer border border-project-card-border flex-col justify-between project-card rounded-md bg-project-card-bg-secondary shadow-lg hover:-translate-y-2 w-40  h-32 transition:translate duration-300 m-3">
      <div className=" flex justify-center -translate-y-[1px] top-bar">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full"></div>
        </div>
      </div>
      <div className="project-inner  flex-1 flex items-center gap-4 mx-auto">
        <div>
          <RiNextjsFill className="text-[50px] mx-auto" />
          <h3 className="text-[20px] font-medium text-text-primary">Next.js</h3>
        </div>
      </div>
      <div className=" w-full bottom-bar flex justify-center -translate-y-[0px] ">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent  w-full"></div>
        </div>
      </div>
    </div>
  );
}
