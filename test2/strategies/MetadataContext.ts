import { IMetadataStrategy } from "./IMetadataStrategy";
import { GameMetadata } from "../mockData/GameMetadata";

export class MetadataContext {
  private strategy: IMetadataStrategy;

  constructor(strategy: IMetadataStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: IMetadataStrategy) {
    this.strategy = strategy;
  }

  getMetadata(gameCode: string): GameMetadata | null {
    return this.strategy.getMetadata(gameCode);
  }
}
