"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type FinalQuestionProps = {
  onFinish: () => void;
};

export default function FinalQuestion({
  onFinish,
}: FinalQuestionProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 700);
    const t2 = setTimeout(() => setStep(2), 1900);
    const t3 = setTimeout(() => setStep(3), 3400);
    const t4 = setTimeout(() => setStep(4), 4800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto py-16 text-center">

      {/* Maruko */}

      <Image
        src="/images/decor/chibi/tertiary.png"
        alt=""
        width={145}
        height={145}
        aria-hidden
        className="
          mx-auto
          mb-8

          float-soft

          pointer-events-none
          select-none
        "
      />

      {/* Badge */}

      <div
        className="
          inline-flex

          rounded-full

          border
          border-[#E6B55B]/20

          bg-[#2B201A]

          px-5
          py-2

          text-xs

          tracking-[3px]

          text-[#E6B55B]
        "
      >
        🌻 FINAL QUESTION
      </div>

      {/* Title */}

      <div className="min-h-[290px] flex flex-col items-center justify-center">

        <h2
          className={`
            text-5xl

            font-bold

            text-[#FFF8EE]

            transition-all
            duration-700

            ${
              step >= 1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }
          `}
        >
          One last question...
        </h2>

        <p
          className={`
            mt-10

            text-2xl

            leading-10

            text-[#D5C5A8]

            transition-all
            duration-700

            ${
              step >= 2
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >
          Une dernière question.

          <br />

          Una última pregunta.

        </p>

        <h3
          className={`
            mt-10

            text-4xl
            lg:text-5xl

            font-semibold

            leading-tight

            text-[#E6B55B]

            transition-all
            duration-700

            ${
              step >= 3
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }
          `}
        >
          Apakah benar...

          <br />

          Diva layak untuk

          <br />

          selalu berbahagia?
        </h3>

      </div>

      {/* Button */}

      <div
        className={`
          transition-all
          duration-700

          ${
            step >= 4
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5 pointer-events-none"
          }
        `}
      >

        <button
          onClick={onFinish}
          className="
            group

            relative

            overflow-hidden

            rounded-full

            bg-[#E6B55B]

            px-14
            py-5

            text-xl
            font-semibold

            text-[#241C18]

            transition-all
            duration-300

            hover:scale-105
            hover:shadow-[0_18px_45px_rgba(230,181,91,.35)]
          "
        >

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

          <span className="relative z-10">

            ❤️ IYAA! SELALUU! ❤️

          </span>

        </button>

      </div>

      {/* Footer */}

      <p
        className={`
          mt-8

          text-sm
          italic

          text-[#9F907C]

          transition-all
          duration-700

          ${
            step >= 4
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
        (There is only one correct answer.)

      </p>

    </div>
  );
}