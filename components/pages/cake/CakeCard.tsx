"use client";

import { useState } from "react";

import GlassCard from "@/components/ui/GlassCard";

import CakeHero from "./CakeHero";
import CakeStage from "./CakeStage";
import CakeResult from "./CakeResult";

export default function CakeCard() {
  const [blown, setBlown] = useState(false);

  function handleBlown() {
    setBlown(true);
  }

  return (
    <GlassCard>

      <div
        className="
          relative

          max-w-5xl
          mx-auto

          py-10
        "
      >

        {/* Hero */}

        <CakeHero />

        {/* Cake Stage */}

        <CakeStage
          blown={blown}
          onBlown={handleBlown}
        />

        {/* Result */}

        {blown && (
          <CakeResult />
        )}

      </div>

    </GlassCard>
  );
}