"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  onFinish: () => void;
};

const subtitles = [
  "Loading a little surprise...",
  "Adding a little cariño...",
  "Almost there...",
  "Making sure everything works...",
  "Trying not to mess this up...",
];

const title = "PROJECT DIVA";

export default function LandingLoader({ onFinish }: Props) {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [subtitle, setSubtitle] = useState("Loading a little surprise...");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setSubtitle(
      subtitles[Math.floor(Math.random() * subtitles.length)]
    );

    let index = 0;

    const typing = setInterval(() => {
      setDisplayedTitle(title.slice(0, index + 1));

      index++;

      if (index >= title.length) {
        clearInterval(typing);
      }
    }, 55);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2900);

    return () => {
      clearInterval(typing);
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`
        fixed inset-0 z-50
        flex items-center justify-center
        bg-[#1A1411]
        transition-all duration-700
        ${
          fadeOut
            ? "opacity-0 scale-[1.02] pointer-events-none"
            : "opacity-100"
        }
      `}
    >
      <div className="text-center">

        {/* Glow */}

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <div className="w-[380px] h-[380px] rounded-full bg-[#E6B55B]/10 blur-[120px] glow-soft" />

        </div>

        {/* Snoopy */}

        <div className="relative w-36 h-36 mx-auto float-sunflower">

          <Image
            src="/images/decor/snoopy/main.png"
            alt="Snoopy"
            fill
            priority
            className="object-contain"
          />

        </div>

        {/* Title */}

        <h1 className="mt-10 text-4xl font-bold tracking-[8px] text-[#FFF8EE]">

          {displayedTitle}

          <span className="cursor-blink text-[#E6B55B]">
            |
          </span>

        </h1>

        {/* Subtitle */}

        <p className="mt-6 text-[#CDBFA4] text-lg">

          {subtitle}

        </p>

        {/* Bottom */}

        <p className="mt-12 text-sm italic text-[#8F816D]">

          One moment...

        </p>

      </div>
    </div>
  );
}