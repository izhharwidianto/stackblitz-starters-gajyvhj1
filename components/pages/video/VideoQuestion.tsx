"use client";

type Props = {
  onFinish: () => void;
};

export default function VideoQuestion({
  onFinish,
}: Props) {
  const answers = [
    {
      emoji: "🥹",
      text: "Hepi sedikit saja",
    },
    {
      emoji: "😊",
      text: "Lumayan hepi kokk",
    },
    {
      emoji: "❤️",
      text: "Hepi sekali divaanyaa",
    },
  ];

  return (
    <section
      className="
        mt-14

        max-w-2xl
        mx-auto

        text-center
      "
    >

      {/* Divider */}

      <div
        className="
          w-40
          h-px

          mx-auto
          mb-10

          bg-gradient-to-r

          from-transparent
          via-[#E6B55B]/40
          to-transparent
        "
      />

      {/* Title */}

      <h2
        className="
          text-4xl

          font-bold

          text-[#FFF8EE]
        "
      >
        HEHEHEE

        <br />

        Apakah aku berhasil bikin diva hepiii?
      </h2>

      {/* Subtitle */}

      <p
        className="
          mt-6

          text-lg

          leading-9

          text-[#CDBFA4]
        "
      >
        
        <br />

        aku sedikit penasarann...

        <span className="text-[#E6B55B]">
          {" "}apakah divaa beneran hepii?
        </span>

      </p>

      {/* Buttons */}

      <div
        className="
          mt-12

          space-y-4
        "
      >

        {answers.map((answer) => (

          <button
            key={answer.text}
            onClick={onFinish}
            className="
              group

              w-full

              rounded-2xl

              border
              border-[#E6B55B]/15

              bg-[#241C18]/60

              px-7
              py-5

              text-left

              transition-all
              duration-300

              hover:border-[#E6B55B]/40
              hover:bg-[#2B211C]
              hover:translate-x-2
            "
          >

            <span className="text-2xl">

              {answer.emoji}

            </span>

            <span
              className="
                ml-4

                text-lg

                text-[#FFF8EE]
              "
            >

              {answer.text}

            </span>

          </button>

        ))}

      </div>

      {/* Footer */}

      <p
        className="
          mt-8

          text-sm

          italic

          text-[#8F816D]
        "
      >
        (Don't worry...

        there isn't a wrong answer.)

      </p>

    </section>
  );
}