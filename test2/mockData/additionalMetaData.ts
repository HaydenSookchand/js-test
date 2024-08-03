import { GameMetadata } from "./GameMetadata";

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
