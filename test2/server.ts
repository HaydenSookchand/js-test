import express from "express";
import axios from "axios";
import { fetchAllProviders } from "./fetchData";
import { GameMetadata } from "./mockData/GameMetadata";
import { providers } from "./config";
import { MetadataContext } from "./strategies/MetadataContext";
import { MicrogamingStrategy } from "./strategies/MicrogamingStrategy";
import { PlaytechStrategy } from "./strategies/PlaytechStrategy";
import { PragmaticStrategy } from "./strategies/PragmaticStrategy";

const app = express();
const port = 3000;

app.get("/:provider/game/:gameCode/metadata", (req, res) => {
  const { provider, gameCode } = req.params;
  let context: MetadataContext;

  switch (provider) {
    case "microgaming":
      context = new MetadataContext(new MicrogamingStrategy());
      break;
    case "playtech":
      context = new MetadataContext(new PlaytechStrategy());
      break;
    case "pragmatic":
      context = new MetadataContext(new PragmaticStrategy());
      break;
    default:
      return res.status(404).json({ message: "Provider not found." });
  }

  const metadata = context.getMetadata(gameCode);

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
        const metadata = response.data;
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
