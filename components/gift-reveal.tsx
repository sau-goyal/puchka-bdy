"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Gift, Heart, X, Play, Pause, Volume2 } from "lucide-react"

interface GiftRevealProps {
  gifts: Array<{
    name: string
    description: string
    image?: string
    modalImage?: string
    voiceNote?: string
    revealed: boolean
  }>
  onGiftRevealed: (index: number) => void
}

export function GiftReveal({ gifts, onGiftRevealed }: GiftRevealProps) {
  const [selectedGift, setSelectedGift] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [modalImageSrc, setModalImageSrc] = useState("")
  const [playingVoice, setPlayingVoice] = useState<number | null>(null)
  const [audioElements, setAudioElements] = useState<{ [key: number]: HTMLAudioElement }>({})

  const revealGift = (index: number) => {
    setSelectedGift(index)
    onGiftRevealed(index)

    // Create sparkle effect
    createSparkles()
  }

  const openModal = (imageSrc: string) => {
    setModalImageSrc(imageSrc)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setModalImageSrc("")
  }

  const playVoiceNote = (index: number, voiceNoteSrc: string) => {
    // Stop any currently playing audio
    if (playingVoice !== null && audioElements[playingVoice]) {
      audioElements[playingVoice].pause()
      audioElements[playingVoice].currentTime = 0
    }

    if (playingVoice === index) {
      // If clicking the same voice note, stop it
      setPlayingVoice(null)
      return
    }

    // Create new audio element if it doesn't exist
    if (!audioElements[index]) {
      const audio = new Audio(voiceNoteSrc)
      audio.addEventListener("ended", () => {
        setPlayingVoice(null)
      })
      setAudioElements((prev) => ({ ...prev, [index]: audio }))
      audio.play()
    } else {
      // Play existing audio
      audioElements[index].play()
    }

    setPlayingVoice(index)

    // Create voice note effect
    createVoiceNoteEffect()
  }

  const createVoiceNoteEffect = () => {
    const soundWaves = ["🎵", "🎶", "🎼", "🎤", "💕", "💖"]

    for (let i = 0; i < 15; i++) {
      const wave = document.createElement("div")
      wave.innerHTML = soundWaves[Math.floor(Math.random() * soundWaves.length)]
      wave.style.position = "fixed"
      wave.style.left = Math.random() * (window.innerWidth - 60) + 30 + "px"
      wave.style.top = Math.random() * (window.innerHeight - 60) + 30 + "px"
      wave.style.fontSize = "1.5rem"
      wave.style.pointerEvents = "none"
      wave.style.zIndex = "1000"
      wave.style.transition = "all 2s ease-out"
      wave.style.opacity = "1"

      document.body.appendChild(wave)

      setTimeout(() => {
        wave.style.opacity = "0"
        wave.style.transform = `scale(2) rotate(${Math.random() * 360}deg)`
      }, 100)

      setTimeout(() => {
        document.body.removeChild(wave)
      }, 2000)
    }
  }

  const createSparkles = () => {
    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement("div")
      sparkle.innerHTML = "✨"
      sparkle.style.position = "fixed"
      sparkle.style.left = Math.random() * window.innerWidth + "px"
      sparkle.style.top = Math.random() * window.innerHeight + "px"
      sparkle.style.fontSize = "1.5rem"
      sparkle.style.pointerEvents = "none"
      sparkle.style.zIndex = "1000"
      sparkle.style.transition = "all 2s ease-out"

      document.body.appendChild(sparkle)

      setTimeout(() => {
        sparkle.style.opacity = "0"
        sparkle.style.transform = "scale(2)"
      }, 100)

      setTimeout(() => {
        document.body.removeChild(sparkle)
      }, 2000)
    }
  }

  return (
    <>
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-purple-800 text-center">🎁 Special Gifts for You! 🎁</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gifts.map((gift, index) => (
            <Card key={index} className="p-4 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-4">
                {!gift.revealed ? (
                  <div className="space-y-4">
                    <div
                      className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center cursor-pointer transform hover:scale-105 transition-transform"
                      onClick={() => revealGift(index)}
                    >
                      <Gift className="h-12 w-12 text-white animate-bounce" />
                    </div>
                    <Button
                      onClick={() => revealGift(index)}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      Open Gift {index + 1} 🎁
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="relative">
                      <div
                        className={`cursor-pointer ${gift.modalImage ? "hover:scale-105 transition-transform" : ""}`}
                        onClick={() => gift.modalImage && openModal(gift.modalImage)}
                      >
                        <img
                          src={gift.image || "/placeholder.svg?height=150&width=150&query=gift box opened"}
                          alt={gift.name}
                          className="w-24 h-24 mx-auto rounded-lg object-cover shadow-lg"
                        />
                        {gift.modalImage && <p className="text-xs text-purple-600 mt-1">Click to view!</p>}
                      </div>

                      {/* Voice Note Player */}
                      {gift.voiceNote && (
                        <div className="mt-3">
                          <Button
                            onClick={() => playVoiceNote(index, gift.voiceNote!)}
                            className={`${
                              playingVoice === index
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-blue-500 hover:bg-blue-600"
                            } text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 mx-auto`}
                          >
                            {playingVoice === index ? (
                              <>
                                <Pause className="h-4 w-4" />
                                Playing...
                              </>
                            ) : (
                              <>
                                <Play className="h-4 w-4" />
                                Play Voice Note
                              </>
                            )}
                            <Volume2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-800">{gift.name}</h4>
                      <p className="text-sm text-gray-600 mt-2">{gift.description}</p>
                    </div>
                    <Heart className="h-6 w-6 text-red-500 mx-auto animate-pulse" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {selectedGift !== null && (
          <Card className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 border-purple-200">
            <div className="text-center">
              <h4 className="text-xl font-bold text-purple-800 mb-2">🎉 You opened: {gifts[selectedGift].name}! 🎉</h4>
              <p className="text-purple-700">{gifts[selectedGift].description}</p>
            </div>
          </Card>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <Button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white/90 text-gray-800 rounded-full p-2"
              size="icon"
            >
              <X className="h-4 w-4" />
            </Button>
            <img
              src={modalImageSrc || "/placeholder.svg"}
              alt="Love Letter"
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-xl font-bold mb-2">💌 My Love Letter to You 💌</h3>
              <p className="text-white/90 text-sm">
                Every word written with love, every line filled with my heart. You are my everything, today and always.
                💖
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
