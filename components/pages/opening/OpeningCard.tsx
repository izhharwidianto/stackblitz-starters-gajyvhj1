"use client";

import { useState } from "react";

import GlassCard from "@/components/ui/GlassCard";

import OpeningHero from "./OpeningHero";
import TypingBox from "./TypingBox";
import ContinueButton from "./ContinueButton";
import Decorations from "./Decorations";

export default function OpeningCard() {
  const [loaded] = useState(true);

  return (
    <div
      className={`
        relative
        transition-all
        duration-700

        ${
          loaded
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95"
        }
      `}
    >
      <GlassCard>

        {/* Decorations */}

        <Decorations />

        {/* Content */}

        <div className="relative z-10">

          {/* Hero */}

          <div
            className="
              opacity-0
              fade-in
            "
            style={{
              animationDelay: "150ms",
            }}
          >
            <OpeningHero />
          </div>

          {/* Divider */}

          <div
            className="
              w-20
              h-px
              mx-auto
              my-14

              bg-gradient-to-r
              from-transparent
              via-[#E6B55B]/35
              to-transparent

              opacity-0
              fade-in
            "
            style={{
              animationDelay: "600ms",
            }}
          />

          {/* Typing */}

          <div
            className="
              opacity-0
              fade-in
            "
            style={{
              animationDelay: "900ms",
            }}
          >
            <TypingBox />
          </div>

          {/* Button */}

          <div
            className="
              opacity-0
              fade-in
            "
            style={{
              animationDelay: "1800ms",
            }}
          >
            <ContinueButton />
          </div>

        </div>

      </GlassCard>
    </div>
  );
}