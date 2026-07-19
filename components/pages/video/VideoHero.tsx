"use client";

export default function VideoHero() {
  return (
    <section className="text-center max-w-3xl mx-auto">

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
        🎞 FOR DIVA ONLY
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
        One More Thing...

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
        Sebelum lanjut lagii..

        <br />

        

        <span className="text-[#E6B55B]">
          {" "}Aku bikin semuanya diem diem inii xixi!
        </span>

      </p>

      {/* Subtitle */}

      <p
        className="
          mt-8

          text-lg

          italic

          leading-9

          text-[#A89782]
        "
      >
        <br />

        Tidak perlu popcorn yaa...

        karena ini cuma sebentar doang xixi 🍿

      </p>

      {/* Divider */}

      <div
        className="
          w-48
          h-px

          mx-auto
          mt-12

          bg-gradient-to-r

          from-transparent
          via-[#E6B55B]/40
          to-transparent
        "
      />

    </section>
  );
}