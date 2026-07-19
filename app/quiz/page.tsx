import QuizCard from "@/components/pages/quiz/QuizCard";

export default function QuizPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[#1A1411]
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div className="w-full max-w-5xl">
        <QuizCard />
      </div>
    </main>
  );
}