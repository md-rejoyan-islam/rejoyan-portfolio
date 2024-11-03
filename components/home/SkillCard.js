import Image from "next/image";

export default function SkillCard({ data }) {
  return (
    <div
      className="flex relative bg-cover cursor-pointer border border-project-card-border flex-col justify-between project-card rounded-md bg-[project-card-bg-secondary] bg-[rgba(255, 255, 255, 0.01)]  overflow-hidden hover:-translate-y-2 w-24  h-20 sm:w-32  md:w-40 sm:h-28  md:h-32 transition:translate duration-300 m-3   "
      // style={{
      //   backgroundImage: `url('/gradient.svg')`,
      // }}
    >
      <div className=" flex justify-center -translate-y-[0px] top-bar">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full"></div>
        </div>
      </div>
      <div className="  flex-1 flex items-center  justify-center mx-auto flex-col">
        <Image
          src={data?.icon || "/icons/nextjs.svg"}
          alt={data.name}
          width={55}
          height={55}
          className="mx-auto w-8  sm:w-12  md:w-16 "
        />
        <h3 className="text-sm sm:text-base font-semibold text-text-primary pt-2 ">
          {data.name}
        </h3>
      </div>
      <div className=" w-full bottom-bar flex justify-center -translate-y-[0px] ">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent  w-full"></div>
        </div>
      </div>
      <div className="absolute bottom-0 h-fit -translate-y-1/3 mx-auto  right-0 w-2/4">
        <div className="bg-[rgb(0,166,255)]  dark:bg-[rgb(67,255,217)] aspect-square  opacity-50 w-full max-w-full  rounded-full filter blur-3xl" />
      </div>
    </div>
  );
}
