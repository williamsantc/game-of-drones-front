import {InitGameType} from "../../models/init-game.type";
import {RoundType} from "../../models/round.type";

export enum ActionsEnum {
  START_GAME='START_GAME',
  STORE_ROUND='STORE_ROUND'
}

interface StartGameAction {
  type: typeof ActionsEnum.START_GAME;
  payload: InitGameType;
}

interface StoreRoundAction {
  type: typeof ActionsEnum.STORE_ROUND,
  payload: RoundType;
}

export type GameActionTypes = StartGameAction | StoreRoundAction // add more with |