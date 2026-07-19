"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function LetterEnding() {
  return (
    <section
      className="
        relative
        min-h-[70vh]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Maruko */}

      <div
        className="
          absolute
          top-10
          left-6

          hidden
          lg:block

          animate-[float_5s_ease-in-out_infinite]
        "
      >
        <Image
          src="/images/decor/chibi/main.png"
          alt="Maruko"
          width={170}
          height={170}
          className="drop-shadow-2xl"
        />
      </div>

      {/* Harry Potter */}

      <div
        className="
          absolute
          bottom-6
          left-4

          hidden
          lg:block

          animate-[float_6s_ease-in-out_infinite]
        "
      >
        <Image
          src="/images/decor/harrypotter/main.png"
          alt="Harry Potter"
          width={220}
          height={220}
          className="drop-shadow-2xl"
        />
      </div>

      {/* Snoopy */}

      <div
        className="
          absolute
          bottom-4
          right-2

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

      <div className="max-w-3xl mx-auto text-center relative z-10">

        {/* Icon */}

        <div
          className="
            inline-flex
            items-center
            justify-center

            w-24
            h-24

            rounded-full

            border
            border-[#E6B55B]/20

            bg-[#2A201B]

            text-[#E6B55B]

            animate-pulse
          "
        >
          <Heart
            size={42}
            className="fill-current"
          />
        </div>

        {/* Title */}

        <h1
          className="
            mt-10
            text-5xl
            lg:text-6xl
            font-bold
            leading-tight
            text-[#FFF8EE]
          "
        >
          Thank You,
          <br />
          Diva.
        </h1>

        {/* Copy */}

        <p
          className="
            mt-10
            text-xl
            leading-10
            text-[#D5C5A8]
          "
        >
          Kalau Divaa sampai baca ini, berarti Divaa sudaa menyelesaikan semua halamannya, semua kenangannya, dann semua kejutan-kejutan kecilnya!!

          <br />
          <br />

          Jujur, awalnya aku cuma pengen website kecil kecilan ini bikin ulang tahun Divaa terasa lebih hangat, lebih bahagia dikit, dan jadi salah satu kado ulang tahun yang beneran Divaa ingat!! 
        </p>

        {/* Divider */}

        <div
          className="
            w-52
            h-px

            mx-auto
            my-12

            bg-gradient-to-r
            from-transparent
            via-[#E6B55B]/40
            to-transparent
          "
        />

        {/* Signature */}

        <p
          className="
            text-lg
            italic
            leading-9
            text-[#B9AA93]
          "
        >
          Made with love,

          <br />

          especially for you.
        </p>

        <h2
          className="
            mt-5
            text-3xl
            font-semibold
            text-[#E6B55B]
          "
        >
          — Izhhar ❤️
        </h2>

        <p
          className="
            mt-12
            text-sm
            tracking-[3px]
            uppercase
            text-[#8F816D]
          "
        >
          The End
        </p>

        <div className="mt-14">

          <Link
            href="/"
            className="
              inline-flex
              items-center
              justify-center

              rounded-full

              border
              border-[#E6B55B]/25

              bg-[#2A201B]

              px-8
              py-4

              font-medium

              text-[#E6B55B]

              transition-all
              duration-300

              hover:scale-105
              hover:bg-[#32261F]
            "
          >
            Read Everything Again 🌻
          </Link>

        </div>

      </div>

    </section>
  );
}