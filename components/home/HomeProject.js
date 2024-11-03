import Image from "next/image";
import photo from "../../app/public/images/proj.png";
export default function HomeProject({ direction, project }) {
  return (
    <article className=" grid lg:grid-cols-7  rounded-lg items-center ">
      <section
        className={`${
          direction === "reverse" ? "order-1" : "order-1 lg:order-3"
        } col-span-3`}
      >
        <figure
          className={`${
            direction === "reverse" ? "lg:-mr-16" : "lg:-ml-16"
          } lg:bg-green-300/10 lg:scale-x-[1.01] lg:hover:translate-y-0  hover:-translate-y-2  rounded-xl border  p-1 lg:p-0 dark:border-[#00c6e496] border-[#0088ff19] lg:border-4`}
        >
          <Image
            width={500}
            height={400}
            src={project?.banner || photo}
            alt={project.name}
            className="w-full h-full rounded-lg  dark:opacity-70"
          />
        </figure>
      </section>
      <section
        className={`${
          direction === "reverse"
            ? "order-2 lg:text-right"
            : "order-2 lg:text-left "
        } z-10 grid items-center w-full text-left  col-span-3  py-2`}
      >
        <div className="w-full block">
          <h3 className="font-semibold text-2xl   text-text-primary py-2  block w-full">
            {project?.name}
          </h3>

          <p className=" rounded-md text-text-secondary backdrop-blur-sm dark:backdrop-blur-lg  lg:text-text-primary py-2 lg:px-4 h-full lg:bg-project-card-bg-secondar  md:bg-[#593cea0a] border-[#eaebed] dark:border-none dark:bg-[#2d467639] md:shadow-sm md:border  ">
            {project?.description}
          </p>

          <ul
            className={`${
              direction === "reverse" ? "lg:justify-end" : "lg:justify-start"
            } flex items-center gap-2.5 flex-wrap text-text-secondary py-2   `}
          >
            {project?.techStack?.map((tech, index) => (
              <li key={index}>
                <span className="inline-block px-2.5 py-1 bg-button-bg text-button font-semibold  rounded-md text-[12px] ">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section
        className={`${
          direction === "reverse" ? "order-3" : "order-3 lg:order-1"
        } col-span-1  `}
      >
        <div className=" h-full grid place-content-center ">
          <ul className="flex gap-2 items-center lg:flex-col">
            {project?.links?.map((link, index) => (
              <li key={index}>
                <a
                  href={link?.href}
                  className=" flex gap-2  border-button-bg text-button hover:bg-button-bg h-fit items-center text-sm lg:text-2xl rounded-md px-2 py-1.5 border"
                >
                  <span className="lg:hidden">{link?.name}</span>
                  {link?.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
