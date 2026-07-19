"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import GlassCard from "@/components/ui/GlassCard";
import { galleryImages } from "@/data/gallery";

export default function GalleryCard() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  function closeModal() {
    setSelectedIndex(null);
  }

  function previousImage() {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1
    );
  }

  function nextImage() {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1
    );
  }

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") previousImage();
      if (e.key === "ArrowRight") nextImage();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <>
      <GlassCard>
        <div className="max-w-6xl mx-auto py-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex rounded-full border border-[#E6B55B]/20 bg-[#2A201B] px-5 py-2 text-xs tracking-[3px] text-[#E6B55B]">
              🌻 HAPPY BIRTHDAY DIVA
            </div>

            <h1 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight text-[#FFF8EE]">
              A Little Tribute.
              <br />
              Untuk Diva!
            </h1>

            <p className="mt-8 text-xl leading-10 text-[#D5C5A8]">
              Hihii disinii...
              <br />
              Aku mau nunjukinn
              <span className="text-[#E6B55B]"> beberapa versi dari divaa!</span>
            </p>

            <p className="mt-5 italic text-[#9F907C]">
              Feliz cumpleaños • Joyeux anniversaire ! • Happy Birthday 🌻
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((photo, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-[3/4] overflow-hidden rounded-[30px] border border-white/5"
              >
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

                <div className="absolute bottom-0 w-full p-6 text-left">
                  <h3 className="text-xl font-semibold text-white">
                    {photo.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#E6B55B]">
                    Tap to open ✨
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="mb-8 text-lg leading-8 text-[#CDBFA4]">
              Masih ada beberapa halaman.
              <br />
              Surprise utamanya masih dijaga snoopy!
            </p>

            <Link
              href="/video"
              className="group inline-flex items-center gap-3 rounded-full bg-[#E6B55B] px-10 py-5 font-semibold text-[#231A15] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_45px_rgba(230,181,91,.35)]"
            >
              Mau surprise lagi dongg!
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </GlassCard>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#130F0D]/95 backdrop-blur-xl">
          <button
            onClick={closeModal}
            className="absolute right-8 top-8 text-4xl text-white transition hover:text-[#E6B55B]"
          >
            ✕
          </button>

          <button
            onClick={previousImage}
            className="absolute left-8 text-5xl text-white"
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            className="absolute right-8 text-5xl text-white"
          >
            ›
          </button>

          <div className="w-full max-w-5xl px-10">
            <div className="relative aspect-[3/4]">
              <Image
                src={galleryImages[selectedIndex].image}
                alt={galleryImages[selectedIndex].title}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-10 text-center">
              <h2 className="text-4xl font-bold text-white">
                {galleryImages[selectedIndex].title}
              </h2>

              <p className="mt-3 text-[#E6B55B]">
                {galleryImages[selectedIndex].date}
              </p>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-[#DDD1C0]">
                {galleryImages[selectedIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
