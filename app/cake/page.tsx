import CakeCard from "@/components/pages/cake/CakeCard";

export default function CakePage() {
  return (
    <main className="min-h-screen bg-[#1A1411] flex items-center justify-center px-6">
      <div className="w-full max-w-5xl">
        <CakeCard />
      </div>
    </main>
  );
}