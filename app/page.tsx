"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Volume2, VolumeX, Gift } from "lucide-react";
import { BirthdayCake } from "@/components/birthday-cake";
import { GiftReveal } from "@/components/gift-reveal";
import config from "@/lib/birthday-config";

export default function BirthdayCelebration() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showParticles, setShowParticles] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [currentGif, setCurrentGif] = useState("");
  const [gifts, setGifts] = useState([
    {
      name: "Virtual Hug",
      description: "The biggest, warmest hug from me to you! 🤗",
      image: "/hug.jpg?height=150&width=150",
      revealed: false,
    },
    {
      name: "Love Letter",
      description:
        "A heartfelt letter expressing all my love for you 💌 (Click the image to read it!)",
      image: "/love.jpeg?height=150&width=150",
      modalImage: "/placeholder.svg?height=600&width=800",
      revealed: false,
    },
    {
      name: "ab tuki bolega",
      description: "A special voice note just for you! 🎵 (Click to play)",
      image: "/music.gif?height=150&width=150",
      voiceNote: "/tuku.mp3?query=romantic voice message",
      revealed: false,
    },
  ]);
  const [hasStarted, setHasStarted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startExperience = () => {
    setHasStarted(true);

    audioRef.current?.play();

    // setIsPlaying(!isPlaying);
  };

  // Initialize GIF
  useEffect(() => {
    setCurrentGif(config.birthdayGifs[0] || "");
  }, []);

  // Initialize particle animation (balloons and confetti)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: any[] = [];
    const particleCount = config.settings.particleCount;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 4 + 2,
        color:
          config.settings.balloonColors[
            Math.floor(Math.random() * config.settings.balloonColors.length)
          ],
        life: Math.random() * 100 + 50,
        type: Math.random() > 0.5 ? "balloon" : "confetti",
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        if (
          particle.life <= 0 ||
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.y < 0 ||
          particle.y > canvas.height
        ) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 4 + 2,
            color:
              config.settings.balloonColors[
                Math.floor(Math.random() * config.settings.balloonColors.length)
              ],
            life: Math.random() * 100 + 50,
            type: Math.random() > 0.5 ? "balloon" : "confetti",
          };
        }

        ctx.fillStyle = particle.color;
        if (particle.type === "balloon") {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
        }
      });

      if (showParticles) {
        requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [showParticles]);

  const handleNextPhase = () => {
    if (currentPhase < config.phases.length - 1) {
      setCurrentPhase((prev) => prev + 1);
      if (currentPhase === 0) {
        setShowParticles(false);
      }
      // Create celebration effect
      createFloatingBalloons();
      createEmojiRain(); // Add this line
    }
  };

  const handleCelebrationClick = () => {
    setClickCount((prev) => prev + 1);
    createFloatingBalloons();
    createEmojiRain(); // Add this new function call

    // Change GIF randomly
    if (config.birthdayGifs.length > 0) {
      const randomGif =
        config.birthdayGifs[
          Math.floor(Math.random() * config.birthdayGifs.length)
        ];
      setCurrentGif(randomGif);
    }
  };

  const createFloatingBalloons = () => {
    const balloons = ["🎈", "🎂", "🎉", "💖", "🌟"];

    for (let i = 0; i < 5; i++) {
      const balloon = document.createElement("div");
      balloon.innerHTML = balloons[Math.floor(Math.random() * balloons.length)];
      balloon.style.position = "fixed";
      balloon.style.left = Math.random() * window.innerWidth + "px";
      balloon.style.top = window.innerHeight + "px";
      balloon.style.fontSize = "2rem";
      balloon.style.pointerEvents = "none";
      balloon.style.zIndex = "1000";
      balloon.style.transition = "all 4s ease-out";

      document.body.appendChild(balloon);

      setTimeout(() => {
        balloon.style.top = "-100px";
        balloon.style.opacity = "0";
      }, 100);

      setTimeout(() => {
        document.body.removeChild(balloon);
      }, 4000);
    }
  };

  const createEmojiRain = () => {
    const birthdayEmojis = [
      "🎉",
      "🎂",
      "🎈",
      "🎁",
      "🌟",
      "✨",
      "💖",
      "💕",
      "💝",
      "🎊",
      "🥳",
      "🎀",
      "🌹",
      "🦋",
      "🌺",
      "💐",
      "🎵",
      "🎶",
      "😍",
      "🥰",
      "😘",
      "💋",
      "👑",
      "💎",
      "🌈",
      "🦄",
      "🍰",
      "🧁",
      "🍭",
      "🎪",
    ];

    const happyBirthdayText = [
      "H",
      "A",
      "P",
      "P",
      "Y",
      " ",
      "B",
      "I",
      "R",
      "T",
      "H",
      "D",
      "A",
      "Y",
    ];

    // Create emoji rain
    for (let i = 0; i < 25; i++) {
      const emoji = document.createElement("div");
      const randomEmoji =
        birthdayEmojis[Math.floor(Math.random() * birthdayEmojis.length)];
      emoji.innerHTML = randomEmoji;
      emoji.style.position = "fixed";
      emoji.style.left = Math.random() * (window.innerWidth - 50) + "px";
      emoji.style.top = "-50px";
      emoji.style.fontSize = "2rem";
      emoji.style.pointerEvents = "none";
      emoji.style.zIndex = "1000";
      emoji.style.transition = `all ${3 + Math.random() * 2}s ease-out`;
      emoji.style.transform = `rotate(${Math.random() * 360}deg)`;

      document.body.appendChild(emoji);

      setTimeout(() => {
        emoji.style.top = window.innerHeight + 50 + "px";
        emoji.style.transform = `rotate(${Math.random() * 720}deg) scale(${
          0.5 + Math.random() * 0.5
        })`;
      }, Math.random() * 500);

      setTimeout(() => {
        document.body.removeChild(emoji);
      }, 5500);
    }

    // Create "HAPPY BIRTHDAY" text rain with spacing
    happyBirthdayText.forEach((letter, index) => {
      if (letter === " ") return; // Skip spaces

      setTimeout(() => {
        const textElement = document.createElement("div");
        textElement.innerHTML = letter;
        textElement.style.position = "fixed";
        textElement.style.left =
          Math.random() * (window.innerWidth - 100) + "px";
        textElement.style.top = "-80px";
        textElement.style.fontSize = "3rem";
        textElement.style.fontWeight = "bold";
        textElement.style.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
        textElement.style.pointerEvents = "none";
        textElement.style.zIndex = "1001";
        textElement.style.transition = `all ${4 + Math.random() * 2}s ease-out`;
        textElement.style.textShadow = "2px 2px 4px rgba(0,0,0,0.3)";

        document.body.appendChild(textElement);

        setTimeout(() => {
          textElement.style.top = window.innerHeight + 100 + "px";
          textElement.style.transform = `rotate(${
            Math.random() * 180 - 90
          }deg)`;
        }, 200);

        setTimeout(() => {
          document.body.removeChild(textElement);
        }, 6500);
      }, index * 200); // Stagger the letters with 200ms delay between each
    });
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleGiftRevealed = (index: number) => {
    setGifts((prev) =>
      prev.map((gift, i) => (i === index ? { ...gift, revealed: true } : gift))
    );
  };

  const handleCandlesBlown = () => {
    // Create special effect
    createBirthdayConfetti();
  };

  const createBirthdayConfetti = () => {
    const confetti = ["🎊", "🎉", "✨", "🌟", "💖", "🎈", "🎂"];

    for (let i = 0; i < 100; i++) {
      const piece = document.createElement("div");
      piece.innerHTML = confetti[Math.floor(Math.random() * confetti.length)];
      piece.style.position = "fixed";
      piece.style.left = Math.random() * window.innerWidth + "px";
      piece.style.top = "-50px";
      piece.style.fontSize = "1.5rem";
      piece.style.pointerEvents = "none";
      piece.style.zIndex = "1000";
      piece.style.transition = "all 5s ease-out";

      document.body.appendChild(piece);

      setTimeout(() => {
        piece.style.top = window.innerHeight + "px";
        piece.style.transform = `rotate(${Math.random() * 720}deg)`;
      }, 100);

      setTimeout(() => {
        document.body.removeChild(piece);
      }, 5000);
    }
  };

  if (!hasStarted) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full">
        <Button
          onClick={startExperience}
          className="flex flex-col justify-center items-center w-[80%] h-fit bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <span>Happy Birthday Nanu 😘😘😘😗💞!</span>
          <span>Click to Start 🎉🎉🎉</span>
        </Button>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${config.settings.backgroundColor} relative overflow-hidden`}
    >
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className={`fixed top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${
          showParticles ? "opacity-100" : "opacity-30"
        }`}
        style={{ background: "rgba(255, 192, 203, 0.1)" }}
      />

      {/* Floating Balloons */}
      {config.settings.enableBalloons && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute text-2xl sm:text-3xl animate-bounce`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              🎈
            </div>
          ))}
        </div>
      )}

      {/* Control Buttons */}
      <div className="fixed top-4 right-4 z-20 flex gap-2">
        {config.settings.enableMusic && (
          <Button
            onClick={toggleMusic}
            variant="outline"
            size="icon"
            className="bg-white/80 hover:bg-white/90"
          >
            {!isPlaying ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Phase */}
        {currentPhase === 0 && (
          <div className="flex flex-col items-center w-full text-justify px-8 animate-pulse space-y-6 sm:space-y-8">
            <h1
              className={`text-wrap text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ${config.settings.textColor} mb-6 sm:mb-8 animate-bounce px-4`}
            >
              {config.phases[0].title}
            </h1>
            <div className="text-6xl animate-spin-slow">🎂</div>

            <Button
              onClick={handleNextPhase}
              className="flex flex-col justify-center items-center w-full h-fit bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>
                ruko ruko yha click kro
                </span>
              <span>
                or bhi h abhi to 😏
                </span>
            </Button>
          </div>
        )}

        {/* Message Phases */}
        {currentPhase > 0 && currentPhase < config.phases.length - 1 && (
          <div className="text-center w-full space-y-8 px-8">
            <h2
              className={`text-lg md:text-2xl font-semibold ${config.settings.textColor} leading-relaxed animate-fadeIn`}
            >
              {config.phases[currentPhase].message}
            </h2>

            {/* Show Birthday Cake */}
            {config.phases[currentPhase].showCake && (
              <BirthdayCake onCandlesBlown={handleCandlesBlown} />
            )}

            {/* Show Gifts */}
            {config.phases[currentPhase].showGifts && (
              <GiftReveal
                gifts={gifts}
                onGiftRevealed={handleGiftRevealed}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              />
            )}

            {/* Next Phase Button */}
            <div className="mt-8">
              <Button
              onClick={handleNextPhase}
              className="flex flex-col justify-center items-center w-full h-fit bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>
                ruko ruko yha click kro
                </span>
              <span>
                or bhi h abhi to 😏
                </span>
            </Button>
            </div>
          </div>
        )}

        {/* Final Phase */}
        {currentPhase === config.phases.length - 1 && (
          <div className="text-center space-y-8 animate-fadeIn max-w-6xl">
            <h2
              className={`text-lg md:text-xl text-center font-semibold ${config.settings.textColor} max-w-4xl leading-relaxed mb-8`}
            >
              {config.phases[currentPhase].message}
            </h2>

            <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-2xl border-pink-200 hover:shadow-3xl transition-all duration-300">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Button
                    onClick={handleCelebrationClick}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Celebrate More! 🎉
                  </Button>
                </div>

                <div
                  className="relative group cursor-pointer"
                  onClick={handleCelebrationClick}
                >
                  <img
                    src={
                      currentGif ||
                      config.birthdayGifs[0] ||
                      "https://media.tenor.com/l2QU5JIn6q0AAAAj/happy-birthday.gif"
                    }
                    alt="Birthday Celebration"
                    className="w-80 h-64 object-cover rounded-2xl shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Gift className="absolute top-2 right-2 h-6 w-6 text-yellow-400 animate-pulse" />
                </div>

                <div className="text-center space-y-4">
                  <p className="text-purple-600 font-medium">
                    Click for birthday surprises! 🎁
                  </p>
                  <p className="text-sm text-gray-600">
                    Birthday celebrations: {clickCount} times 🎂
                  </p>
                  <p className="text-lg text-purple-700 font-semibold mt-4">
                    {config.personalMessage}
                  </p>

                  {/* Birthday Wishes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {config.birthdayWishes.map((wish, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg border border-purple-200"
                      >
                        <p className="text-purple-700 text-sm font-medium">
                          {wish}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Final Message */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl border-2 border-purple-200">
                    <h3 className="text-xl font-bold text-purple-800 mb-3">
                      🎂 Happy Birthday, ! 🎂
                    </h3>
                    <p className="text-purple-700 leading-relaxed">
                      Today we celebrate you - your kindness, your smile, your
                      amazing heart, and all the joy you bring into this world.
                      I'm so grateful to have you in my life, and I can't wait
                      to create more beautiful memories together. Here's to
                      another year of adventures, laughter, and endless love! 💖
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Hidden Audio Element */}
      {config.settings.enableMusic && (
        <audio ref={audioRef} loop preload="auto" autoPlay>
          <source
            src="/song.mp3?query=happy birthday song romantic"
            type="audio/mpeg"
          />
        </audio>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}
