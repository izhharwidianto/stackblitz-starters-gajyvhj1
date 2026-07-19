const steps = [
  "Password",
  "Opening",
  "Countdown",
  "Quiz",
  "Gallery",
  "Video",
  "Cake",
  "Letter",
];

export default function Flow() {
  return (
    <section className="rounded-[28px] border border-[#E6B55B]/20 bg-[#211A17]/70 backdrop-blur-xl p-8">

      <div className="inline-flex rounded-full border border-[#E6B55B]/20 bg-[#3A2C22]/70 px-5 py-2 text-xs tracking-[2px] uppercase text-[#F7ECD8]">
        Alur Website
      </div>

      <div className="mt-10 flex items-center">

        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center flex-1"
          >

            <div className="flex flex-col items-center w-full">

              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#E6B55B]
                  text-[#231A15]
                  font-bold
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:shadow-[0_0_30px_rgba(230,181,91,.35)]
                "
              >
                {index + 1}
              </div>

              <span className="mt-4 text-xs text-[#CDBFA4] text-center">
                {step}
              </span>

            </div>

            {index < steps.length - 1 && (
              <div className="hidden lg:block flex-1 h-[2px] bg-[#E6B55B]/25 mx-3" />
            )}

          </div>
        ))}

      </div>

    </section>
  );
}