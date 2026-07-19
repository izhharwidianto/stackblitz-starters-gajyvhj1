import CountdownCard from "@/components/pages/countdown/CountdownCard";

export default function CountdownPage() {
  return (
    <main className="min-h-screen bg-[#1A1411] flex items-center justify-center px-6">
      <div className="w-full max-w-5xl">
        <CountdownCard />
      </div>
    </main>
  );
}