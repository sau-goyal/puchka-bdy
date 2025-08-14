"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface BirthdayCakeProps {
  onCandlesBlown: () => void
}

export function BirthdayCake({ onCandlesBlown }: BirthdayCakeProps) {
  const [heartLit, setHeartLit] = useState(true)
  const [heartBlown, setHeartBlown] = useState(false)

  const blowHeartCandle = () => {
    if (!heartLit) return

    setHeartLit(false)
    setHeartBlown(true)

    // Create blow effect
    createBlowEffect()

    setTimeout(() => {
      onCandlesBlown()
      createConfetti()
    }, 1000)
  }

  const createBlowEffect = () => {
    // Create smoke effect
    for (let i = 0; i < 8; i++) {
      const smoke = document.createElement("div")
      smoke.innerHTML = "💨"
      smoke.style.position = "fixed"
      smoke.style.left = Math.random() * (window.innerWidth - 100) + 50 + "px" // Random horizontal position
      smoke.style.top = "-50px" // Start from top
      smoke.style.fontSize = "1.5rem"
      smoke.style.pointerEvents = "none"
      smoke.style.zIndex = "1000"
      smoke.style.transition = `all ${2 + Math.random() * 1}s ease-out` // Varied timing
      smoke.style.transform = `rotate(${Math.random() * 360}deg)`

      document.body.appendChild(smoke)

      setTimeout(() => {
        smoke.style.top = window.innerHeight + 50 + "px" // Fall to bottom
        smoke.style.opacity = "0"
        smoke.style.transform = `rotate(${Math.random() * 720}deg) scale(${0.5 + Math.random() * 0.5})`
      }, Math.random() * 300) // Random delay for natural effect

      setTimeout(() => {
        document.body.removeChild(smoke)
      }, 3500)
    }

    // Add birthday emojis rain when candle is blown
    const birthdayEmojis = ["🎉", "🎂", "🎈", "🎁", "🌟", "✨", "💖", "💕", "🎊", "🥳", "🎀", "🌹", "🦋", "💐"]

    for (let i = 0; i < 15; i++) {
      const emoji = document.createElement("div")
      const randomEmoji = birthdayEmojis[Math.floor(Math.random() * birthdayEmojis.length)]
      emoji.innerHTML = randomEmoji
      emoji.style.position = "fixed"
      emoji.style.left = Math.random() * (window.innerWidth - 80) + 40 + "px" // Random position with margins
      emoji.style.top = "-60px"
      emoji.style.fontSize = "2rem"
      emoji.style.pointerEvents = "none"
      emoji.style.zIndex = "1001"
      emoji.style.transition = `all ${3 + Math.random() * 2}s ease-out`
      emoji.style.transform = `rotate(${Math.random() * 360}deg)`

      document.body.appendChild(emoji)

      setTimeout(() => {
        emoji.style.top = window.innerHeight + 80 + "px"
        emoji.style.transform = `rotate(${Math.random() * 720}deg) scale(${0.6 + Math.random() * 0.4})`
      }, Math.random() * 600) // Staggered start times

      setTimeout(() => {
        document.body.removeChild(emoji)
      }, 5500)
    }
  }

  const createConfetti = () => {
    const colors = ["🎉", "🎊", "✨", "🌟", "💖", "🎈"]

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div")
      confetti.innerHTML = colors[Math.floor(Math.random() * colors.length)]
      confetti.style.position = "fixed"
      confetti.style.left = Math.random() * window.innerWidth + "px"
      confetti.style.top = "-50px"
      confetti.style.fontSize = "2rem"
      confetti.style.pointerEvents = "none"
      confetti.style.zIndex = "1000"
      confetti.style.transition = "all 3s ease-out"

      document.body.appendChild(confetti)

      setTimeout(() => {
        confetti.style.top = window.innerHeight + "px"
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`
      }, 100)

      setTimeout(() => {
        document.body.removeChild(confetti)
      }, 3000)
    }
  }

  const relightHeartCandle = () => {
    setHeartLit(true)
    setHeartBlown(false)
  }

  return (
    <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-2xl border-pink-200">
      <div className="text-center space-y-6">
        <h3 className="text-2xl font-bold text-purple-800">🎂 Make a Wish! 🎂</h3>

        {/* Cake */}
        <div className="relative mx-auto w-80 h-60 bg-gradient-to-b from-pink-300 to-pink-400 rounded-lg shadow-lg">
          {/* Cake layers */}
          <div className="absolute bottom-0 w-full h-16 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-b-lg"></div>
          <div className="absolute bottom-16 w-full h-16 bg-gradient-to-b from-pink-200 to-pink-300 rounded-lg"></div>

          {/* Heart Candle */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
            <div
              className="relative cursor-pointer transform hover:scale-110 transition-transform"
              onClick={blowHeartCandle}
            >
              {/* Heart Candle Base */}
              <div className="w-4 h-12 bg-gradient-to-b from-red-300 to-red-400 rounded-sm mx-auto"></div>
              {/* Heart Flame */}
              {heartLit && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-3xl animate-pulse">❤️‍🔥</div>
              )}
              {/* Heart Shape on Candle */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-red-600 text-sm">💖</div>
            </div>
          </div>

          {/* Decorations */}
          <div className="absolute bottom-20 left-4 text-2xl">🌹</div>
          <div className="absolute bottom-20 right-4 text-2xl">🌹</div>
          <div className="absolute bottom-32 left-8 text-xl">💖</div>
          <div className="absolute bottom-32 right-8 text-xl">💖</div>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-purple-700">Click on the heart candle to blow it out! 💨</p>

          {heartBlown ? (
            <div className="space-y-4">
              <p className="text-xl font-bold text-green-600 animate-bounce">🎉 Wish Made! Happy Birthday! 🎉</p>
              <Button onClick={relightHeartCandle} className="bg-purple-600 hover:bg-purple-700">
                Light Heart Candle Again 💖
              </Button>
            </div>
          ) : (
            <p className="text-sm text-gray-600">Make a wish and blow out the heart candle! 💖</p>
          )}
        </div>
      </div>
    </Card>
  )
}
