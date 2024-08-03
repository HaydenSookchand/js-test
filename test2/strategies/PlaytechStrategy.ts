import { IMetadataStrategy } from "./IMetadataStrategy";
import { GameMetadata } from "../mockData/GameMetadata";
import { playtechMetadata } from "../mockData/gameData";
import { enhanceMetadata } from "../utils";

export class PlaytechStrategy implements IMetadataStrategy {
  getMetadata(gameCode: string): GameMetadata | null {
    const metadata = playtechMetadata[gameCode];
    return metadata ? enhanceMetadata(metadata) : null;
  }
}
