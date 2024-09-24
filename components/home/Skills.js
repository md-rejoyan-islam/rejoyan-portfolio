import Marquee from "react-fast-marquee";
import SkillCard from "./SkillCard";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "/icons/html.svg",
    },
    {
      name: "CSS",
      icon: "/icons/css.svg",
    },
    {
      name: "SASS",
      icon: "/icons/scss.svg",
    },
    {
      name: "TAILWINDCSS",
      icon: "/icons/tailwind.svg",
    },
    {
      name: "BOOTSTRAP",
      icon: "/icons/bootstrap.svg",
    },
    {
      name: "JAVASCRIPT",
      icon: "/icons/js.svg",
    },
    {
      name: "NODEJS",
      icon: "/icons/nodejs.svg",
    },
    {
      name: "EXPRESSJS",
      icon: "/icons/express.svg",
    },
    {
      name: "GIT",
      icon: "/icons/git.svg",
    },
    {
      name: "GITHUB",
      icon: "/icons/github.svg",
    },
    {
      name: "DOCKER",
      icon: "/icons/docker.svg",
    },
    {
      name: "VSCODE",
      icon: "/icons/vscode.svg",
    },
    {
      name: "REACT",
      icon: "/icons/react.svg",
    },
    {
      name: "NEXTJS",
      icon: "/icons/nextjs.svg",
    },
    {
      name: "REDUX",
      icon: "/icons/redux.svg",
    },
    {
      name: "MATERIALUI",
      icon: "/icons/mui.svg",
    },
    {
      name: "SHADCN",
      icons: "/icons/shadcn.svg",
    },
    {
      name: "FIREBASE",
      icon: "/icons/firebase.svg",
    },
    {
      name: "PRISMA",
      icon: "/icons/prisma.svg",
    },
    {
      name: "MONGODB",
      icon: "/icons/mongodb.svg",
    },
    {
      name: "MYSQL",
      icon: "/icons/mysql.svg",
    },
  ];

  return (
    <section className="py-10 ">
      <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
        Skills
      </h2>
      <div className="pt-4">
        <Marquee
          gradient={true}
          gradientColor="#000319"
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
          // className="bg-[#0e082c62]"
        >
          {skills.map((data, index) => {
            return <SkillCard key={index} data={data} index={index} />;
          })}
        </Marquee>
      </div>
    </section>
  );
}
