import {InitGameType} from "../../models/init-game.type";
import {RoundType} from "../../models/round.type";
import {startGame, storeRound, storeWinner, playAgain} from "./actions";

export enum ActionsEnum {
  START_GAME = 'START_GAME',
  STORE_ROUND = 'STORE_ROUND',
  STORE_WINNER = 'STORE_WINNER',
  PLAY_AGAIN = 'PLAY_AGAIN',
}

export type GameActionTypes = ReturnType<typeof startGame> |
    ReturnType<typeof storeRound> |
    ReturnType<typeof storeWinner> |
    ReturnType<typeof playAgain>;