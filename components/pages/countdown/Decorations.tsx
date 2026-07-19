"use client";

import Image from "next/image";

export default function Decorations() {
  return (
    <>
      {/* ================= Glow ================= */}

      <div className="effect-glow glow-1" />
      <div className="effect-glow glow-2" />
      <div className="effect-glow glow-3" />

      {/* ================= Sparkles ================= */}

      <span className="sparkle s1" />
      <span className="sparkle s2" />
      <span className="sparkle s3" />
      <span className="sparkle s4" />
      <span className="sparkle s5" />
      <span className="sparkle s6" />

      {/* ================= Diamonds ================= */}

      <span className="diamond d1" />
      <span className="diamond d2" />
      <span className="diamond d3" />

      {/* ================= Cross ================= */}

      <span className="cross c1" />
      <span className="cross c2" />

      {/* ================= Floating Dust ================= */}

      <span className="dust dust1" />
      <span className="dust dust2" />
      <span className="dust dust3" />
      <span className="dust dust4" />

      {/* ================= Magic Orb ================= */}

      <span className="orb orb1" />

     
      {/* ================= Harry Peek ================= */}

      <Image
  src="/images/decor/harrypotter/tertiary.png"
  alt=""
  aria-hidden
  width={120}
height={120}

className="
absolute

top-[345px]
right-[38px]

z-30

pointer-events-none
select-none

float-soft

drop-shadow-[0_10px_20px_rgba(0,0,0,.25)]
"
/>
    </>
  );
}