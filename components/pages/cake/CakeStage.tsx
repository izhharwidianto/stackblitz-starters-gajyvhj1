"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  blown: boolean;
  onBlown: () => void;
};

export default function CakeStage({
  blown,
  onBlown,
}: Props) {
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!holding || blown) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 4;

        if (next >= 100) {
          clearInterval(interval);
          onBlown();
          return 100;
        }

        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [holding, blown, onBlown]);

  useEffect(() => {
    if (!holding && !blown) {
      setProgress(0);
    }
  }, [holding, blown]);

  return (
    <section className="mt-16">

      <div className="flex flex-col items-center">

        {/* Flame */}

        <div className="relative h-24 flex items-end">

          {!blown ? (

            <>

              <div
                className="
                  absolute

                  left-1/2
                  -translate-x-1/2

                  top-0

                  w-10
                  h-10

                  rounded-full

                  bg-[#FFD44D]/30

                  blur-xl

                  animate-pulse
                "
              />

              <div
                className="
                  w-6
                  h-10

                  rounded-full

                  bg-gradient-to-b

                  from-[#FFF8A6]
                  via-[#FFD84A]
                  to-[#FF9D00]

                  animate-pulse
                "
              />

            </>

          ) : (

            <div className="text-5xl animate-pulse">

              💨

            </div>

          )}

        </div>

        {/* Candle */}

        <div
          className="
            w-[10px]
            h-28

            rounded-full

            bg-[#FFF2D8]
          "
        />

        {/* Cake */}

        <div className="relative mt-2">

          <Image
            src="/images/cake/cake.png"
            alt="Birthday Cake"
            width={340}
            height={280}
            priority
            className="
              select-none
              pointer-events-none
            "
          />

        </div>

        {/* Before Blow */}

        {!blown && (

          <>

            <p
              className="
                mt-10

                text-lg

                text-[#CDBFA4]
              "
            >
              Tap tap tombol ini

              <br />

              Dann tiup lilinnyaa

            </p>

            {/* Progress */}

            <div
              className="
                mt-8

                w-72
                h-3

                rounded-full

                bg-[#2A211C]

                overflow-hidden
              "
            >

              <div
                className="
                  h-full

                  rounded-full

                  bg-[#E6B55B]

                  transition-all
                  duration-75
                "
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

            {/* Hold Button */}

            <button
              onMouseDown={() => setHolding(true)}
              onMouseUp={() => setHolding(false)}
              onMouseLeave={() => setHolding(false)}

              onTouchStart={() => setHolding(true)}
              onTouchEnd={() => setHolding(false)}

              className="
                mt-8

                rounded-full

                bg-[#E6B55B]

                px-10
                py-5

                font-semibold

                text-[#241C18]

                transition-all

                hover:scale-105
              "
            >
              💨 Tahan yang lamaaa
            </button>

          </>

        )}

      </div>

    </section>
  );
}