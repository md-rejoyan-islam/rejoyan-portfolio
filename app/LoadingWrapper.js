// app/LoadingWrapper.js
"use client";

import { useEffect, useState, useTransition } from "react";

import Image from "next/image";
import lootieAnimation from "./public/loadingAnimation.gif";

export default function LoadingWrapper({ children }) {
  const [initialLoading, setInitialLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  // Handle initial load
  useEffect(() => {
    // wait for 1 second
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {initialLoading || isPending ? (
        <div className="fixed top-0 left-0 z-50 w-full h-full  flex items-center justify-center bg-background-secondary">
          {/* <ShowLottieFile src={lootieAnimation} loop={true} className={""} /> */}
          <Image
            width={100}
            height={100}
            src={lootieAnimation}
            alt="loading"
            className="w-96 h-96"
          />
        </div>
      ) : (
        children
      )}
    </>
  );
}
