"use client";

import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

import GlassCard from "@/components/ui/GlassCard";
import Effects from "@/components/effects/Effects";
import { WEBSITE_PASSWORD } from "@/data/config";

export default function PasswordCard() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  function handleContinue() {
    if (loading) return;

    if (password.trim() !== WEBSITE_PASSWORD) {
      setError("Even Snoopy said no. 🐶");
      setShake(true);

      setTimeout(() => {
        setShake(false);
      }, 450);

      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      router.push("/opening");
    }, 900);
  }

  return (
    <GlassCard>

      <Effects page="password" />

      <div
        className={`
          relative
          z-10
          max-w-md
          mx-auto
          py-8
          text-center
          transition-all
          ${shake ? "animate-pulse" : ""}
        `}
      >

        {/* Title */}

        <h1 className="text-5xl font-bold tracking-tight text-[#FFF8EE]">

          Cek Identitas Dulu!!!

        </h1>

        {/* Subtitle */}

        <p className="mt-7 text-lg leading-8 text-[#CDBFA4]">

          Buat memastikan

          <br />

          Ini Diva beneran atau palsu.

        </p>

        {/* Joke */}

        <p className="mt-3 text-sm italic text-[#9E8F79]">

          (atau hacker yang menyamar aaa.)

        </p>

        {/* Divider */}

        <div
          className="
            mx-auto
            mt-10
            mb-10
            h-px
            w-24
            bg-gradient-to-r
            from-transparent
            via-[#E6B55B]/40
            to-transparent
          "
        />

        {/* Input */}

        <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleContinue();
              }
            }}
            placeholder="Type the magic word..."
            className="
              w-full
              rounded-2xl
              border
              border-[#E6B55B]/15
              bg-[#2B211C]/70
              px-5
              py-4
              pr-14
              text-[#FFF8EE]
              placeholder:text-[#8E806A]
              outline-none
              transition-all
              duration-300
              focus:border-[#E6B55B]/50
              focus:bg-[#30241F]
              focus:shadow-[0_0_25px_rgba(230,181,91,.15)]
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-[#B8AA94]
              hover:text-[#E6B55B]
              transition-colors
            "
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>

        {/* Error */}

        <div className="h-7 mt-4">

          {error && (

            <p className="text-sm text-red-400">

              {error}

            </p>

          )}

        </div>

        {/* Button */}

        <button
          onClick={handleContinue}
          disabled={loading}
          className="
            mt-5
            w-full
            rounded-full
            bg-[#E6B55B]
            py-4
            font-semibold
            text-[#231A15]
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-[0_0_35px_rgba(230,181,91,.35)]
            active:scale-[0.99]
            disabled:opacity-60
            flex
            items-center
            justify-center
            gap-2
          "
        >

          {loading ? (
            <>
              <Loader2
                className="animate-spin"
                size={18}
              />
              Unlocking...
            </>
          ) : (
            "Unlock 🌻"
          )}

        </button>

      </div>

    </GlassCard>
  );
}