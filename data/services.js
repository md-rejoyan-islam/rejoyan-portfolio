const { FaServer } = require("react-icons/fa");
const {
  IoLogoNodejs,
  IoLogoFirebase,
  IoSearchSharp,
} = require("react-icons/io5");
const { RiNextjsFill } = require("react-icons/ri");
const { TfiServer } = require("react-icons/tfi");

export const services = [
  {
    name: "Front-End",
    description:
      "Responsive, scalable, and smooth user experiences, along with dynamic SPAs using React with Next.JS and Tailwind CSS.",
    icon: (
      <RiNextjsFill
        className=" text-[4em] text-button "
        style={{
          width: "4em",
          height: "4em",
        }}
      />
    ),
  },
  {
    name: "Backend-End",
    description:
      "Robust, scalable, high-performance, and easily maintainable RESTful and GraphQL APIs using Node.js and Express.",
    icon: (
      <IoLogoNodejs
        className="text-[65px] text-button "
        style={{
          width: "4em",
          height: "4em",
        }}
      />
    ),
  },
  {
    name: "Hosting",
    description:
      "Setup, configuration, and management of hosting environments using platforms like DigitalOcean, Vercel, and cPanel.",
    icon: (
      <TfiServer
        className="text-[65px] text-button "
        style={{
          width: "4em",
          height: "4em",
        }}
      />
    ),
  },
  {
    name: "Database Managment",
    description:
      "I ensure data integrity, security, and efficient access with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases.",
    icon: (
      <FaServer
        className="text-[65px] text-button "
        style={{
          width: "4em",
          height: "4em",
        }}
      />
    ),
  },
  {
    name: "Firebase",
    description:
      "Real-time databases, authentication, and hosting ensure secure, scalable and efficient performance with Firebase.",
    icon: (
      <IoLogoFirebase
        className="text-[65px] text-button "
        style={{
          width: "4em",
          height: "4em",
        }}
      />
    ),
  },
  {
    name: "SEO",
    description:
      "Offer comprehensive SEO services,optimization, and ongoing analysis to improve visibility and rankings.",
    icon: (
      <IoSearchSharp
        className="text-[65px] text-button "
        style={{
          width: "4em",
          height: "4em",
        }}
      />
    ),
  },
];
