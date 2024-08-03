import { additionalMetadata } from "./mockData/additionalMetaData";
import { GameMetadata } from "./mockData/GameMetadata";

export function enhanceMetadata(gameMetadata: GameMetadata): GameMetadata {
  const additional = additionalMetadata[gameMetadata["game-code"]];
  return {
    ...gameMetadata,
    ...additional,
  };
}
