import { GameMetadata, additionalMetadata } from "./testdata";

export function enhanceMetadata(gameMetadata: GameMetadata): GameMetadata {
  const additional = additionalMetadata[gameMetadata["game-code"]];
  return {
    ...gameMetadata,
    ...additional,
  };
}
