import { FaServer } from "react-icons/fa";
import { IoLogoFirebase, IoLogoNodejs, IoSearchSharp } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { TfiServer } from "react-icons/tfi";
import { MovingBorder } from "../animation/MovingBorder";

export default function Services() {
  const services = [
    {
      name: "Front-End",
      description:
        "I can build a website from scratch using the latest technologies and frameworks.",
      icon: <RiNextjsFill className="text-[65px] text-button " />,
    },
    {
      name: "Backend-End",
      description:
        "I can build a website from scratch using the latest technologies and frameworks.",
      icon: <IoLogoNodejs className="text-[65px] text-button " />,
    },
    {
      name: "Hosting",
      description:
        "I can build a website from scratch using the latest technologies and frameworks.",
      icon: <TfiServer className="text-[65px] text-button " />,
    },
    {
      name: "Database Managment",
      description:
        "I can build a website from scratch using the latest technologies and frameworks.",
      icon: <FaServer className="text-[65px] text-button " />,
    },
    {
      name: "Firebase",
      description:
        "I can build a website from scratch using the latest technologies and frameworks.",
      icon: <IoLogoFirebase className="text-[65px] text-button " />,
    },
    {
      name: "SEO",
      description:
        "I can build a website from scratch using the latest technologies and frameworks.",
      icon: <IoSearchSharp className="text-[65px] text-button " />,
    },
  ];

  return (
    <section className="py-10">
      <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
        My Services
      </h2>
      <div className="py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {services?.map((service, index) => (
          <div
            className="p-4  bg-[url('/gradient.svg')] bg-cover  overflow-hidden rounded-lg border border-project-card-border bg-project-card-bg-secondary  hover:scale-105 transition-all duration-500  backdrop-blur-3xl "
            key={index}
          >
            <div>{service?.icon}</div>
            <div>
              <h3 className="text-text-primary text-2xl font-semibold py-2">
                {service?.name}
              </h3>
              <p className="text-text-secondary">{service?.description}</p>
            </div>
            <div className="absolute top-0 -translate-y-1/3 mx-auto  right-0 w-3/4">
              <div className="bg-[rgba(0,191,255,0.72)]  dark:bg-[rgba(255,0,174,0.75)] aspect-square  opacity-20 w-full max-w-full  rounded-full filter blur-3xl" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
