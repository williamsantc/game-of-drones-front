import {action} from "typesafe-actions";
import {ActionsEnum} from "./actions-types";
import {InitGameType} from "../../models/init-game.type";
import {RoundType} from "../../models/round.type";

export const startGame = (payload: InitGameType) => action(ActionsEnum.START_GAME, payload);
export const storeRound = (payload: RoundType) => action(ActionsEnum.STORE_ROUND, payload);