import Image from "next/image";

type PreviewCardProps = {
  number: number;
  title: string;
};

export default function PreviewCard({
  number,
  title,
}: PreviewCardProps) {
  return (
    <div className="rounded-[24px] border border-[#E6B55B]/20 bg-[#211A17]/70 p-4">

      <div className="flex items-center gap-3 mb-4">

        <div className="w-8 h-8 rounded-full bg-[#E6B55B] text-[#241C18] flex items-center justify-center text-sm font-bold">
          {number}
        </div>

        <h3 className="uppercase text-[#F7ECD8] text-sm tracking-wide">
          {title}
        </h3>

      </div>

      <div className="rounded-2xl bg-[#2F241E] aspect-[9/16] border border-[#E6B55B]/10 flex items-center justify-center">

      {title === "Password" ? (

<div className="flex flex-col items-center justify-center h-full px-4">

  <Image
    src="/images/cat.png"
    alt="Cat"
    width={70}
    height={70}
  />

  <h4 className="mt-3 text-[#F7ECD8] text-sm font-semibold">
    Welcome
  </h4>

  <input
    type="password"
    placeholder="Password..."
    disabled
    className="mt-4 w-full rounded-xl bg-[#3A2C22] border border-[#E6B55B]/20 px-3 py-2 text-xs outline-none"
  />

  <button
    disabled
    className="mt-3 w-full rounded-xl bg-[#E6B55B] py-2 text-[#241C18] text-xs font-semibold"
  >
    Continue
  </button>

</div>

) : (

<div className="flex flex-col items-center gap-3 h-full justify-center">

  <div className="w-14 h-14 rounded-full bg-[#E6B55B]/15 border border-[#E6B55B]/20 flex items-center justify-center text-[#E6B55B] font-bold">
    {number}
  </div>

  <p className="text-[#CDBFA4] text-xs">
    Coming Soon
  </p>

</div>

)}
      </div>

    </div>
  );
}