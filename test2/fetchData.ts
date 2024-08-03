import axios from "axios";
import { providers } from "./config";
import { GameMetadata } from "./mockData/GameMetadata";
import { additionalMetadata } from "./mockData/additionalMetaData";

/**
 * Fetch metadata for a specific game from a provider's API.
 * @param baseUrl - The base URL of the provider's API.
 * @param gameCode - The game code for which to fetch metadata.
 * @returns The fetched game metadata.
 */
async function fetchMetadata(
  baseUrl: string,
  gameCode: string
): Promise<GameMetadata> {
  try {
    const response = await axios.get<GameMetadata>(
      `${baseUrl}/game/${gameCode}/metadata`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching metadata for game ${gameCode} from ${baseUrl}:`,
      error
    );
    throw error;
  }
}

/**
 * Merges additional metadata into the base game metadata.
 * @param gameMetadata - The base game metadata.
 * @param additionalMetadata - The additional metadata to merge.
 * @returns The merged game metadata.
 */
function mergeMetadata(
  gameMetadata: GameMetadata,
  additionalMetadata: Partial<GameMetadata> = {}
): GameMetadata {
  return {
    ...gameMetadata,
    ...additionalMetadata,
  };
}

/**
 * Fetch metadata for all games across all providers.
 * @returns A list of game metadata objects with additional data merged.
 */
async function fetchAllProviders(): Promise<GameMetadata[]> {
  const fetchPromises = Object.values(providers).flatMap((provider) =>
    provider.gameCodes.map((gameCode) =>
      fetchMetadata(provider.baseUrl, gameCode).then((metadata) =>
        mergeMetadata(metadata, additionalMetadata[gameCode])
      )
    )
  );

  const results = await Promise.allSettled(fetchPromises);

  return results
    .filter(
      (result): result is PromiseFulfilledResult<GameMetadata> =>
        result.status === "fulfilled"
    )
    .map((result) => result.value);
}

export { fetchAllProviders, mergeMetadata };
