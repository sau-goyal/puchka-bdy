export interface BirthdayConfig {
  title: string
  girlfriendName: string
  phases: {
    title: string
    message: string
    showCake?: boolean
    showGifts?: boolean
  }[]
  birthdayGifs: string[]
  gifts: {
    name: string
    description: string
    image?: string
    modalImage?: string
    revealed: boolean
  }[]
  settings: {
    backgroundColor: string
    textColor: string
    enableMusic: boolean
    particleCount: number
    enableBalloons: boolean
    balloonColors: string[]
  }
  birthdayWishes: string[]
  personalMessage: string
}

export const config: BirthdayConfig = {
  title: "🎉 Happy Birthday My Beautiful Princess! 🎂",
  girlfriendName: "My Love",
  phases: [
    {
      title: "🎉 Happy Birthday My Beautiful Princess! 🎂",
      message: "",
    },
    {
      title: "",
      message: "🎈🎈🎈 Today is the most special day because it's YOUR day! 🎈🎈🎈",
    },
    {
      title: "",
      message: "🌟 Another year of your amazing existence! You make every day brighter just by being you! 🌟",
    },
    {
      title: "",
      message:
        "💖 You are the most beautiful, kind, funny, and incredible person I know. I'm so lucky to have you in my life! 💖",
    },
    {
      title: "",
      message: "🎂 Make a wish, my love! I hope all your dreams come true this year! 🎂",
      showCake: true,
    },
    {
      title: "",
      message: "🎁 I have some special surprises for you... 🎁",
      showGifts: true,
    },
    {
      title: "",
      message: "💕 Happy Birthday my darling! You mean the world to me and I love you more than words can express! 💕",
    },
  ],
  birthdayGifs: [
    "https://media.tenor.com/9VJ0Ms3KqBkAAAAi/happy-birthday.gif",
    "https://media.tenor.com/YJ3Fr2_uKCsAAAAi/birthday-cake.gif",
    "https://media.tenor.com/X2ug-VJKMhsAAAAi/happy-birthday-cake.gif",
    "https://media.tenor.com/kzWiUVU4ORYAAAAC/happy-birthday.gif",
    "https://media.tenor.com/Bp3HJpBOFjgAAAAi/birthday-balloons.gif",
    "https://media.tenor.com/QJ8E_bOBKOsAAAAi/birthday-girl.gif",
    "https://media.tenor.com/8QOCqJgKhJgAAAAi/happy-birthday-birthday.gif",
    "https://media.tenor.com/YzWzoyoJJYsAAAAi/birthday-wishes.gif",
  ],
  gifts: [
    {
      name: "Virtual Hug",
      description: "The biggest, warmest hug from me to you! 🤗",
      image: "/placeholder.svg?height=150&width=150",
      revealed: false,
    },
    {
      name: "Love Letter",
      description: "A heartfelt letter expressing all my love for you 💌 (Click the image to read it!)",
      image: "/placeholder.svg?height=150&width=150",
      modalImage: "/placeholder.svg?height=600&width=800",
      revealed: false,
    },
    {
      name: "Endless Love",
      description: "My promise to love you forever and always! 💖",
      image: "/placeholder.svg?height=150&width=150",
      revealed: false,
    },
  ],
  settings: {
    backgroundColor: "from-pink-200 via-purple-200 to-blue-200",
    textColor: "text-purple-800",
    enableMusic: true,
    particleCount: 60,
    enableBalloons: true,
    balloonColors: ["#FF69B4", "#FFB6C1", "#DDA0DD", "#98FB98", "#87CEEB", "#F0E68C"],
  },
  birthdayWishes: [
    "May this year bring you endless joy and happiness! 🌟",
    "I wish you all the love and laughter in the world! 💖",
    "May all your dreams come true this year! ✨",
    "Here's to another year of being absolutely amazing! 🎉",
    "I love you more with each passing year! 💕",
  ],
  personalMessage: "You are my sunshine, my everything, and my best friend. Happy Birthday, beautiful! 🌞💖",
}

export default config
