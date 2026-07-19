import VideoCard from "@/components/pages/video/VideoCard";

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-[#1A1411] flex items-center justify-center px-6">
      <div className="w-full max-w-5xl">
        <VideoCard />
      </div>
    </main>
  );
}