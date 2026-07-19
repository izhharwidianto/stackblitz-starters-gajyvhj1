"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function VideoContinue() {
  return (
    <section
      className="
        mt-16

        max-w-2xl
        mx-auto

        text-center
      "
    >

      {/* Divider */}

      <div
        className="
          w-48
          h-px

          mx-auto
          mb-10

          bg-gradient-to-r

          from-transparent
          via-[#E6B55B]/40
          to-transparent
        "
      />

      {/* Badge */}

      <div
        className="
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
        🌻 THANK YOU
      </div>

      {/* Title */}

      <h2
        className="
          mt-8

          text-5xl

          font-bold

          leading-tight

          text-[#FFF8EE]
        "
      >
        Aku hepii

        <br />

        Diva sudah menontonnyaa
      </h2>

      {/* Copy */}

      <p
        className="
          mt-8

          text-xl

          leading-10

          text-[#D5C5A8]
        "
      >
        Video itu jadi kado tambahan yaa

        <br />

        kado utamanya ada di kamar divaa!!
        semogaa diva tetap sukaa :)

      </p>

      <p
        className="
          mt-8

          text-lg

          italic

          leading-9

          text-[#A99882]
        "
      >
        Tapii...

        <br />

        kita masih belum selesai looo

        <br />

        Masih ada satu lagii

        yang sudah menunggu divaa

        🎂

      </p>

      {/* Button */}

      <div className="mt-14">

        <Link
          href="/cake"
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

            text-[#231A15]

            transition-all
            duration-300

            hover:scale-105
            hover:shadow-[0_20px_45px_rgba(230,181,91,.35)]
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

            Apa selanjutnyaa yaa

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
        (Trust me...

        the next page smells a lot sweeter.)

      </p>

    </section>
  );
}