"use client";

import Image from "next/image";

export default function Decorations() {
  return (
    <>
      {/* Ambient Glow */}

      <div className="effect-glow glow-1" />
      <div className="effect-glow glow-2" />
      <div className="effect-glow glow-3" />

      {/* Sparkles */}

      <span className="sparkle s1" />
      <span className="sparkle s2" />
      <span className="sparkle s3" />
      <span className="sparkle s4" />

      {/* Diamond */}

      <span className="diamond d1" />
      <span className="diamond d2" />
      <span className="diamond d3" />

      {/* Cross */}

      <span className="cross c1" />
      <span className="cross c2" />

      {/* Dust */}

      <span className="dust dust1" />
      <span className="dust dust2" />
      <span className="dust dust3" />
      <span className="dust dust4" />
      <span className="dust dust5" />

      {/* Magic Orb */}

      <span className="orb orb1" />
      <span className="orb orb2" />

      {/* Sunflower */}

      
      <Image
        src="/images/decor/sunflower/secondary.png"
        alt=""
        aria-hidden
        width={120}
        height={120}
        className="
          absolute
          bottom-[-22px]
          left-[-18px]
          opacity-60
          -rotate-[10deg]
          decor-float
          pointer-events-none
          select-none
        "
      />
    </>
  );
}