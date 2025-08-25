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
  title: "🎉 Happy Birthday Meri Pasandida Aurat, My Beautiful Princess! 🎂 Love you, Love you, Love you, Love you, Love you, Love you soo much 😗😗😗",
  girlfriendName: "My Love",
  phases: [
    {
      title: "🎉 Happy Birthday Meri Pasandida Aurat, My Beautiful Princess! 🎂 Love you, Love you, Love you, Love you, Love you, Love you soo much 😗😗😗",
      message: "",
    },
    {
      title: "",
      message: "🎈🎈🎈Meri Laadki 😘😘😘😘. Today is the most special day because it's YOUR day! 🎈🎈🎈 Happy Birthday Cucu, Love You So Much 💞💞💞",
    },
    {
      title: "",
      message: "🌟 Another year of your amazing existence! You make every day brighter just by being you! And being with Me! 🌟",
    },
    {
      title: "",
      message:
        "💖 You are the most beautiful, kind, funny, Notanki, jisse Tuki pyar krta h and incredible person I know. I'm so lucky to have you in my life! 💖 Always be with me in every situation, in every world! 💐💐💐",
    },
    {
      title: "",
      message: "🎂 Make a wish, my love! I hope all your dreams come true this year! and Khana Ji make you happy with me, and give you all the happiness you deserve! 🎂",
      showCake: true,
    },
    {
      title: "",
      message: "🎁 I have some special surprises for you meri laddo😘😘😘😘... 🎁",
      showGifts: true,
    },
    {
      title: "",
      message: "💕 Happy Birthday Meri Pasandida Aurat! You mean the world to me and I love you more than words can express! 💕",
    },
  ],
  birthdayGifs: [
    "https://media.tenor.com/h4gJajgeNZUAAAAj/bday.gif",
    "https://media.tenor.com/dIo7ek60SpEAAAAj/birthday-happy-birthday.gif",
    "https://media.tenor.com/Xt-6rVvnPtsAAAAj/tkthao219-lengtoo.gif",
    "https://media.tenor.com/btmyl_V4L4gAAAAj/birthday-bday.gif",
    "https://media.tenor.com/bh9MAiCpL6wAAAAj/birthday-cake.gif",
    "https://media.tenor.com/N2zrXlml-qYAAAAj/christmas-birthday.gif",
    "https://media.tenor.com/i3cV9rg-cB4AAAAj/happy-birthday-cake.gif",
    "https://media.tenor.com/SrvqhxeGuYkAAAAj/peachy-celebrate.gif",
    "https://media.tenor.com/l2QU5JIn6q0AAAAj/happy-birthday.gif",
    "https://media.tenor.com/KRHqyUL0dgoAAAAj/chum-chums-chumchums.gif"
  ],
  gifts: [
    {
      name: "Virtual Hug",
      description: "The biggest, warmest hug from me to you! 🤗",
      image: "/hug.jpg?height=150&width=150",
      revealed: false,
    },
    {
      name: "Love Letter",
      description: "A heartfelt letter expressing all my love for you 💌 (Click the image to read it!)",
      image: "/love.jpeg?height=150&width=150",
      modalImage: "/from_tuku.pdf?height=600&width=800",
      revealed: false,
    },
    {
      name: "Endless Love",
      description: "My promise to love you forever and always! 💖",
      image: "https://media.tenor.com/15YUsMWt4FEAAAAj/music.gif?height=150&width=150",
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
    "Happy Birthday, Nanu, puchka, cucu, tuki ki gf, chota babu! 🎉🎂🎈",
    "May this year bring you endless joy and happiness with Tuki! 🌟",
    "I wish you all the love and laughter in the world! 💖",
    "May all your dreams come true this year! ✨",
    "Here's to another year of being absolutely amazing! 🎉",
    "I love you more with each passing year, each month, each day, each hour, each minute, each second ! 💕",
    "Love you too", 
    "Love you soo much, meri babudi! 😘",
  ],
  personalMessage: "You are my sunshine, my everything, and my best friend, love of my Life. Happy Birthday, gorgeous!, Mari Cham-Cham🌞💖",
}

export default config
