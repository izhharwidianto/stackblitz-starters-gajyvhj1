"use client";

type EffectsProps = {
  page?:
    | "landing"
    | "password"
    | "opening"
    | "countdown"
    | "quiz"
    | "gallery"
    | "video"
    | "cake"
    | "letter"
    | "ending";
};

export default function Effects({
  page = "landing",
}: EffectsProps) {

  const sparkleMap = {
    landing: ["s1","s2","s3","s4","s5","s6"],
    password:["s1","s4"],
    opening:["s1","s2","s3","s4","s5","s6"],
    countdown:["s2","s5","s6"],
    quiz:["s1","s3","s5"],
    gallery:["s1","s2","s4","s6"],
    video:["s2","s3","s5"],
    cake:["s1","s4","s6"],
    letter:[],
    ending:["s1","s2","s3","s4","s5","s6"],
  };

  return (

    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
      "
    >

      {/* Ambient Glow */}

      <div className="effect-glow glow-1" />
      <div className="effect-glow glow-2" />
      <div className="effect-glow glow-3" />
      <div className="effect-glow glow-4" />

      {/* Original Sparkles */}

      {sparkleMap[page].map((sparkle)=>(

        <span
          key={sparkle}
          className={`sparkle ${sparkle}`}
        />

      ))}

      {/* Diamond Sparkles */}

      <span className="diamond d1" />
      <span className="diamond d2" />
      <span className="diamond d3" />
      <span className="diamond d4" />

      {/* Cross Sparkles */}

      <span className="cross c1" />
      <span className="cross c2" />
      <span className="cross c3" />

      {/* Tiny Dust */}

      <span className="dust dust1" />
      <span className="dust dust2" />
      <span className="dust dust3" />
      <span className="dust dust4" />
      <span className="dust dust5" />
      <span className="dust dust6" />

      {/* Magic Orbs */}

      <span className="orb orb1" />
      <span className="orb orb2" />

    </div>

  );
}