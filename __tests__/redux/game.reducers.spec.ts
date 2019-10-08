import {game} from "../../redux/reducers/game.reducers";
import {playAgain, startGame, storeRound, storeWinner} from "../../redux/actions/actions";
import {InitGameType} from "../../models/init-game.type";
import {RoundType} from "../../models/round.type";
import {GameType} from "../../models/game.type";

describe('GameReducer', () => {

  it('should return initialized game on action START_GAME', () => {
    // Arrange
    const initGame: InitGameType = {
      userOne: 'test',
      userTwo: 'other',
      gameId: 1,
    };

    const expectedState = {
      gameId: initGame.gameId,
      userOne: initGame.userOne,
      userTwo: initGame.userTwo,
      rounds: [],
    };

    // Act
    const state = game({}, startGame(initGame));

    // Assert
    expect(state).toStrictEqual(expectedState);
  });

  it('should return state with new round on action STORE_ROUND', () => {
    // Arrange
    const round: RoundType = {
      winner: 'test',
    };

    const initialState: GameType = {
      gameId: 1,
      userOne: 'test',
      userTwo: 'other',
      rounds: [],
    };

    const expectedState: GameType = {
      gameId: 1,
      userOne: 'test',
      userTwo: 'other',
      rounds: [round],
    };

    // Act
    const state = game(initialState, storeRound(round));

    // Assert
    expect(state).toStrictEqual(expectedState);
  });

  it('should return state with winner on action STORE_WINNER', () => {
    // Arrange
    const winner = 'test';

    const initialState: GameType = {
      gameId: 1,
    };

    const expectedState: GameType = {
      gameId: 1,
      winner,
    };

    // Act
    const state = game(initialState, storeWinner(winner));

    // Assert
    expect(state).toStrictEqual(expectedState);
  });

  it('should return empty state on action PLAY_AGAIN', () => {
    // Arrange
    const initialState: GameType = {
      gameId: 1,
    };

    const expectedState: GameType = {};

    // Act
    const state = game(initialState, playAgain());

    // Assert
    expect(state).toStrictEqual(expectedState);
  });
});

export {
  // Use an empty export to please Babel's single file emit.
  // https://github.com/Microsoft/TypeScript/issues/15230
};
