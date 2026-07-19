"use client";

import Link from "next/link";
import Image from "next/image";

import GlassCard from "@/components/ui/GlassCard";

export default function EndingCard() {
  return (
    <GlassCard>

      <div className="relative max-w-4xl mx-auto py-20 overflow-hidden">

        {/* Maruko */}

        <div
          className="
            absolute
            top-8
            left-8

            hidden
            lg:block

            animate-[float_5s_ease-in-out_infinite]
          "
        >
          <Image
            src="/images/decor/chibi/tertiary.png"
            alt="Maruko"
            width={150}
            height={150}
            className="drop-shadow-xl"
          />
        </div>

        {/* Harry */}

        <div
          className="
            absolute
            bottom-0
            left-0

            hidden
            lg:block

            animate-[float_6s_ease-in-out_infinite]
          "
        >
          <Image
            src="/images/decor/harrypotter/main.png"
            alt="Harry Potter"
            width={210}
            height={210}
            className="drop-shadow-2xl"
          />
        </div>

        {/* Snoopy */}

        <div
          className="
            absolute
            bottom-0
            right-0

            hidden
            lg:block

            animate-[float_7s_ease-in-out_infinite]
          "
        >
          <Image
            src="/images/decor/snoopy/secondary.png"
            alt="Snoopy"
            width={220}
            height={220}
            className="drop-shadow-2xl"
          />
        </div>

        {/* Content */}

        <div className="relative z-10 text-center">

          <div className="relative w-24 h-24 mx-auto">

            <Image
              src="/images/sunflower.png"
              alt="Sunflower"
              fill
              priority
              className="object-contain animate-pulse"
            />

          </div>

          <h1 className="mt-10 text-6xl font-bold text-[#FFF8EE]">
            Thank You,
            <br />
            Diva.
          </h1>

          <div className="w-48 h-px bg-[#E6B55B]/30 mx-auto my-12" />

          <div className="space-y-8 text-[#DCCDB3] text-xl leading-10">

            <p>
              If you've made it all the way here,
              that means you've gone through every page,
              every memory,
              every little surprise,
              and every word I put into this.
            </p>

            <p>
              I know it's just a small website,
              but I truly hope it made you smile,
              even if only for a little while.
            </p>

            <p>
              Happy Birthday once again.
              <br />
              May this year bring you
              more reasons to smile,
              beautiful memories,
              and countless good things.
            </p>

          </div>

          <div className="w-56 h-px bg-[#E6B55B]/20 mx-auto my-14" />

          <p className="italic text-[#CDBFA4] text-2xl leading-10">
            Made with love,
            <br />
            especially for you.
          </p>

          <h2 className="mt-8 text-5xl script-font text-[#E6B55B]">
            — Izhhar ❤️
          </h2>

          <p className="mt-16 tracking-[8px] text-[#8F816D] text-sm">
            THE END
          </p>

          <div className="mt-16">

            <Link
              href="/"
              className="
                inline-flex
                items-center
                justify-center

                rounded-full

                border
                border-[#E6B55B]/30

                px-10
                py-5

                text-[#FFF8EE]

                transition-all
                duration-300

                hover:bg-[#E6B55B]
                hover:text-[#241C18]
                hover:scale-105
              "
            >
              Read Everything Again 🌻
            </Link>

          </div>

        </div>

      </div>

    </GlassCard>
  );
}