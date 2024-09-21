import { FaServer } from "react-icons/fa";
import { IoLogoFirebase, IoLogoNodejs, IoSearchSharp } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { TfiServer } from "react-icons/tfi";

export default function Services() {
  return (
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
            <div className="bg-[rgba(0,255,255,0.87)] aspect-square  opacity-20 w-full max-w-full  rounded-full filter blur-3xl" />
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
  );
}
