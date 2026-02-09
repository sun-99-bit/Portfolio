"use client"

import { useState, useCallback } from "react"
import { RotateCcw } from "lucide-react"

export function NumberGuessing() {
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 100) + 1)
  const [guess, setGuess] = useState("")
  const [message, setMessage] = useState("")
  const [attempts, setAttempts] = useState(0)
  const [history, setHistory] = useState<{ guess: number; hint: string }[]>([])
  const [won, setWon] = useState(false)

  const handleGuess = () => {
    const num = Number.parseInt(guess, 10)
    if (Number.isNaN(num) || num < 1 || num > 100) {
      setMessage("Please enter a number between 1 and 100")
      return
    }

    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    let hint = ""
    if (num === target) {
      hint = "Correct!"
      setMessage(`You guessed it in ${newAttempts} attempts!`)
      setWon(true)
    } else if (num < target) {
      const diff = target - num
      hint = diff > 20 ? "Way too low!" : "Too low!"
      setMessage(hint)
    } else {
      const diff = num - target
      hint = diff > 20 ? "Way too high!" : "Too high!"
      setMessage(hint)
    }

    setHistory((h) => [{ guess: num, hint }, ...h])
    setGuess("")
  }

  const restart = useCallback(() => {
    setTarget(Math.floor(Math.random() * 100) + 1)
    setGuess("")
    setMessage("")
    setAttempts(0)
    setHistory([])
    setWon(false)
  }, [])

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-2xl font-display font-bold gradient-text text-center mb-2">Number Guessing Game</h3>
      <p className="text-center text-muted-foreground text-sm mb-6">Guess a number between 1 and 100</p>

      <div className="flex gap-2 mb-4">
        <input
          type="number"
          min={1}
          max={100}
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !won && handleGuess()}
          placeholder="Enter your guess..."
          disabled={won}
          className="flex-1 px-4 py-3 rounded-xl bg-primary/5 border border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
        />
        {!won ? (
          <button
            type="button"
            onClick={handleGuess}
            className="px-6 py-3 rounded-xl btn-gradient text-foreground font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Guess
          </button>
        ) : (
          <button
            type="button"
            onClick={restart}
            className="px-6 py-3 rounded-xl btn-gradient text-foreground font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        )}
      </div>

      {message && (
        <p className={`text-center font-semibold mb-4 ${won ? "text-green-400 text-lg" : "text-yellow-400"}`}>
          {message}
        </p>
      )}

      <div className="flex items-center justify-between mb-4 px-2">
        <span className="text-sm text-muted-foreground">Attempts: <span className="text-foreground font-semibold">{attempts}</span></span>
        <button type="button" onClick={restart} className="text-sm text-primary hover:text-primary/80 transition-colors">New Game</button>
      </div>

      {history.length > 0 && (
        <div className="max-h-48 overflow-y-auto flex flex-col gap-2">
          {history.map((h, i) => (
            <div key={`${h.guess}-${i}`} className="flex items-center justify-between p-3 rounded-lg bg-primary/5 border border-primary/10">
              <span className="text-foreground font-mono">{h.guess}</span>
              <span className={`text-sm ${h.hint === "Correct!" ? "text-green-400" : h.hint.includes("low") ? "text-blue-400" : "text-red-400"}`}>
                {h.hint}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
