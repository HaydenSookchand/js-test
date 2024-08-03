import express from "express";
import { fetchAllProviders } from "./fetchData";
import {
  microgamingMetadata,
  playtechMetadata,
  pragmaticMetadata,
  GameMetadata,
} from "./testdata";
import { providers } from "./config";
import axios from "axios";

const app = express();
const port = 3000;

app.get("/microgaming/game/:gameCode/metadata", (req, res) => {
  const gameCode = req.params.gameCode;
  res.json(microgamingMetadata[gameCode]);
});

app.get("/playtech/game/:gameCode/metadata", (req, res) => {
  const gameCode = req.params.gameCode;
  res.json(playtechMetadata[gameCode]);
});

app.get("/pragmatic/game/:gameCode/metadata", (req, res) => {
  const gameCode = req.params.gameCode;
  res.json(pragmaticMetadata[gameCode]);
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
  const gameCode = req.params.gameCode;

  // Iterate over each provider to find the game metadata
  for (const provider of Object.values(providers)) {
    try {
      const metadata = await axios.get<GameMetadata>(
        `${provider.baseUrl}/game/${gameCode}/metadata`
      );
      if (metadata.data) {
        return res.json(metadata.data);
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
