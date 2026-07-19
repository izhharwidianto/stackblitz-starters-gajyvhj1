"use client";

import { useEffect, useState } from "react";

import GlassCard from "@/components/ui/GlassCard";

import CountdownHero from "./CountdownHero";
import CountdownTimer from "./CountdownTimer";
import CountdownProgress from "./CountdownProgress";
import CountdownButton from "./CountdownButton";
import Decorations from "./Decorations";

import { TARGET_DATE } from "@/data/countdown";

export default function CountdownCard() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    function updateCountdown() {
      const target = new Date(TARGET_DATE).getTime();
      const now = new Date().getTime();

      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });

        return;
      }

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
          (1000 * 60)
      );

      const seconds = Math.floor(
        (difference % (1000 * 60)) /
          1000
      );

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <GlassCard>

      <Decorations />

      <div className="relative z-10">

        {/* Hero */}

        <CountdownHero />

        {/* Timer */}

        <div className="mt-16">
          <CountdownTimer
            days={timeLeft.days}
            hours={timeLeft.hours}
            minutes={timeLeft.minutes}
            seconds={timeLeft.seconds}
          />
        </div>

        {/* Progress */}

        <CountdownProgress />

        {/* Button */}

        <div className="mt-16">
          <CountdownButton />
        </div>

      </div>

    </GlassCard>
  );
}