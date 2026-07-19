type GlassCardProps = {
  children: React.ReactNode;
};

export default function GlassCard({
  children,
}: GlassCardProps) {
  return (
    <div
      className="
        relative
        overflow-hidden

        rounded-[34px]

        border
        border-[#E6B55B]/15

        bg-[#211A17]/72

        backdrop-blur-2xl

        p-10

        shadow-[0_25px_80px_rgba(0,0,0,.45)]

        transition-all
        duration-500

        hover:border-[#E6B55B]/25
      "
    >

      {/* Top Glow */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-0
          right-0
          h-px

          bg-gradient-to-r

          from-transparent

          via-[#E6B55B]/50

          to-transparent
        "
      />

      {/* Soft Ambient */}

      <div
        className="
          pointer-events-none
          absolute
          -top-24
          right-[-40px]

          w-60
          h-60

          rounded-full

          bg-[#E6B55B]/5

          blur-[80px]
        "
      />

      {/* Bottom Ambient */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-28
          left-[-30px]

          w-56
          h-56

          rounded-full

          bg-[#E6B55B]/4

          blur-[90px]
        "
      />

      {/* Content */}

      <div className="relative z-10">

        {children}

      </div>

    </div>
  );
}