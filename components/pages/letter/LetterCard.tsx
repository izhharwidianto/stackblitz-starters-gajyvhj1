"use client";

import { useState } from "react";

import GlassCard from "@/components/ui/GlassCard";

import LetterEnvelope from "./LetterEnvelope";
import LetterContent from "./LetterContent";
import LetterEnding from "./LetterEnding";

export default function LetterCard() {
  const [opened, setOpened] = useState(false);
  const [finished, setFinished] = useState(false);

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

        {/* Envelope */}

        {!opened && (
          <LetterEnvelope
            onOpen={() => setOpened(true)}
          />
        )}

        {/* Letter */}

        {opened && !finished && (
          <LetterContent
            onFinish={() => setFinished(true)}
          />
        )}

        {/* Ending */}

        {finished && (
          <LetterEnding />
        )}

      </div>
    </GlassCard>
  );
}