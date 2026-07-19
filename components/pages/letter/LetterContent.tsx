"use client";

import { letter } from "@/data/letter";

type Props = {
  onFinish: () => void;
};

export default function LetterContent({
  onFinish,
}: Props) {
  return (
    <section
      className="
        max-w-4xl
        mx-auto

        animate-[fadeIn_.8s_ease]
      "
    >

      {/* Paper */}

      <div
        className="
          relative

          overflow-hidden

          rounded-[36px]

          border
          border-[#E8D7B0]/20

          bg-[#F8F0DF]

          p-10
          lg:p-14

          shadow-[0_30px_60px_rgba(0,0,0,.30)]
        "
      >

        {/* Paper Texture */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.04]

            bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)]

            [background-size:18px_18px]

            pointer-events-none
          "
        />

        {/* Header */}

        <div className="relative z-10">

          <p
            className="
              uppercase

              tracking-[5px]

              text-xs

              text-[#7A6548]
            "
          >
            A Letter For
          </p>

          <h2
            className="
              mt-4

              text-4xl
              lg:text-5xl

              font-bold

              text-[#4B3A2A]
            "
          >
            Pradnya Aulia Diva
          </h2>

          <div
            className="
              w-28
              h-px

              mt-8
              mb-12

              bg-[#C8B38A]
            "
          />

        </div>

        {/* Letter */}

        <pre
          className="
            relative
            z-10

            whitespace-pre-wrap

            font-sans

            text-[18px]

            leading-10

            text-[#4B3A2A]
          "
        >
          {letter}
        </pre>

      </div>

      {/* Bottom */}

      <div className="mt-10 text-center">

        <p
          className="
            text-[#B9AA93]

            italic
          "
        >
          Thank you for reading until the very end.
        </p>

        <button
          onClick={onFinish}
          className="
            mt-10

            inline-flex

            items-center
            justify-center

            rounded-full

            bg-[#E6B55B]

            px-10
            py-4

            font-semibold

            text-[#241C18]

            transition-all
            duration-300

            hover:scale-105
            hover:shadow-[0_18px_40px_rgba(230,181,91,.35)]
          "
        >
          Last page ❤️
        </button>

      </div>

    </section>
  );
}