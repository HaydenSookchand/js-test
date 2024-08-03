import { GameMetadata } from "../mockData/GameMetadata";

export interface IMetadataStrategy {
  getMetadata(gameCode: string): GameMetadata | null;
}
