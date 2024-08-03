import { IMetadataStrategy } from "./IMetadataStrategy";
import { GameMetadata } from "../mockData/GameMetadata";
import { pragmaticMetadata } from "../mockData/gameData";
import { enhanceMetadata } from "../utils";

export class PragmaticStrategy implements IMetadataStrategy {
  getMetadata(gameCode: string): GameMetadata | null {
    const metadata = pragmaticMetadata[gameCode];
    return metadata ? enhanceMetadata(metadata) : null;
  }
}
