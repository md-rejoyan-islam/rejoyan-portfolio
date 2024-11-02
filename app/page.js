import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Blogs from "@/components/home/Blogs";
import Contact from "@/components/home/Contact";
import Education from "@/components/home/Education";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Skills from "@/components/home/Skills";
import { WorkingProcess } from "@/components/home/WorkingProcess";

export default function Home() {
  return (
    <div className="px-2 sm:px-4">
      <Banner />

      {/* about  part */}
      <About />

      {/* skill */}
      <Skills />

      {/* working process  */}
      <WorkingProcess />

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
