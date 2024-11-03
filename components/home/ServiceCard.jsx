"use client";
import { useState } from "react";
import { Meteors } from "../ui/meteors";

export default function ServiceCard({ index, service }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const liElement = event.currentTarget;
    const rect = liElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setPosition({ x, y });
  };

  return (
    <div
      className={`group relative z-0  h-full bg-grid-small-black/[0.1]      overflow-hidden rounded-xl border border-project-card-border    transition-all duration-500 backdrop-blur-3xl `}
      style={{
        background: position.x
          ? `radial-gradient(500px circle at ${position.x}px ${position.y}px, var(--project-card-hover), transparent, transparent 70%)`
          : "",
      }}
      onMouseMove={(event) => handleMouseMove(event, index)}
    >
      <div className="relative z-10 bg-project-card-bg-secondar p-5 h-full overflow-hidden  ">
        <div>{service?.icon}</div>
        <div>
          <h3 className="text-text-primary text-2xl font-semibold py-2">
            {service?.name}
          </h3>
          <p className="text-text-secondary">{service?.description}</p>
        </div>
        {/* <div>
          <Image
            alt="Grid"
            loading="lazy"
            width={2880}
            height={1358}
            decoding="async"
            data-nimg={1}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-100  dark:opacity-100 dark:hover:opacity-100  group-hover:opacity-100 duration-150"
            src="/bg-pattern.webp"
          />
        </div> */}
      </div>
      <div
        className="absolute   h-4/5 w-4/5   bg-[linear-gradient(180deg,_#c6bdf8,_rgba(59,_130,_246,_0.00)_137.53%,_rgba(32,_69,_129,_0.00)_195%)] dark:bg-[linear-gradient(180deg,_#ee6eff30,_rgba(59,_130,_246,_0.00)_137.53%,_rgba(32,_69,_129,_0.00)_195%)]  opacity-0 blur-[70px]  group-hover:opacity-90"
        style={{
          transform: "translate(-50%, -50%)",
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      />
      <div className="absolute inset-[1.5px] -z-10 rounded-xl bg-project-card-bg-secondary   dark:bg-grid-white/[0.03] bg-grid-black/[0.03]  " />
      <Meteors number={20} />
    </div>
  );
}
