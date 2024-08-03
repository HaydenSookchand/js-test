import { GameMetadata } from "../mockData/GameMetadata";
import { microgamingMetadata } from "../mockData/gameData";
import { enhanceMetadata } from "../utils";
import { IMetadataStrategy } from "./IMetadataStrategy";

export class MicrogamingStrategy implements IMetadataStrategy {
  getMetadata(gameCode: string): GameMetadata | null {
    const metadata = microgamingMetadata[gameCode];
    return metadata ? enhanceMetadata(metadata) : null;
  }
}
