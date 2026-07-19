"use client";

import { useState } from "react";

import GlassCard from "@/components/ui/GlassCard";
import { quizQuestions } from "@/data/quiz";

import QuizIntro from "./QuizIntro";
import FinalQuestion from "./FinalQuestion";
import QuizResult from "./QuizResult";

export default function QuizCard() {
  const normalQuestionCount = quizQuestions.length - 1;

  const [showIntro, setShowIntro] = useState(true);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const [showCorrect, setShowCorrect] = useState(false);
  const [fade, setFade] = useState(false);

  const [showFinalQuestion, setShowFinalQuestion] =
    useState(false);

  const [finished, setFinished] = useState(false);

  const question = quizQuestions[currentQuestion];

  function handleAnswer(index: number) {
    if (selected !== null) return;

    setSelected(index);

    let isCorrect = false;

    // Semua soal selain nomor 3 dianggap benar

    if (
      currentQuestion === 0 ||
      currentQuestion === 1 ||
      currentQuestion === 3
    ) {
      isCorrect = true;
    } else {
      isCorrect = index === question.correct;
    }

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setShowCorrect(true);

    setTimeout(() => {
      setFade(true);
    }, 600);

    setTimeout(() => {
      if (
        currentQuestion + 1 >=
        normalQuestionCount
      ) {
        setShowFinalQuestion(true);
      } else {
        setCurrentQuestion((prev) => prev + 1);

        setSelected(null);

        setShowCorrect(false);

        setFade(false);
      }
    }, 1100);
  }

  function finishFinalQuestion() {
    setScore((prev) => prev + 1);

    setFinished(true);
  }

  /* ==========================
     QUIZ INTRO
  ========================== */

  if (showIntro) {
    return (
      <QuizIntro
        onFinish={() => setShowIntro(false)}
      />
    );
  }

  /* ==========================
     QUIZ RESULT
  ========================== */

  if (finished) {
    return (
      <GlassCard>
        <QuizResult
          score={score}
          total={quizQuestions.length}
        />
      </GlassCard>
    );
  }

  /* ==========================
     FINAL QUESTION
  ========================== */

  if (showFinalQuestion) {
    return (
      <GlassCard>
        <FinalQuestion
          onFinish={finishFinalQuestion}
        />
      </GlassCard>
    );
  }

  /* ==========================
     NORMAL QUIZ
  ========================== */

  return (
    <GlassCard>
      <div
        className={`
          max-w-3xl
          mx-auto

          transition-all
          duration-500

          ${
            fade
              ? "opacity-0 translate-y-5"
              : "opacity-100"
          }
        `}
      >
        {/* Progress */}

        <div className="flex justify-between text-sm text-[#CDBFA4]">
          <span>
            Question {currentQuestion + 1}
          </span>

          <span>
            {quizQuestions.length}
          </span>
        </div>

        <div className="mt-3 h-2 rounded-full bg-[#2B211C] overflow-hidden">
          <div
            className="h-full bg-[#E6B55B] transition-all duration-700"
            style={{
              width: `${
                ((currentQuestion + 1) /
                  quizQuestions.length) *
                100
              }%`,
            }}
          />
        </div>

        {/* Question */}

        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold text-[#FFF8EE] whitespace-pre-line">
            {question.question}
          </h2>
        </div>

        {/* Correct */}

        <div className="h-10 mt-6 text-center">
          {showCorrect && (
            <p className="text-[#E6B55B] font-semibold text-xl animate-pulse">
              Correct 🌻
            </p>
          )}
        </div>

        {/* Options */}

        <div className="mt-8 space-y-5">
          {question.options.map((option, index) => {
            const active = selected === index;

            return (
              <button
                key={option}
                onClick={() => handleAnswer(index)}
                disabled={selected !== null}
                className={`
                  w-full

                  rounded-2xl

                  border

                  p-5

                  text-left
                  text-lg

                  transition-all
                  duration-300

                  ${
                    active
                      ? "bg-[#E6B55B] text-[#241C18] border-[#E6B55B] scale-[1.02]"
                      : "bg-[#241C18]/60 border-[#E6B55B]/20 text-[#FFF8EE] hover:border-[#E6B55B] hover:translate-x-2"
                  }
                `}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </GlassCard>
  );
}