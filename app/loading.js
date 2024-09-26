"use client";
import ShowLottieFile from "@/components/ShowLottieFile";
import animation from "../public/loading.json";

export default function Loading() {
  return (
    <div className="w-full h-full grid place-content-center">
      <ShowLottieFile loop={true} src={animation} className={"w-[100%]"} />
    </div>
  );
}
