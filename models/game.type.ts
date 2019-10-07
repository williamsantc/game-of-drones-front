import {RoundType} from "./round.type";

export interface GameType {
  gameId?: number;
  userOne?: string;
  userTwo?: string;
  rounds?: RoundType[];
}