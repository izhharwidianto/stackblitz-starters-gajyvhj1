import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href?: string;
};

export default function PrimaryButton({
  children,
  href = "/password",
}: Props) {
  return (
    <Link
      href={href}
      className="
      inline-flex
      items-center
      justify-center
      gap-2
      mt-10
      rounded-full
      bg-[#E6B55B]
      px-8
      py-4
      text-[#231A15]
      font-semibold
      transition-all
      duration-300
      hover:scale-105
      hover:-translate-y-1
      hover:shadow-[0_15px_40px_rgba(230,181,91,.35)]
      active:scale-95
      "
    >
      {children}
    </Link>
  );
}