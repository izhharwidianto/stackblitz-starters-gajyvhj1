import GalleryCard from "@/components/pages/gallery/GalleryCard";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#1A1411] flex items-center justify-center px-6">
      <div className="w-full max-w-6xl">
        <GalleryCard />
      </div>
    </main>
  );
}