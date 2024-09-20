import HomePorject from "@/components/home/HomePorject";
import { TfiServer } from "react-icons/tfi";
import { ChevronsDown, ExternalLink } from "lucide-react";
import HomeBlogCard from "@/components/home/HomeBlogCard";
import { PinContainer } from "@/components/animation/3d-pin";
import { BlogButton, ProjectButton } from "@/components/projects/HomeButtons";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoNodejs, IoSearchSharp } from "react-icons/io5";
import { FaServer } from "react-icons/fa";
import SkillCard from "@/components/home/SkillCard";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="px-2 sm:px-4">
      {/* about  */}
      <section className="py-10">
        <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
          About
        </h2>
        <div className="pt-4"></div>
      </section>
      {/* education  */}
      <section className="py-10">
        <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
          Education
        </h2>
        <div className="pt-4"></div>
      </section>
      {/* contact */}
      <section className="py-10">
        <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
          Contact With Me
        </h2>
        <div className="pt-4"></div>
      </section>

      {/* skill */}
      <section className="py-10 ">
        <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
          Skills
        </h2>
        <div className="pt-4">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((dt, index) => {
              return <SkillCard key={index} index={index} />;
            })}
          </Marquee>
        </div>
      </section>

      {/* services */}
      <section className="py-10">
        <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
          My Services
        </h2>
        <div className="py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="p-4 rounded-lg border border-project-card-border bg-project-card-bg-secondary backdrop-blur-3xl ">
            <div>
              <RiNextjsFill className="text-[65px] text-text-root " />
            </div>
            <div>
              <h3 className="text-text-primary text-2xl font-semibold py-2">
                Front-End
              </h3>
              <p className="text-text-secondary">
                I can build a website from scratch using the latest technologies
                and frameworks.
              </p>
            </div>
            <div className="absolute top-0 -translate-y-1/3 mx-auto  right-0 w-3/4">
              <div
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  aspectRatio: 1,
                  opacity: "0.2",
                }}
                className="bg-[rgba(0,255,255,0.87)] rounded-full filter blur-3xl"
              />
            </div>
          </div>

          <div className="p-4 rounded-lg border border-project-card-border bg-project-card-bg-secondary backdrop-blur-3xl ">
            <div>
              <IoLogoNodejs className="text-[65px] text-text-root " />
            </div>
            <div>
              <h3 className="text-text-primary text-2xl font-semibold py-2">
                Backend-End
              </h3>
              <p className="text-text-secondary">
                I can build a website from scratch using the latest technologies
                and frameworks.
              </p>
            </div>
            <div className="absolute top-0 -translate-y-1/3 mx-auto  right-0 w-3/4">
              <div
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  aspectRatio: 1,
                  opacity: "0.2",
                }}
                className="bg-[rgba(0,255,255,0.87)] rounded-full filter blur-3xl"
              />
            </div>
          </div>

          <div className="p-4 rounded-lg border border-project-card-border bg-project-card-bg-secondary backdrop-blur-3xl ">
            <div>
              <TfiServer className="text-[65px] text-text-root " />
            </div>
            <div>
              <h3 className="text-text-primary text-2xl font-semibold py-2">
                Hosting
              </h3>
              <p className="text-text-secondary">
                I can build a website from scratch using the latest technologies
                and frameworks.
              </p>
            </div>
            <div className="absolute top-0 -translate-y-1/3 mx-auto  right-0 w-3/4">
              <div
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  aspectRatio: 1,
                  opacity: "0.2",
                }}
                className="bg-[rgba(0,255,255,0.87)] rounded-full filter blur-3xl"
              />
            </div>
          </div>
          <div className="p-4 rounded-lg border border-project-card-border bg-project-card-bg-secondary backdrop-blur-3xl ">
            <div>
              <FaServer className="text-[65px] text-text-root " />
            </div>
            <div>
              <h3 className="text-text-primary text-2xl font-semibold py-2">
                Database Managment
              </h3>
              <p className="text-text-secondary">
                I can build a website from scratch using the latest technologies
                and frameworks.
              </p>
            </div>
            <div className="absolute top-0 -translate-y-1/3 mx-auto  right-0 w-3/4">
              <div
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  aspectRatio: 1,
                  opacity: "0.2",
                }}
                className="bg-[rgba(0,255,255,0.87)] rounded-full filter blur-3xl"
              />
            </div>
          </div>
          <div className="p-4 rounded-lg border border-project-card-border bg-project-card-bg-secondary backdrop-blur-3xl ">
            <div>
              <IoLogoFirebase className="text-[65px] text-text-root " />
            </div>
            <div>
              <h3 className="text-text-primary text-2xl font-semibold py-2">
                Firebase
              </h3>
              <p className="text-text-secondary">
                I can build a website from scratch using the latest technologies
                and frameworks.
              </p>
            </div>
            <div className="absolute top-0 -translate-y-1/3 mx-auto  right-0 w-3/4">
              <div
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  aspectRatio: 1,
                  opacity: "0.2",
                }}
                className="bg-[rgba(0,255,255,0.87)] rounded-full filter blur-3xl"
              />
            </div>
          </div>
          <div className="p-4 rounded-lg border border-project-card-border bg-project-card-bg-secondary backdrop-blur-3xl ">
            <div>
              <IoSearchSharp className="text-[65px] text-text-root " />
            </div>
            <div>
              <h3 className="text-text-primary text-2xl font-semibold py-2">
                SEO
              </h3>
              <p className="text-text-secondary">
                I can build a website from scratch using the latest technologies
                and frameworks.
              </p>
            </div>
            <div className="absolute top-0 -translate-y-1/3 mx-auto  right-0 w-3/4">
              <div
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  aspectRatio: 1,
                  opacity: "0.2",
                }}
                className="bg-[rgba(0,255,255,0.87)] rounded-full filter blur-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* projects  */}
      <section className="py-10">
        <div className="flex justify-between items-center gap-12">
          <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
            Projects
          </h2>
          <ProjectButton />
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
      {/* blog */}
      <section className="py-10">
        <div className="flex justify-between items-center gap-12">
          <h2 className="font-incognito text-4xl text-text-root font-semibold tracking-tight">
            Blogs
          </h2>
          <BlogButton />
        </div>
        <div className="py-4 gap-8 grid sm:grid-cols-2 lg:grid-cols-3 ">
          <PinContainer
            title={"reerer"}
            links={[
              {
                title: "View",
                href: "/blogs",
                icon: <ExternalLink className="text-button w-4 h-4" />,
              },
            ]}
          >
            <HomeBlogCard />
          </PinContainer>
          <PinContainer
            title={"reerer"}
            links={[
              {
                title: "View",
                href: "/blogs",
                icon: <ExternalLink className="text-button w-4 h-4" />,
              },
            ]}
          >
            <HomeBlogCard />
          </PinContainer>
          <PinContainer
            links={[
              {
                title: "View",
                href: "/blogs",
                icon: <ExternalLink className="text-button w-4 h-4" />,
              },
            ]}
          >
            <HomeBlogCard />
          </PinContainer>
        </div>
      </section>
    </div>
  );
}
