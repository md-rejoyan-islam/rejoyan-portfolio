// app/LoadingWrapper.js
"use client";

import { useEffect, useState, useTransition } from "react";

import Image from "next/image";
import lootieAnimation from "./loadingAnimation.gif";

export default function LoadingWrapper({ children }) {
  const [initialLoading, setInitialLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  // Handle initial load
  useEffect(() => {
    setInitialLoading(false); // Hides loading after the initial page load is complete
  }, []);

  return (
    <>
      {(initialLoading || isPending) && (
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
      )}{" "}
      {/* Your loading component */}
      {children}
    </>
  );
}
