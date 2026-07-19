"use client";

export default function CakeHero() {
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
        🎂 BIRTHDAY CEREMONY
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
        Tradisi Puncak Ulang Tahun 

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
        Every birthday deserves

        <span className="text-[#E6B55B]">
          {" "}one special wish.
        </span>

        <br />

        So...

        before we reach the end,

        let's do it properly.

      </p>

      {/* Steps */}

      <div
        className="
          mt-12

          flex
          flex-col

          gap-5

          text-lg

          text-[#B9AA93]
        "
      >

        <div>

          🤍 Tutup mataa divaa

        </div>

        <div>

          🌠 Pikirkan harapan terbaik divaa

        </div>

        <div>

          💨 Boom! Tiup lilinnyaaa!!!

        </div>

      </div>

      {/* Footer */}

      <p
        className="
          mt-10

          italic

          text-[#9B8B77]
        "
      >
        Un pequeño deseo.

        <br />

        Une petite étoile.

        <br />

        Make it count.

      </p>

      {/* Divider */}

      <div
        className="
          w-52
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