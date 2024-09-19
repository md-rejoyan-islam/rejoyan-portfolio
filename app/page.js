import MagicButton from "@/components/animation/MagicButton";
import HomePorject from "@/components/home/HomePorject";
import { FaLocationArrow } from "react-icons/fa";
import { ChevronsDown } from "lucide-react";
import HomeBlogCard from "@/components/home/HomeBlogCard";
import { PinContainer } from "@/components/animation/3d-pin";

export default function Home() {
  return (
    <div className="px-4">
      <section className="py-10">
        <div className="flex justify-between items-center gap-12">
          <h2 className="font-incognito text-4xl font-semibold tracking-tight">
            Projects
          </h2>
          <MagicButton title={"All Projects"}></MagicButton>
        </div>
        <div className="py-10 ">
          <HomePorject direction="reverse" />

          <ChevronsDown className="h-20 m-0 mx-auto w-20 my-8  animate-bounc  text-[#4b8fe2]" />

          <HomePorject />
          <ChevronsDown className="h-20 m-0 mx-auto w-20 my-8  animate-bounc  text-[#4b8fe2]" />
          <HomePorject direction="reverse" />
          <ChevronsDown className="h-20 m-0 mx-auto w-20 my-8  animate-bounc  text-[#4b8fe2]" />
          <HomePorject />
        </div>
      </section>
      <section className="py-10">
        <div className="flex justify-between items-center gap-12">
          <h2 className="font-incognito text-4xl font-semibold tracking-tight">
            Blogs
          </h2>
          <MagicButton
            title={"All Blogs"}
            icon={<FaLocationArrow />}
            position={"right"}
          />
        </div>
        <div className="py-4 gap-8 grid grid-cols-3 ">
          <PinContainer title={"reerer"}>
            <HomeBlogCard />
          </PinContainer>
          <PinContainer title={"reerer"}>
            <HomeBlogCard />
          </PinContainer>
          <PinContainer title={"reerer"}>
            <HomeBlogCard />
          </PinContainer>
        </div>
      </section>
    </div>
  );
}
