"use client"

import { useState } from "react"
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react"

const questions = [
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Multi Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], answer: 0 },
  { question: "Which CSS property is used to change text color?", options: ["font-color", "text-color", "color", "foreground"], answer: 2 },
  { question: "What is the correct syntax for a JavaScript function?", options: ["function = myFunc()", "function myFunc()", "def myFunc()", "func myFunc()"], answer: 1 },
  { question: "Which company developed React?", options: ["Google", "Apple", "Facebook (Meta)", "Microsoft"], answer: 2 },
  { question: "What does API stand for?", options: ["Application Programming Interface", "Advanced Program Integration", "Application Process Interface", "Automated Programming Interface"], answer: 0 },
  { question: "Which hook is used for state management in React?", options: ["useEffect", "useContext", "useState", "useReducer"], answer: 2 },
  { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], answer: 1 },
  { question: "Which method converts JSON to a JavaScript object?", options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toObject()"], answer: 1 },
]

export function QuizApp() {
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [answered, setAnswered] = useState(false)

  const handleAnswer = (index: number) => {
    if (answered) return
    setSelected(index)
    setAnswered(true)
    if (index === questions[currentQ].answer) {
      setScore((s) => s + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const restart = () => {
    setCurrentQ(0)
    setScore(0)
    setSelected(null)
    setShowResult(false)
    setAnswered(false)
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-2xl font-display font-bold gradient-text mb-6">Quiz Complete!</h3>
        <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
          <p className="text-6xl font-display font-bold text-foreground mb-2">{percentage}%</p>
          <p className="text-muted-foreground mb-2">
            You got <span className="text-foreground font-semibold">{score}</span> out of <span className="text-foreground font-semibold">{questions.length}</span> correct
          </p>
          <p className={`text-lg font-semibold mb-6 ${percentage >= 70 ? "text-green-400" : percentage >= 40 ? "text-yellow-400" : "text-red-400"}`}>
            {percentage >= 70 ? "Excellent!" : percentage >= 40 ? "Good effort!" : "Keep practicing!"}
          </p>
          <button
            type="button"
            onClick={restart}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-gradient text-foreground font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      </div>
    )
  }

  const q = questions[currentQ]

  return (
    <div className="max-w-lg mx-auto">
      <h3 className="text-2xl font-display font-bold gradient-text text-center mb-2">Quiz App</h3>
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-muted-foreground">Question {currentQ + 1}/{questions.length}</span>
        <span className="text-sm text-foreground font-semibold">Score: {score}</span>
      </div>

      <div className="w-full bg-muted rounded-full h-2 mb-6">
        <div
          className="h-full rounded-full btn-gradient transition-all duration-300"
          style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 mb-4">
        <p className="text-foreground font-semibold text-lg">{q.question}</p>
      </div>

      <div className="flex flex-col gap-3 mb-6">
        {q.options.map((option, i) => {
          let style = "bg-primary/5 border-primary/20 hover:border-primary/40"
          if (answered) {
            if (i === q.answer) style = "bg-green-500/10 border-green-500/40"
            else if (i === selected) style = "bg-red-500/10 border-red-500/40"
          } else if (i === selected) {
            style = "bg-primary/10 border-primary/40"
          }

          return (
            <button
              type="button"
              key={option}
              onClick={() => handleAnswer(i)}
              className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${style} ${!answered ? "cursor-pointer" : "cursor-default"}`}
            >
              <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-semibold text-foreground flex-shrink-0">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-foreground text-sm">{option}</span>
              {answered && i === q.answer && <CheckCircle2 className="w-5 h-5 text-green-400 ml-auto flex-shrink-0" />}
              {answered && i === selected && i !== q.answer && <XCircle className="w-5 h-5 text-red-400 ml-auto flex-shrink-0" />}
            </button>
          )
        })}
      </div>

      {answered && (
        <button
          type="button"
          onClick={nextQuestion}
          className="w-full px-6 py-3 rounded-xl btn-gradient text-foreground font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
        >
          {currentQ < questions.length - 1 ? "Next Question" : "See Results"}
        </button>
      )}
    </div>
  )
}
