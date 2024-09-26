import dynamic from "next/dynamic";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ShowLottieFile({ loop, className, src }) {
  return (
    <DynamicLottie loop={loop} animationData={src} className={className} />
  );
}
