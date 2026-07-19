"use client";

export default function CountdownProgress() {
  return (
    <section className="mt-14 text-center">

      <p
        className="
          text-sm
          uppercase
          tracking-[4px]
          text-[#8F816D]
        "
      >
        Almost There
      </p>

      {/* Progress */}

      <div
        className="
          relative

          mt-5

          mx-auto

          w-full
          max-w-md

          h-[2px]

          rounded-full

          bg-[#E6B55B]/10
        "
      >

        {/* Fill */}

        <div
          className="
            absolute
            left-0
            top-0

            h-full

            w-[72%]

            rounded-full

            bg-gradient-to-r
            from-[#E6B55B]
            to-[#F8D98A]
          "
        />

        {/* Glow Dot */}

        <div
          className="
            absolute

            left-[72%]
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            w-4
            h-4

            rounded-full

            bg-[#FFF6D8]

            shadow-[0_0_20px_rgba(230,181,91,.55)]

            animate-pulse
          "
        />

      </div>

      <p
        className="
          mt-5

          max-w-lg

          mx-auto

          leading-7

          text-[#B9AA93]
        "
      >
        You're getting closer...

        <br />

        <span className="italic text-[#E6B55B]">
          every second counts.
        </span>

      </p>

    </section>
  );
}