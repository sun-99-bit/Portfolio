"use client"

import { useState } from "react"

export function BmiCalculator() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [result, setResult] = useState<{ bmi: number; category: string; color: string } | null>(null)

  const calculateBMI = () => {
    const h = Number.parseFloat(height) / 100
    const w = Number.parseFloat(weight)
    if (h > 0 && w > 0) {
      const bmi = w / (h * h)
      let category = ""
      let color = ""
      if (bmi < 18.5) { category = "Underweight"; color = "text-blue-400" }
      else if (bmi < 25) { category = "Normal Weight"; color = "text-green-400" }
      else if (bmi < 30) { category = "Overweight"; color = "text-yellow-400" }
      else { category = "Obese"; color = "text-red-400" }
      setResult({ bmi: Math.round(bmi * 10) / 10, category, color })
    }
  }

  const reset = () => {
    setHeight("")
    setWeight("")
    setResult(null)
  }

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-2xl font-display font-bold gradient-text text-center mb-6">BMI Calculator</h3>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="height" className="block text-sm text-muted-foreground mb-1">Height (cm)</label>
          <input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height in cm"
            className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="weight" className="block text-sm text-muted-foreground mb-1">Weight (kg)</label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight in kg"
            className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={calculateBMI}
            className="flex-1 px-6 py-3 rounded-xl btn-gradient text-foreground font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Calculate
          </button>
          <button
            type="button"
            onClick={reset}
            className="px-6 py-3 rounded-xl border border-primary/20 text-foreground hover:bg-primary/10 transition-colors"
          >
            Reset
          </button>
        </div>

        {result && (
          <div className="mt-4 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
            <p className="text-4xl font-display font-bold text-foreground mb-2">{result.bmi}</p>
            <p className={`text-lg font-semibold ${result.color}`}>{result.category}</p>
            <div className="mt-4 w-full bg-muted rounded-full h-3 overflow-hidden">
              <div
                className="h-full rounded-full btn-gradient transition-all duration-500"
                style={{ width: `${Math.min((result.bmi / 40) * 100, 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Underweight</span>
              <span>Normal</span>
              <span>Overweight</span>
              <span>Obese</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
