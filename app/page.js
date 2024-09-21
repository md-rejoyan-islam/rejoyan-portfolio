import HomePorject from "@/components/home/HomePorject";
import { TfiServer } from "react-icons/tfi";
import { MdOutlineMailOutline } from "react-icons/md";
import { ChevronsDown, ExternalLink } from "lucide-react";
import HomeBlogCard from "@/components/home/HomeBlogCard";
import { PinContainer } from "@/components/animation/3d-pin";
import { BlogButton, ProjectButton } from "@/components/projects/HomeButtons";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoNodejs, IoSearchSharp } from "react-icons/io5";
import { FaPhone, FaServer, FaUniversity } from "react-icons/fa";
import SkillCard from "@/components/home/SkillCard";
import Marquee from "react-fast-marquee";
import { FaMapLocationDot } from "react-icons/fa6";
import Skills from "@/components/home/Skills";
import Services from "@/components/home/Services";
import Contact from "@/components/home/Contact";
import Education from "@/components/home/Education";
import Projects from "@/components/home/Projects";
import Blogs from "@/components/home/Blogs";
import About from "@/components/home/About";

export default function Home() {
  return (
    <div className="px-2 sm:px-4">
      {/* about  */}
      <About />

      {/* skill */}
      <Skills />

      {/* services */}
      <Services />

      {/* projects  */}
      <Projects />

      {/* education  */}
      <Education />

      {/* blog */}
      <Blogs />
      {/* contact */}
      <Contact />
    </div>
  );
}
