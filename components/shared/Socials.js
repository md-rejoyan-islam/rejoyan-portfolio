import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub, LuTwitter } from "react-icons/lu";
export default function Socials({ direction = "row", position = "relative" }) {
  const socials = [
    {
      name: "GitHub",
      url: "mailto:",
      icon: <LuGithub />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bchiang7",
      icon: <FaInstagram />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/bchiang7",
      icon: <LuTwitter />,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/bchiang7",
      icon: <FiLinkedin />,
    },
  ];

  return (
    <div
      className={` ${position} ${
        position === "fixed" && "hidden max-xl:flex left-7 bottom-0 top-0"
      }  flex ${
        direction === "col" ? "justify-center" : "justify-center md:justify-end"
      } flex-${direction}   `}
    >
      <ul
        className={`flex flex-${direction} gap-9 items-center ${
          direction === "col" && "max-xl:gap-6 "
        } text-xl `}
      >
        {/* {socials.map((social, index) => (
          <li key={index}>
            <a href={social.url} aria-label="GitHub" target="_blank">
              {social.icon}
            </a>
          </li>
        ))} */}
        {socials.map((social, index) => (
          <li className="icons" key={index}>
            <a
              href={social.url}
              className="inline-flex items-center relative group text-button-text "
            >
              <div
                className={`layer ${
                  direction === "col" ? "w-7 h-7 " : "w-9 h-9"
                } transition-transform duration-300`}
              >
                <span className=" group-hover:shadow-[-1px_1px_3px_var(--button)] border-buttono pacity-0 group-hover:opacity-[0.2] absolute top-0 left-0 h-full w-full border rounded-[5px] transition-all duration-300 "></span>
                <span className="group-hover:shadow-[-1px_1px_3px_var(--button)] border-button opacity-0 group-hover:opacity-[0.4] transform translate-x-[5px] translate-y-[-5px] max-xl:translate-x-[3px] max-xl:translate-y-[-3px] absolute top-0 left-0 h-full w-full border rounded-[5px] transition-all duration-300 "></span>
                <span className="group-hover:shadow-[-1px_1px_3px_var(--button)] border-button opacity-0 group-hover:opacity-[0.6] transform translate-x-[10px] translate-y-[-10px] max-xl:translate-x-[6px] max-xl:translate-y-[-6px] absolute top-0 left-0 h-full w-full border rounded-[5px] transition-all duration-300 "></span>
                <span className="group-hover:shadow-[-1px_1px_3px_var(--button)] border-button opacity-0 group-hover:opacity-[0.8] transform translate-x-[15px] translate-y-[-15px] max-xl:translate-x-[9px] max-xl:translate-y-[-9px] absolute top-0 left-0 h-full w-full border rounded-[5px] transition-all duration-300 "></span>

                <span className="group-hover:shadow-[-1px_1px_3px_var(--button)] border-button   hover:opacity-100 hover:transform group-hover:translate-x-[20px] group-hover:translate-y-[-20px] max-xl:group-hover:translate-x-[12px] max-xl:group-hover:translate-y-[-12px]  fab absolute top-0 left-0 h-full w-full border rounded-[5px] transition-all duration-300 flex items-center justify-center text-[16px] leading-[18px] ">
                  {social.icon}
                </span>
              </div>

              <div className="   absolute left-1/2 bottom-[-24px] opacity-0 group-hover:opacity-100 text-[12px] font-semibold transform -translate-x-1/2 transition-all duration-300 ease-in-out">
                {social.name}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
