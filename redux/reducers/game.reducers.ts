import {GameType} from "../../models/game.type";
import {createStore, Reducer} from "redux";
import {ActionsEnum, GameActionTypes} from "../actions/actions-types";
import {RoundType} from "../../models/round.type";

const gameIS: GameType = {};

export const game: Reducer<GameType, GameActionTypes> = (state = gameIS, action: GameActionTypes): GameType => {
  switch (action.type) {
  case ActionsEnum.START_GAME:
    return {
      gameId: action.payload.gameId,
      userOne: action.payload.userOne,
      userTwo: action.payload.userTwo,
      rounds: []
    };
    case ActionsEnum.STORE_ROUND:
      let rounds: RoundType[] = [];
      if(state.rounds) {
        rounds = [...state.rounds, action.payload]
      }

      return {
        ...state,
        rounds
      }
      case ActionsEnum.COUNT_WIN_USER_ONE:
        let sumUOne = 1;
        if(state.userOneCounter) {
          sumUOne += state.userOneCounter;
        }
      return {
        ...state,
        userOneCounter: sumUOne
      }
      case ActionsEnum.COUNT_WIN_USER_TWO:
        let sumUTwo = 1;
        if(state.userTwoCounter) {
          sumUTwo += state.userTwoCounter;
        }
        return {
          ...state,
          userTwoCounter: sumUTwo
        }
      case ActionsEnum.PLAY_AGAIN:
        return {}
    default:
      return state;
  };
};

const store = createStore(game);

export default store;