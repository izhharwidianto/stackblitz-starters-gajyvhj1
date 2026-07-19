"use client";

import { useEffect, useState } from "react";

import Hero from "@/components/sections/Hero";
import LandingLoader from "@/components/loading/LandingLoader";

export default function Home() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("project-diva-loader");

    if (hasVisited) {
      setLoadingFinished(true);
    }
  }, []);

  function handleLoaderFinish() {
    sessionStorage.setItem("project-diva-loader", "true");
    setLoadingFinished(true);
  }

  return (
    <>
      {!loadingFinished && (
        <LandingLoader onFinish={handleLoaderFinish} />
      )}

      <main
        className={`
          min-h-screen
          px-6
          py-10
          lg:px-20
          transition-all
          duration-700
          ${
            loadingFinished
              ? "opacity-100 scale-100"
              : "opacity-0 scale-[1.01]"
          }
        `}
      >
        <div className="max-w-7xl mx-auto">
          <Hero />
        </div>
      </main>
    </>
  );
}