"use client";

type Props = {
  openedVideo: boolean;
  onPlay: () => void;
};

export default function VideoPlayer({
  openedVideo,
  onPlay,
}: Props) {
  return (
    <section className="mt-16">

      <div
        className="
          relative

          overflow-hidden

          rounded-[36px]

          border
          border-[#E6B55B]/15

          bg-gradient-to-br
          from-[#2A201B]
          via-[#211915]
          to-[#171210]

          p-10
        "
      >

        {/* Ambient Glow */}

        <div
          className="
            absolute

            -top-24
            -right-20

            w-72
            h-72

            rounded-full

            bg-[#E6B55B]/10

            blur-[120px]
          "
        />

        <div
          className="
            absolute

            -bottom-28
            -left-20

            w-72
            h-72

            rounded-full

            bg-[#E6B55B]/5

            blur-[120px]
          "
        />

        {/* Film */}

        <div className="relative z-10">

          <div className="text-7xl">
            🎞
          </div>

          <h2
            className="
              mt-8

              text-4xl

              font-bold

              text-[#FFF8EE]
            "
          >
            Video Kecil-Kecilan
            <br />
            
          </h2>

          <p
            className="
              mt-8

              max-w-xl
              mx-auto

              leading-9

              text-[#CDBFA4]
            "
          >
            No Hollywood budget!

            <br />

            No Nikki Freeman!

            <br />

            Just a tiny video made by someone calls "Izhhar"
            who wanted to make you smile today.

          </p>

          {/* Info */}

          <div
            className="
              mt-10

              inline-flex
              flex-wrap

              items-center
              justify-center

              gap-3
            "
          >

            <div
              className="
                rounded-full

                border
                border-[#E6B55B]/20

                bg-[#2C221D]

                px-5
                py-2

                text-sm

                text-[#D5C5A8]
              "
            >
              🎂 Birthday Edition
            </div>

            <div
              className="
                rounded-full

                border
                border-[#E6B55B]/20

                bg-[#2C221D]

                px-5
                py-2

                text-sm

                text-[#D5C5A8]
              "
            >
              🍿 Grab Snacks
            </div>

            <div
              className="
                rounded-full

                border
                border-[#E6B55B]/20

                bg-[#2C221D]

                px-5
                py-2

                text-sm

                text-[#D5C5A8]
              "
            >
              ❤️ Made For Diva
            </div>

          </div>

          {/* Button */}

          {!openedVideo && (

            <button
              onClick={onPlay}
              className="
                group

                mt-12

                inline-flex

                items-center
                gap-3

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

              ▶

              <span>

                Start Watching

              </span>

            </button>

          )}

          {openedVideo && (

            <div
              className="
                mt-12

                text-[#E6B55B]

                text-lg

                animate-pulse
              "
            >
              🌻 The movie has been opened.
              <br />
              Enjoy every second.

            </div>

          )}

        </div>

      </div>

    </section>
  );
}