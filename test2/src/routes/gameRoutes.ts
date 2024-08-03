import { Router } from "express";
import {
  getAllGames,
  getGameByCode,
  getMicrogamingGameMetadata,
  getPlaytechGameMetadata,
  getPragmaticGameMetadata,
} from "../controllers/gameController";

const router = Router();

router.get("/microgaming/game/:gameCode/metadata", getMicrogamingGameMetadata);
router.get("/playtech/game/:gameCode/metadata", getPlaytechGameMetadata);
router.get("/pragmatic/game/:gameCode/metadata", getPragmaticGameMetadata);
router.get("/all", getAllGames);
router.get("/:gameCode", getGameByCode);

export default router;
