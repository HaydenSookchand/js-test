import axios from "axios";
import { providers } from "./config";
import { GameMetadata } from "./testdata";

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
      `Error fetching metadata for game ${gameCode} from ${baseUrl}:`
    );
    throw error;
  }
}

async function fetchAllProviders(): Promise<GameMetadata[]> {
  const fetchPromises: Promise<GameMetadata>[] = [];

  for (const provider of Object.values(providers)) {
    for (const gameCode of provider.gameCodes) {
      fetchPromises.push(fetchMetadata(provider.baseUrl, gameCode));
    }
  }

  const results = await Promise.allSettled(fetchPromises);

  const fulfilledResults = results
    .filter(
      (result): result is PromiseFulfilledResult<GameMetadata> =>
        result.status === "fulfilled"
    )
    .map((result) => result.value);

  return fulfilledResults;
}

export { fetchAllProviders };
