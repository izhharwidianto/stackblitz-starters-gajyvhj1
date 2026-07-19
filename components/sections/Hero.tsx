import PrimaryButton from "../ui/PrimaryButton";
import Image from "next/image";
import GlassCard from "../ui/GlassCard";

export default function Hero() {
  return (
    <section className="relative hero-reveal">

      <div className="hero-glow top-0 right-0 glow-soft"></div>

      <GlassCard>

        {/* Decorative Sunflower */}

        <Image
          src="/images/decor/sunflower/main.png"
          alt=""
          width={180}
          height={180}
          aria-hidden
          className="
            pointer-events-none
            absolute
            bottom-[-28px]
            right-[-35px]
            rotate-[10deg]
            opacity-85
            select-none
            z-0
            drop-shadow-[0_20px_35px_rgba(0,0,0,.25)]
          "
        />

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <div
              className="
                inline-flex
                rounded-full
                border
                border-[#E6B55B]/20
                bg-[#3A2C22]/70
                px-5
                py-2
                text-sm
                tracking-[2px]
                text-[#F7ECD8]
                backdrop-blur-xl
              "
            >
              🌻 PROJECT DIVA
            </div>

            {/* Title */}

            <h1 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight text-[#FFF8EE]">

              One Little Project.

              <br />

              Tapi banyak Kejutannya!

              <br />

              <span
                className="
                  block
                  mt-5
                  ml-2
                  text-xs
                  lg:text-sm
                  font-normal
                  italic
                  tracking-wide
                  text-[#E6B55B]/70
                  opacity-0
                  tiny-fade
                "
                style={{
                  animationDelay: "900ms",
                }}
              >
                ...hopefully.
              </span>

            </h1>

            {/* Subtitle */}

            <h2 className="script-font text-[#E6B55B] text-5xl mt-8 leading-tight">

              Made Especially For

              <br />

              Pradnya Aulia Diva

            </h2>

            {/* Languages */}

            <div className="flex gap-3 mt-8 text-[#CDBFA4] tracking-wide">

              <span>Hello</span>

              <span>•</span>

              <span>Hola</span>

              <span>•</span>

              <span>Bonjour</span>

            </div>

            {/* Description */}

            <p className="mt-10 max-w-xl text-[#CDBFA4] leading-8 text-lg">

              Made with{" "}

              <span className="text-[#E6B55B] font-medium">
                cariño
              </span>

              .

              <br />

              Et un peu de folie.

              <br />

              Just for Divaaa.

            </p>

            {/* Small Text */}

            <div className="mt-10 text-[#9F927E] text-sm leading-6">

              Udah siap beluumm?

              <br />

              <span className="italic">

                (Jalan jalaannn...)

              </span>

            </div>

            {/* Button */}

            <div className="mt-6">

              <PrimaryButton>

                Yuk Mulaii 🌻

              </PrimaryButton>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center items-center">

            {/* Glow */}

            <div className="absolute w-[420px] h-[420px] rounded-full bg-[#E6B55B]/10 blur-[100px] glow-soft" />

            {/* Circle */}

            <div
              className="
                relative
                w-[430px]
                h-[430px]
                rounded-full
                border
                border-[#E6B55B]/20
                bg-[#2B211C]
                overflow-hidden
                flex
                items-center
                justify-center
                transition-all
                duration-500
              "
            >

              <div
                className="
                  absolute
                  w-[250px]
                  h-[250px]
                  rounded-full
                  bg-white/90
                  blur-[3px]
                "
              />

              <Image
                src="/images/decor/snoopy/main.png"
                alt="Snoopy"
                width={300}
                height={300}
                priority
                className="
                  relative
                  z-10
                  w-[280px]
                  lg:w-[320px]
                  h-auto
                  object-contain
                  select-none
                  drop-shadow-[0_18px_35px_rgba(0,0,0,.25)]
                "
              />

            </div>

          </div>

        </div>

      </GlassCard>

    </section>
  );
}