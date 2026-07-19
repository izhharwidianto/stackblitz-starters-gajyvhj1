"use client";

export default function CountdownHero() {
  return (
    <section className="relative text-center">

      {/* Badge */}

      <div
        className="
          inline-flex
          items-center
          gap-2

          rounded-full

          border
          border-[#E6B55B]/20

          bg-[#2B211C]/70

          px-5
          py-2

          text-sm
          tracking-[3px]

          text-[#E6B55B]
        "
      >
        ⏳ PROJECT DIVA
      </div>

      {/* Heading */}

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
        Belajar Berhitung 
        <br />
        Yukk!
      </h1>

      {/* Divider */}

      <div
        className="
          w-16
          h-px

          mx-auto
          my-8

          bg-gradient-to-r
          from-transparent
          via-[#E6B55B]/40
          to-transparent
        "
      />

      {/* Subtitle */}

      <p
        className="
          max-w-2xl

          mx-auto

          text-lg
          lg:text-xl

          leading-9

          text-[#CDBFA4]
        "
      >
        Every second...

        <br />

        brings you a little closer
        to something I've been secretly
        working on.

        <br />
        <br />

        <span className="italic text-[#E6B55B]">
          Un poquito más...
        </span>

        {" "}and it'll finally be yours.
      </p>

      {/* Tiny Copy */}

      <p
        className="
          mt-8

          text-sm

          italic

          text-[#8F816D]
        "
      >
        Jangan diskip skip yaa!

        <span className="text-[#E6B55B]">
          {" "}
        </span>

      </p>

    </section>
  );
}