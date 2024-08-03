import { Request, Response } from "express";
import {
  fetchAllProviders,
  fetchGameMetadataByCode,
} from "../services/gameService";
import {
  microgamingMetadata,
  playtechMetadata,
  pragmaticMetadata,
} from "../data/testData";

export const getMicrogamingGameMetadata = (req: Request, res: Response) => {
  const gameCode = req.params.gameCode;
  res.json(microgamingMetadata[gameCode]);
};

export const getPlaytechGameMetadata = (req: Request, res: Response) => {
  const gameCode = req.params.gameCode;
  res.json(playtechMetadata[gameCode]);
};

export const getPragmaticGameMetadata = (req: Request, res: Response) => {
  const gameCode = req.params.gameCode;
  res.json(pragmaticMetadata[gameCode]);
};

export const getAllGames = async (req: Request, res: Response) => {
  try {
    const allGamesMetadata = await fetchAllProviders();
    res.json(allGamesMetadata);
  } catch (error) {
    res.status(500).json({ message: "Error fetching game metadata" });
  }
};

export const getGameByCode = async (req: Request, res: Response) => {
  const gameCode = req.params.gameCode;

  try {
    const metadata = await fetchGameMetadataByCode(gameCode);
    if (metadata) {
      return res.json(metadata);
    }
    res.status(404).json({ message: `Game with code ${gameCode} not found.` });
  } catch (error) {
    res.status(500).json({ message: "Error fetching game metadata" });
  }
};
