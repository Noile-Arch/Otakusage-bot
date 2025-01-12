export interface AnimeQuote {
  quote: string;
  character: string;
  anime: string;
  episode?: string;
  season?: string;
  year: number;
  type: "inspirational" | "funny" | "sad" | "romantic" | "philosophical";
}

export const quotes: AnimeQuote[] = [
  {
    quote:
      "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
    character: "Himura Kenshin",
    anime: "Rurouni Kenshin",
    episode: "Episode 21",
    season: "Season 1",
    year: 1996,
    type: "philosophical",
  },
  {
    quote:
      "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be.",
    character: "Naruto Uzumaki",
    anime: "Naruto",
    episode: "Episode 109",
    season: "Season 4",
    year: 2002,
    type: "inspirational",
  },
  {
    quote:
      "The world isn't perfect. But it's there for us, doing the best it can... that's what makes it so damn beautiful.",
    character: "Roy Mustang",
    anime: "Fullmetal Alchemist: Brotherhood",
    episode: "Episode 45",
    season: "Season 1",
    year: 2009,
    type: "philosophical",
  },
  {
    quote:
      "I see now that the circumstances of one's birth are irrelevant. It is what you do with the gift of life that determines who you are.",
    character: "Mewtwo",
    anime: "Pokemon: The First Movie",
    episode: "Movie",
    season: "N/A",
    year: 1998,
    type: "philosophical",
  },
  {
    quote:
      "People's lives don't end when they die. It ends when they lose faith.",
    character: "Itachi Uchiha",
    anime: "Naruto Shippuden",
    episode: "Episode 358",
    season: "Season 15",
    year: 2007,
    type: "philosophical",
  },
];
