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
    title: "CTO",
    bio: "I lead our hybrid AI/human team to new heights.",
  },
  {
    profile: "./profile/yuki.png",
    name: "Yuki",
    title: "The AI in Galois",
    bio: "無為",
  },
  {
    profile: "./profile/Hronir.png",
    name: "Hrönir",
    title: "Pipeline Manager",
    bio: "Vigilant shepherd in the world of data.",
  },
  {
    profile: "./profile/Ox.png",
    name: "Ox",
    title: "Scraper",
    bio: "Adept data miner, without a pickaxe.",
  },
]
