"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  onFinish: () => void;
};

const message = `Holaaa Diva!!

Maruko punya satu misi kecil nihh!

Dia mau memastikan kalauuu

Diva benar benar sudah siap!

Jangan panik jangan takuutt yaa!

Ini cuma pertanyaan kecil-kecilan sajaa!

(Probably.)

🌻`;

export default function QuizIntro({
  onFinish,
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [finished, setFinished] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setDisplayed(message.slice(0, index + 1));

      index++;

      if (index >= message.length) {
        clearInterval(typing);

        setFinished(true);

        setTimeout(() => {
          setFadeOut(true);
        }, 1800);

        setTimeout(() => {
          onFinish();
        }, 2500);
      }
    }, 28);

    return () => clearInterval(typing);
  }, [onFinish]);

  return (
    <div
      className={`
        transition-all
        duration-700

        ${
          fadeOut
            ? "opacity-0 scale-95"
            : "opacity-100 scale-100"
        }
      `}
    >
      <div
        className="
          relative

          overflow-hidden

          rounded-[36px]

          border
          border-[#E6B55B]/15

          bg-[#211A17]/70

          backdrop-blur-2xl

          px-14
          py-16

          text-center
        "
      >

        {/* Glow */}

        <div className="effect-glow glow-2" />
        <div className="effect-glow glow-3" />

        {/* Maruko */}

        <Image
          src="/images/decor/chibi/tertiary.png"
          alt=""
          width={170}
          height={170}
          aria-hidden
          className="
            mx-auto

            mb-8

            float-soft

            select-none
            pointer-events-none
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
          👧 QUIZ INTRO
        </div>

        {/* Title */}

        <h1
          className="
            mt-8

            text-5xl

            font-bold

            text-[#FFF8EE]
          "
        >
          Sebelum kita mulaii...
        </h1>

        {/* Typing */}

        <div
          className="
            mt-10

            min-h-[250px]

            flex
            items-center
            justify-center
          "
        >
          <p
            className="
              max-w-2xl

              whitespace-pre-line

              text-xl

              leading-10

              text-[#D5C5A8]
            "
          >
            {displayed}

            {!finished && (
              <span className="cursor-blink text-[#E6B55B]">
                |
              </span>
            )}
          </p>
        </div>

        {/* Footer */}

        <div
          className={`
            transition-all
            duration-700

            ${
              finished
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }
          `}
        >

          <div
            className="
              w-40
              h-px

              mx-auto
              mb-6

              bg-gradient-to-r

              from-transparent

              via-[#E6B55B]/40

              to-transparent
            "
          />

          <p
            className="
              text-[#A99882]

              italic
            "
          >
            Bonjour • Hola • Hello

            <br />

            Let's start something fun.
          </p>

        </div>

      </div>
    </div>
  );
}