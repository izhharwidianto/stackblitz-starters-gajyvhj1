"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type QuizResultProps = {
  score: number;
  total: number;
};

export default function QuizResult({
  score,
  total,
}: QuizResultProps) {
  return (
    <div className="relative max-w-3xl mx-auto py-16 text-center">

      {/* Maruko */}

      <Image
        src="/images/decor/chibi/main.png"
        alt=""
        width={150}
        height={150}
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
        🌻 QUIZ COMPLETE
      </div>

      {/* Title */}

      <h1 className="mt-8 text-5xl font-bold text-[#FFF8EE]">
        Félicitations.
      </h1>

      <p className="mt-5 text-xl leading-9 text-[#CDBFA4]">

        Divaa berhasil guyss!

        <br />

        gampang kan soal-soalnya??

        🤏

      </p>

      {/* Score */}

      <div
        className="
          mt-12

          inline-flex
          flex-col
          items-center

          rounded-[28px]

          border
          border-[#E6B55B]/15

          bg-[#241C18]/60

          px-12
          py-8
        "
      >

        <p className="text-[#B8A88D] uppercase tracking-[3px] text-sm">

          Your Score

        </p>

        <h2 className="mt-3 text-7xl font-bold text-[#E6B55B]">

          {score}

          <span className="text-[#FFF8EE]">

            / {total}

          </span>

        </h2>

      </div>

      {/* Message */}

      <div className="mt-12 space-y-6 text-[#D3C3A7] leading-9 text-lg">

        <p>

          Perfect!

          Parfaite!

          Perfecto!

        </p>

        <p>

          Selamat yaa Diva...

          <br />

          terimakasii sudaa menjawab dengan sepenuh hati!

        </p>

        <p>

          Semoga diva bahagia selalu yaa!

          🌻

        </p>

      </div>

      {/* Divider */}

      <div
        className="
          w-48
          h-px

          mx-auto
          my-12

          bg-gradient-to-r

          from-transparent
          via-[#E6B55B]/40
          to-transparent
        "
      />

      {/* Final */}

      <p
        className="
          text-[#E6B55B]

          text-xl

          italic

          leading-9
        "
      >
        Alright...

        <br />

        sudah cukup main-mainnya!

        <br />

        Yukk kita mulai dengan

        Diva's favorite memories!

      </p>

      {/* Button */}

      <Link
        href="/gallery"
        className="
          group

          relative

          mt-14

          inline-flex
          items-center
          justify-center
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

          Open Diva's Memories

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

      {/* Footer */}

      <p
        className="
          mt-8

          text-sm

          italic

          text-[#8F816D]
        "
      >
        (This is where the real story begins.)

      </p>

    </div>
  );
}