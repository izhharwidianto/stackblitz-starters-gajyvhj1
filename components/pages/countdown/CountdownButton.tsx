"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Loader2, ArrowRight } from "lucide-react";

import { TARGET_DATE } from "@/data/countdown";

export default function CountdownButton() {
  const [loading, setLoading] = useState(false);

  const unlocked = useMemo(() => {
    return (
      new Date().getTime() >=
      new Date(TARGET_DATE).getTime()
    );
  }, []);

  function handleClick() {
    if (loading) return;

    setLoading(true);
  }

  return (
    <section className="text-center">

      {/* Copy */}

      <p
        className="
          max-w-xl
          mx-auto
          text-[#B9AA93]
          leading-8
          text-lg
        "
      >
        {unlocked ? (
          <>
            Finally...

            <br />

            <span className="italic text-[#E6B55B]">
              your surprise is waiting.
            </span>
          </>
        ) : (
          <>
            Looks like you're patient enough.

            <br />

            <span className="italic text-[#E6B55B]">
              Let's see if you're also lucky.
            </span>
          </>
        )}
      </p>

      {/* Button */}

      <div className="mt-10">

        <Link
          href="/quiz"
          onClick={handleClick}
          className="
            group
            relative

            inline-flex
            items-center
            justify-center
            gap-3

            overflow-hidden

            rounded-full

            border
            border-[#E6B55B]/20

            bg-[#E6B55B]

            px-10
            py-4

            font-semibold

            text-[#231A15]

            transition-all
            duration-500

            hover:-translate-y-1
            hover:scale-[1.04]
            hover:shadow-[0_18px_40px_rgba(230,181,91,.35)]
          "
        >

          {/* Shine */}

          <span
            className="
              absolute
              inset-0

              -translate-x-full

              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent

              transition-transform
              duration-700

              group-hover:translate-x-full
            "
          />

          {loading ? (
            <>
              <Loader2
                size={18}
                className="
                  relative
                  z-10
                  animate-spin
                "
              />

              <span className="relative z-10">
                {unlocked
                  ? "Opening your surprise..."
                  : "Checking the date..."}
              </span>
            </>
          ) : (
            <>
              <span className="relative z-10">
                {unlocked
                  ? "Open the Surprise"
                  : "Continue"}
              </span>

              <ArrowRight
                size={18}
                className="
                  relative
                  z-10

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </>
          )}

        </Link>

      </div>

      {/* Footer */}

      <p
        className="
          mt-6

          text-sm
          italic

          text-[#8F816D]
        "
      >
        {unlocked ? (
          <>
            It's finally time.

            <span className="text-[#E6B55B]">
              {" "}Happy Birthday. 🌻
            </span>
          </>
        ) : (
          <>
            Don't worry.

            <span className="text-[#E6B55B]">
              {" "}No spoilers today.
            </span>

            <br />

            Snoopy is guarding everything.
          </>
        )}
      </p>

    </section>
  );
}