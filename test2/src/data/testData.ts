export interface GameMetadata {
  "game-code": string;
  "game-name": string;
  rtp: number;
  hasFreeSpins: boolean;
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
    "game-name": "Gladiator",
    rtp: 94,
    hasFreeSpins: true,
  },
};

export const pragmaticMetadata: Record<string, GameMetadata> = {
  pragmatic1: {
    "game-code": "pragmatic1",
    "game-name": "Wolf Gold",
    rtp: 96,
    hasFreeSpins: true,
  },
  pragmatic2: {
    "game-code": "pragmatic2",
    "game-name": "The Dog House",
    rtp: 97,
    hasFreeSpins: true,
  },
};
