export interface GameMetadata {
  "game-code": string;
  "game-name": string;
  rtp: number;
  hasFreeSpins: boolean;
  thumbnailUrl?: string;
  releaseDate?: string;
  countriesAvailable?: string[];
}

export const microgamingMetadata: Record<string, GameMetadata> = {
  microgame1: {
    "game-code": "microgame1",
    "game-name": "Mega Moolah",
    rtp: 88,
    hasFreeSpins: true,
  },
  microgame2: {
    "game-code": "microgame2",
    "game-name": "Thunderstruck",
    rtp: 96,
    hasFreeSpins: true,
  },
};

export const playtechMetadata: Record<string, GameMetadata> = {
  playtech1: {
    "game-code": "playtech1",
    "game-name": "Age of the Gods",
    rtp: 95,
    hasFreeSpins: true,
  },
  playtech2: {
    "game-code": "playtech2",
    "game-name": "Buffalo Blitz",
    rtp: 94,
    hasFreeSpins: false,
  },
};

export const pragmaticMetadata: Record<string, GameMetadata> = {
  pragmatic1: {
    "game-code": "pragmatic1",
    "game-name": "The Dog House",
    rtp: 96.5,
    hasFreeSpins: true,
  },
  pragmatic2: {
    "game-code": "pragmatic2",
    "game-name": "Sweet Bonanza",
    rtp: 96.5,
    hasFreeSpins: true,
  },
};

export const additionalMetadata: Record<string, Partial<GameMetadata>> = {
  microgame1: {
    thumbnailUrl: "https://example.com/microgame1-thumbnail.jpg",
    releaseDate: "2020-01-01",
    countriesAvailable: ["US", "UK", "CA"],
  },
  microgame2: {
    thumbnailUrl: "https://example.com/microgame2-thumbnail.jpg",
    releaseDate: "2019-05-15",
    countriesAvailable: ["US", "AU"],
  },
  playtech1: {
    thumbnailUrl: "https://example.com/playtech1-thumbnail.jpg",
    releaseDate: "2021-06-01",
    countriesAvailable: ["UK", "FR"],
  },
  playtech2: {
    thumbnailUrl: "https://example.com/playtech2-thumbnail.jpg",
    releaseDate: "2022-02-20",
    countriesAvailable: ["US", "CA"],
  },
  pragmatic1: {
    thumbnailUrl: "https://example.com/pragmatic1-thumbnail.jpg",
    releaseDate: "2023-03-15",
    countriesAvailable: ["AU", "NZ"],
  },
  pragmatic2: {
    thumbnailUrl: "https://example.com/pragmatic2-thumbnail.jpg",
    releaseDate: "2023-07-10",
    countriesAvailable: ["US", "UK"],
  },
};
