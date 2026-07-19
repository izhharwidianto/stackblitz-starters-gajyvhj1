"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function ContinueButton() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  function handleContinue() {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      router.push("/countdown");
    }, 800);
  }

  return (
    <div className="mt-14 flex justify-center">

      <button
        onClick={handleContinue}
        disabled={loading}
        className="
          group
          relative

          inline-flex
          items-center
          justify-center
          gap-3

          overflow-hidden

          rounded-full

          bg-[#E6B55B]

          px-10
          py-4

          font-semibold

          text-[#231A15]

          transition-all
          duration-500

          hover:scale-105
          hover:-translate-y-1
          hover:shadow-[0_18px_40px_rgba(230,181,91,.35)]

          active:scale-95

          disabled:opacity-70
          disabled:cursor-not-allowed
        "
      >

        {/* Hover Shine */}

        <span
          className="
            absolute
            inset-0

            -translate-x-full

            bg-gradient-to-r
            from-transparent
            via-white/35
            to-transparent

            transition-transform
            duration-700

            group-hover:translate-x-full
          "
        />

        {loading ? (
          <>
            <Loader2
              size={18}
              className="animate-spin relative z-10"
            />

            <span className="relative z-10">
              Preparing the next surprise...
            </span>
          </>
        ) : (
          <>
            <span className="relative z-10">
              Fine. Let's go.
            </span>

            <span
              className="
                relative
                z-10

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              →
            </span>
          </>
        )}

      </button>

      {/* Small Disclaimer */}

      {!loading && (
        <p
          className="
            absolute
            mt-20

            text-xs
            italic

            text-[#8F816D]

            animate-pulse
          "
        >
          No turning back after this.
          <span className="text-[#E6B55B]">
            {" "}Probably.
          </span>
        </p>
      )}

    </div>
  );
}