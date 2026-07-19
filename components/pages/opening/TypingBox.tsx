"use client";

import { useEffect, useState } from "react";
import { openingMessage } from "@/data/opening";

export default function TypingBox() {
  const [displayedText, setDisplayedText] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setDisplayedText(openingMessage.slice(0, index + 1));

      index++;

      if (index >= openingMessage.length) {
        clearInterval(typing);

        setTimeout(() => {
          setFinished(true);
        }, 700);
      }
    }, 22);

    return () => clearInterval(typing);
  }, []);

  return (
    <section className="mt-14">

      <div
        className="
          relative
          max-w-3xl
          mx-auto

          rounded-[28px]

          border
          border-[#E6B55B]/15

          bg-[#1F1815]/65

          backdrop-blur-xl

          px-8
          py-8

          shadow-[0_20px_60px_rgba(0,0,0,.35)]
        "
      >

        {/* Window Dots */}

        <div className="flex gap-2 mb-6">

          <span className="w-3 h-3 rounded-full bg-red-400/70" />

          <span className="w-3 h-3 rounded-full bg-yellow-400/70" />

          <span className="w-3 h-3 rounded-full bg-green-400/70" />

        </div>

        {/* Label */}

        <p
          className="
            text-xs
            uppercase
            tracking-[4px]
            text-[#8F816D]
            mb-6
          "
        >
          project_diva.exe
        </p>

        {/* Typing */}

        <div className="min-h-[250px]">

          <p
            className="
              whitespace-pre-line
              leading-9
              text-[18px]
              text-[#E3D6C1]
            "
          >
            {displayedText}

            {!finished && (
              <span className="cursor-blink text-[#E6B55B]">
                |
              </span>
            )}

          </p>

        </div>

        {/* Bottom Hint */}

        <div
          className={`
            mt-8
            transition-all
            duration-700

            ${
              finished
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }
          `}
        >

          <p
            className="
              text-sm
              italic
              text-[#9F927E]
            "
          >
            Press the shiny button below.
            <br />
            I promise nothing bad will happen.
            <span className="text-[#E6B55B]">
              {" "}Probably.
            </span>
          </p>

        </div>

      </div>

    </section>
  );
}