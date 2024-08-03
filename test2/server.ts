import express from "express";
import axios from "axios";
import { fetchAllProviders } from "./fetchData";
import {
  microgamingMetadata,
  playtechMetadata,
  pragmaticMetadata,
} from "./mockData/gameData";
import { GameMetadata } from "./mockData/GameMetadata";
import { providers } from "./config";
import { enhanceMetadata } from "./utils";

const app = express();
const port = 3000;

const getMetadataByProvider = (
  providerMetadata: Record<string, GameMetadata>,
  gameCode: string
) => {
  return providerMetadata[gameCode]
    ? enhanceMetadata(providerMetadata[gameCode])
    : null;
};

app.get("/:provider/game/:gameCode/metadata", (req, res) => {
  const { provider, gameCode } = req.params;
  let metadata: GameMetadata | null = null;

  switch (provider) {
    case "microgaming":
      metadata = getMetadataByProvider(microgamingMetadata, gameCode);
      break;
    case "playtech":
      metadata = getMetadataByProvider(playtechMetadata, gameCode);
      break;
    case "pragmatic":
      metadata = getMetadataByProvider(pragmaticMetadata, gameCode);
      break;
    default:
      return res.status(404).json({ message: "Provider not found." });
  }

  if (metadata) {
    res.json(metadata);
  } else {
    res.status(404).json({ message: `Game with code ${gameCode} not found.` });
  }
});

app.get("/games/all", async (req, res) => {
  try {
    const allGamesMetadata: GameMetadata[] = await fetchAllProviders();
    res.json(allGamesMetadata);
  } catch (error) {
    res.status(500).json({ message: "Error fetching game metadata" });
  }
});

app.get("/games/:gameCode", async (req, res) => {
  const { gameCode } = req.params;

  for (const provider of Object.values(providers)) {
    try {
      const response = await axios.get<GameMetadata>(
        `${provider.baseUrl}/game/${gameCode}/metadata`
      );
      if (response.data) {
        const metadata = enhanceMetadata(response.data);
        return res.json(metadata);
      }
    } catch (error) {
      continue;
    }
  }

  res.status(404).json({ message: `Game with code ${gameCode} not found.` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
