import axios from "axios";
import config from "../../config";
import { GameMetadata } from "../data/testData";

export const fetchAllProviders = async (): Promise<GameMetadata[]> => {
  const allGamesMetadata: GameMetadata[] = [];
  for (const provider of Object.values(config.providers)) {
    try {
      const response = await axios.get<GameMetadata[]>(
        `${provider.baseUrl}/games/all`
      );
      allGamesMetadata.push(...response.data);
    } catch (error) {
      console.error(`Error fetching from ${provider.baseUrl}:`, error);
    }
  }
  return allGamesMetadata;
};

export const fetchGameMetadataByCode = async (
  gameCode: string
): Promise<GameMetadata | null> => {
  for (const provider of Object.values(config.providers)) {
    try {
      const response = await axios.get<GameMetadata>(
        `${provider.baseUrl}/game/${gameCode}/metadata`
      );
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      // Continue to the next provider if the game is not found
      continue;
    }
  }
  return null;
};
