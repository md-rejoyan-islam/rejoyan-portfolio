import Marquee from "react-fast-marquee";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
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
  );
}
