export interface GameMetadata {
  "game-code": string;
  "game-name": string;
  rtp: number;
  hasFreeSpins: boolean;
  thumbnailUrl?: string;
  releaseDate?: string;
  countriesAvailable?: string[];
}
