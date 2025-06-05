'use client'

import { useEffect, useState } from 'react'

export default function OnboardingForm() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])

  const questions = [
    'What is the name of your company?',
    'What problem are you solving?',
    'Who is your target customer?',
    'What stage is your business in? (Idea, MVP, Live, Revenue-generating)',
    'What is your pricing or monetization model?',
  ]

  const handleNext = (answer: string) => {
    setAnswers((prev) => [...prev, answer])
    setStep((prev) => prev + 1)
  }

  if (step >= questions.length) {
    return <div className="text-center text-lg">Thank you! Your answers have been submitted.</div>
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 bg-gray-100">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Let's get to know your idea</h2>
        <p className="text-lg text-gray-800 mb-4">{questions[step]}</p>
        <input
          type="text"
          placeholder="Type your answer..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleNext((e.target as HTMLInputElement).value)
          }}
          className="w-full border px-4 py-2 rounded-md shadow-sm"
        />
      </div>
    </div>
  )
} 