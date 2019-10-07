import {action} from "typesafe-actions";
import {ActionsEnum} from "./actions-types";
import {InitGameType} from "../../models/init-game.type";
import {RoundType} from "../../models/round.type";

export const startGame = (payload: InitGameType) => action(ActionsEnum.START_GAME, payload);
export const storeRound = (payload: RoundType) => action(ActionsEnum.STORE_ROUND, payload);

export const countWinUserOne = () => action(ActionsEnum.COUNT_WIN_USER_ONE);
export const countWinUserTwo = () => action(ActionsEnum.COUNT_WIN_USER_TWO);
export  const playAgain = () => action(ActionsEnum.PLAY_AGAIN)