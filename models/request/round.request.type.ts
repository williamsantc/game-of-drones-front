import {MovementsType} from "../movements.type";

export interface RoundRequestType {
  gameId: number | undefined;
  movementUserOne: MovementsType | undefined;
  movementUserTwo: MovementsType | undefined;
}