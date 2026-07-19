"use client";

import Image from "next/image";

export default function OpeningHero() {
  return (
    <section className="relative text-center">

      {/* Greeting */}

      <div className="space-y-5">

        <p
          className="
            text-[#E6B55B]
            tracking-[6px]
            uppercase
            text-sm
            fade-in
          "
        >
          Bonjour · Hola · Hello
        </p>

        <h1
          className="
            text-5xl
            lg:text-6xl
            font-bold
            leading-tight
            text-[#FFF8EE]
          "
        >
          Hola.
          <br />
          Diva akhirnya berhasil.
        </h1>

        <p
          className="
            max-w-xl
            mx-auto
            text-lg
            leading-8
            text-[#CDBFA4]
          "
        >
          Well well well...
          <br />
          ternyata password tadi
          <span className="text-[#E6B55B]">
            {" "}bukan hasil capcipcupnya diva!!.
          </span>

          <br />
          <br />

          <span className="italic">
            Bien joué
          </span>

          {" "}..

          tapi kayanya cuma beruntung aja deh bisa nebaknyaa :p.
        </p>

      </div>

      {/* Snoopy */}

      <div
        className="
          mt-14
          flex
          justify-center
          relative
        "
      >

        <div
          className="
            absolute
            w-56
            h-56
            rounded-full
            bg-[#E6B55B]/10
            blur-[90px]
          "
        />

        <Image
          src="/images/decor/snoopy/main.png"
          alt="Snoopy"
          width={220}
          height={220}
          priority
          className="
            relative
            z-10
            object-contain
            float-soft
            drop-shadow-[0_20px_35px_rgba(0,0,0,.25)]
          "
        />

      </div>

    </section>
  );
}