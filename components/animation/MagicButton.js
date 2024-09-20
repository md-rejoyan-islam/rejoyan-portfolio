"use client";

export default function MagicButton({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}) {
  return (
    <div>
      <button
        className="relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none "
        onClick={handleClick}
      >
        <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`inline-flex h-full py-2 w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl gap-3 ${otherClasses}`}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>
    </div>
  );
}
