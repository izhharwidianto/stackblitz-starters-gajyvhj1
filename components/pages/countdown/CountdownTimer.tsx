"use client";

type Props = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export default function CountdownTimer({
  days,
  hours,
  minutes,
  seconds,
}: Props) {
  const items = [
    {
      number: days,
      label: "Days",
    },
    {
      number: hours,
      label: "Hours",
    },
    {
      number: minutes,
      label: "Minutes",
    },
    {
      number: seconds,
      label: "Seconds",
    },
  ];

  return (
    <section className="mt-20">

      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-8
          lg:gap-10
        "
      >

        {items.map((item) => (

          <div
            key={item.label}
            className="
              group

              relative

              h-[240px]
              lg:h-[265px]

              rounded-[30px]

              border
              border-[#E6B55B]/15

              bg-[#221A16]/60

              backdrop-blur-xl

              px-6

              flex
              flex-col
              items-center
              justify-center

              overflow-hidden

              transition-all
              duration-500

              hover:-translate-y-2
              hover:border-[#E6B55B]/35
              hover:bg-[#2A201B]/70
              hover:shadow-[0_15px_35px_rgba(230,181,91,.15)]
            "
          >

            {/* Hover Glow */}

            <div
              className="
                absolute
                inset-0

                rounded-[30px]

                bg-[#E6B55B]/0

                transition-all
                duration-500

                group-hover:bg-[#E6B55B]/[0.03]
              "
            />

            {/* Ambient Glow */}

            <div
              className="
                absolute

                w-32
                h-32

                rounded-full

                bg-[#E6B55B]/5

                blur-[40px]

                opacity-0

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            />

            {/* Number */}

            <h2
              className="
                relative
                z-10

                w-full

                text-center

                text-[72px]
                lg:text-[82px]

                leading-none

                font-bold

                tracking-tight

                text-[#FFF8EE]

                transition-all
                duration-500

                group-hover:scale-105
              "
            >
              {item.number}
            </h2>

            {/* Divider */}

            <div
              className="
                relative
                z-10

                flex
                items-center
                justify-center

                w-full

                my-6
              "
            >

              <div
                className="
                  h-px
                  w-12

                  bg-gradient-to-r
                  from-transparent
                  to-[#E6B55B]/50
                "
              />

              <span
                className="
                  mx-3

                  text-[#E6B55B]/80

                  text-xs

                  transition-transform
                  duration-500

                  group-hover:rotate-180
                "
              >
                ✦
              </span>

              <div
                className="
                  h-px
                  w-12

                  bg-gradient-to-l
                  from-transparent
                  to-[#E6B55B]/50
                "
              />

            </div>

            {/* Label */}

            <p
              className="
                relative
                z-10

                mt-1

                uppercase

                text-[13px]

                tracking-[6px]

                text-[#B9A88B]

                transition-colors
                duration-500

                group-hover:text-[#E6B55B]
              "
            >
              {item.label}
            </p>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="mt-14 text-center">

        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-[#E6B55B]/15

            bg-[#211915]/60

            px-7
            py-3

            text-sm

            tracking-[3px]

            text-[#CDBFA4]
          "
        >
          🌻

          <span>19 JULY 2026 • 00:00 WIB</span>

        </div>

      </div>

    </section>
  );
}