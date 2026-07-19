"use client";

import { Mail, Heart } from "lucide-react";

type Props = {
  onOpen: () => void;
};

export default function LetterEnvelope({
  onOpen,
}: Props) {
  return (
    <section
      className="
        min-h-[70vh]

        flex
        items-center
        justify-center
      "
    >
      <div className="max-w-3xl mx-auto text-center">

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
          💌 ONE FINAL THING
        </div>

        {/* Title */}

        <h1
          className="
            mt-8

            text-5xl
            lg:text-6xl

            font-bold

            leading-tight

            text-[#FFF8EE]
          "
        >
          Birthday Letter

        </h1>

        {/* Copy */}

        <p
          className="
            mt-8

            text-xl

            leading-10

            text-[#D5C5A8]
          "
        >
          It just a small letter
          
          <br />

          But it's filled with

          <span className="text-[#E6B55B]">
            {" "}big birthday wishes
          </span>
         
          <br />

         Straight from the heart, just for Divaa

        </p>

        {/* Envelope */}

        <button
          onClick={onOpen}
          className="
            group

            relative

            mt-20

            w-[340px]
            h-[220px]

            transition-all
            duration-500

            hover:-translate-y-2
            hover:scale-[1.02]
          "
        >

          {/* Shadow */}

          <div
            className="
              absolute

              inset-x-8
              -bottom-6

              h-10

              rounded-full

              bg-black/40

              blur-xl

              transition-all
              duration-500

              group-hover:scale-110
            "
          />

          {/* Envelope Body */}

          <div
            className="
              absolute
              inset-0

              rounded-3xl

              border
              border-[#E6B55B]/15

              bg-gradient-to-b

              from-[#FFF4D6]
              via-[#F4E4C0]
              to-[#E8D3A4]
            "
          />

          {/* Top Fold */}

          <div
            className="
              absolute

              left-0
              right-0
              top-0

              h-[120px]

              clip-path-envelope

              bg-[#F8E8C4]

              border-b
              border-[#E2C98B]
            "
          />

          {/* Wax Seal */}

          <div
            className="
              absolute

              left-1/2
              top-1/2

              -translate-x-1/2
              -translate-y-1/2

              w-20
              h-20

              rounded-full

              bg-[#A12C32]

              shadow-[0_10px_25px_rgba(0,0,0,.25)]

              flex
              items-center
              justify-center

              transition-transform
              duration-500

              group-hover:scale-110
            "
          >
            <Heart
              size={28}
              className="fill-white text-white"
            />
          </div>

          {/* Icon */}

          <Mail
            size={34}
            className="
              absolute

              right-5
              top-5

              text-[#D8B56B]/60
            "
          />

        </button>

        {/* Hint */}

        <p
          className="
            mt-12

            text-lg

            text-[#CDBFA4]
          "
        >
          Pencet amplopnya

          <br />

          untuk membuka isinyaa

        </p>

        {/* Footer */}

        <p
          className="
            mt-6

            italic

            text-[#8F816D]
          "
        >
          Un último regalo.

          <br />

          Une dernière surprise.

          ❤️

        </p>

      </div>
    </section>
  );
}