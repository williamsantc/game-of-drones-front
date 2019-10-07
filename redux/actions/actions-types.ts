import {InitGameType} from "../../models/init-game.type";
import {RoundType} from "../../models/round.type";

export enum ActionsEnum {
  START_GAME='START_GAME',
  STORE_ROUND='STORE_ROUND',
  COUNT_WIN_USER_ONE='COUNT_WIN_USER_ONE',
  COUNT_WIN_USER_TWO='COUNT_WIN_USER_TWO',
  PLAY_AGAIN='PLAY_AGAIN'
}

interface StartGameAction {
  type: typeof ActionsEnum.START_GAME;
  payload: InitGameType;
}

interface StoreRoundAction {
  type: typeof ActionsEnum.STORE_ROUND,
  payload: RoundType;
}

interface CountWinUserOneAction {
  type: typeof ActionsEnum.COUNT_WIN_USER_ONE
}

interface CountWinUserTwoAction {
  type: typeof ActionsEnum.COUNT_WIN_USER_TWO
}

interface StartNewGameAction {
  type: typeof ActionsEnum.PLAY_AGAIN
}

export type GameActionTypes = StartGameAction | StoreRoundAction | CountWinUserOneAction | CountWinUserTwoAction | StartNewGameAction