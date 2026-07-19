type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <div className="flex justify-center">
      <div className="inline-flex rounded-full border border-[#E6B55B]/20 bg-[#3A2C22]/70 px-5 py-2">
        <span className="text-xs tracking-[3px] uppercase text-[#F7ECD8]">
          {title}
        </span>
      </div>
    </div>
  );
}