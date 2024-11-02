import { TextShimmer } from "../ui/TextShimmer";

export default function TextShimmerButton({
  duration,
  icon,
  title,
  children,
  width,
}) {
  return (
    <button
      className={`flex group  justify-start font-semibold   uppercase py-2 px-3.5 rounded-md items-center text-[#fff] bg-[#583cea]   dark:bg-[#12133583] gap-2.5 ${
        icon && "transition-all duration-300 "
      }${width ? width : "w-full"}
          `}
    >
      <TextShimmer duration={duration || 1.2}>{title}</TextShimmer>
      {children}
    </button>
  );
}
