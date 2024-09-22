import Image from "next/image";
import photo from "../../app/public/images/proj.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
export default function HomePorject({ direction }) {
  return (
    <article className=" grid md:grid-cols-7  rounded-lg ">
      <section
        className={`${
          direction === "reverse" ? "order-1" : "order-1 md:order-3"
        } col-span-3`}
      >
        <figure
          className={`${
            direction === "reverse" ? "md:-mr-16" : "md:-ml-16"
          } md:bg-green-300 md:scale-x-[1.01] md:hover:translate-y-0  hover:-translate-y-2  rounded-xl border p-1 md:p-0 border-button md:border-none`}
        >
          <Image
            width={500}
            h={400}
            src={photo}
            alt="Alt "
            className="w-full h-full rounded-xl "
          />
        </figure>
      </section>
      <section
        className={`${
          direction === "reverse"
            ? "order-2 md:text-right"
            : "order-2 md:text-left "
        } z-10 grid items-center w-full text-left  col-span-3  py-2`}
      >
        <div className="w-full block">
          <h3 className="font-semibold text-2xl   text-text-primary py-2  block w-full">
            Halcyon Theme Atom
          </h3>

          <p className=" rounded-md text-text-secondary backdrop-blur-md md:text-text-primary py-2 md:px-4 h-full md:bg-project-card-bg-secondary ">
            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
            and more. Available on Visual Studio Marketplace, Package Control,
            Atom Package Manager, and npm.
          </p>

          <ul
            className={`${
              direction === "reverse" ? "md:justify-end" : "md:justify-start"
            } flex items-center gap-2.5 flex-wrap text-text-secondary py-2   `}
          >
            <li>
              <span className="inline-block px-2.5 py-1 bg-button-bg text-button font-semibold  rounded-md text-[12px] ">
                VS
              </span>
            </li>
            <li>
              <span className="inline-block px-2.5 py-1 bg-button-bg text-button font-semibold  rounded-md text-[12px] ">
                Code{" "}
              </span>
            </li>
            <li>
              <span className="inline-block px-2.5 py-1 bg-button-bg text-button font-semibold  rounded-md text-[12px] ">
                Sublime
              </span>
            </li>
            <li>
              {" "}
              <span className="inline-block px-2.5 py-1 bg-button-bg text-button font-semibold  rounded-md text-[12px] ">
                Text{" "}
              </span>
            </li>
            <li>
              <span className="inline-block px-2.5 py-1 bg-button-bg text-button font-semibold  rounded-md text-[12px] ">
                Atom
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section
        className={`${
          direction === "reverse" ? "order-3" : "order-3 md:order-1"
        } col-span-1  `}
      >
        <div className=" h-full grid place-content-center ">
          <ul className="flex gap-2 items-center md:flex-col">
            <li>
              <a
                href=""
                className=" flex gap-2  border-button-bg text-button hover:bg-button-bg h-fit items-center text-sm rounded-md px-2 py-1.5 border"
              >
                <span className="md:hidden">GitHub</span>
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href=""
                className=" flex gap-2  border-button-bg text-button hover:bg-button-bg h-fit items-center text-sm rounded-md px-2 py-1.5 border"
              >
                <span className="md:hidden">Preview</span>
                <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <a
                href=""
                className=" flex gap-2  border-button-bg text-button hover:bg-button-bg h-fit items-center text-sm rounded-md px-2 py-1.5 border"
              >
                <span className="md:hidden">Preview</span>
                <FaExternalLinkAlt />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}