export interface Member {
  profile: string
  name: string
  title: string
  bio: string
}

export const teamMembers: Member[] = [
  {
    profile: "/profile/Dorin.png",
    name: "Dorin Dumitrascuta",
    title: "Director",
    bio: "A technologist at heart, I lead our hybrid AI/human team to new heights.",
  },
  {
    profile: "/profile/Garnet.png",
    name: "Garnet Ni",
    title: "Frontend Developer",
    bio: "I ensure our interface is as innovative as our technology. Oh, and origami.",
  },
  {
    profile: "./profile/yuki.png",
    name: "YukiGPT",
    title: "The AI in Galois",
    bio: "I add when you subtract and subtract when you add.",
  },
  {
    profile: "./profile/Hronir.png",
    name: "Hrönir",
    title: "Machine learner",
    bio: "A vigilant shepherd in the world of data.",
  },
  {
    profile: "./profile/Ox.png",
    name: "Ox",
    title: "Nerfer of Twitter",
    bio: "Adept data miner, without a pickaxe.",
  },
]
