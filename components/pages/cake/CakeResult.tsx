"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CakeResult() {
  return (
    <section
      className="
        mt-20

        max-w-3xl
        mx-auto

        text-center

        animate-in
        fade-in
        duration-700
      "
    >

      {/* Sparkle */}

      <div className="text-7xl">

        ✨

      </div>

      {/* Badge */}

      <div
        className="
          mt-8

          inline-flex

          rounded-full

          border
          border-[#E6B55B]/20

          bg-[#2A201B]

          px-5
          py-2

          text-xs

          tracking-[3px]

          text-[#E6B55B]
        "
      >
        🎉 HAPPY BIRTHDAY
      </div>

      {/* Title */}

      <h2
        className="
          mt-8

          text-5xl
          lg:text-6xl

          font-bold

          leading-tight

          text-[#FFF8EE]
        "
      >
        Pradnya
        <br />
        Aulia Diva

      </h2>

      {/* Wish */}

      <p
        className="
          mt-10

          text-xl

          leading-10

          text-[#D5C5A8]
        "
      >
        I truly hope

        <span className="text-[#E6B55B]">
          {" "}this year
        </span>

         brings you

        <br />

        much more reasons to smile,

        <br />

        fills your days with beautiful memories,

        <br />

        and lets every prayer you've whispered come true, one by one, at just the right time. ✨

      </p>

      {/* Divider */}

      <div
        className="
          w-56
          h-px

          mx-auto
          my-12

          bg-gradient-to-r

          from-transparent
          via-[#E6B55B]/40
          to-transparent
        "
      />

      {/* Mini Message */}

      <p
        className="
          text-lg

          italic

          leading-9

          text-[#A99882]
        "
      >
        Un pequeño deseo.

        <br />

        Une petite prière.

        <br />

        Happy Birthday,

        Diva.

        ❤️

      </p>

      {/* Button */}

      <div className="mt-14">

        <Link
          href="/letter"
          className="
            group

            relative

            inline-flex

            items-center
            gap-3

            overflow-hidden

            rounded-full

            bg-[#E6B55B]

            px-10
            py-5

            font-semibold

            text-[#241C18]

            transition-all
            duration-300

            hover:scale-105
            hover:shadow-[0_18px_45px_rgba(230,181,91,.35)]
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

          <span className="relative z-10">

            Wah masih lanjut apalagi inii

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

        </Link>

      </div>

      {/* Footer */}

      <p
        className="
          mt-8

          text-sm

          italic

          text-[#8F816D]
        "
      >
        (The final page is waiting for you.)

      </p>

    </section>
  );
}