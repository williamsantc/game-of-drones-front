import {WinnerResponseType} from "../../models/http/winner.response.type";
import {RoundWinnerEnum} from "../../models/round-winner.enum";
import {computeRoundService} from "../../services/compute-round.service";

describe('ComputeRoundService', () => {

  const USER_ONE = 'test';
  const USER_TWO = 'other';

  it('should return emperor empty and continue playing', function () {

    // Arrange
    const winnerResponse: WinnerResponseType = {
      winner: RoundWinnerEnum.USER_ONE,
      continuePlaying: true,
    };

    // Act
    const computedRound = computeRoundService(winnerResponse, USER_ONE, USER_TWO);

    // Assert
    expect(computedRound.possibleEmperor).toBeUndefined();

  });

  it('should return emperor user one and stop playing', function () {

    // Arrange
    const winnerResponse: WinnerResponseType = {
      winner: RoundWinnerEnum.USER_ONE,
      continuePlaying: false,
    };

    // Act
    const computedRound = computeRoundService(winnerResponse, USER_ONE, USER_TWO);

    // Assert
    expect(computedRound.possibleEmperor).toBe(USER_ONE);

  });

  it('should return emperor user two and stop playing', function () {

    // Arrange
    const winnerResponse: WinnerResponseType = {
      winner: RoundWinnerEnum.USER_TWO,
      continuePlaying: false,
    };

    // Act
    const computedRound = computeRoundService(winnerResponse, USER_ONE, USER_TWO);

    // Assert
    expect(computedRound.possibleEmperor).toBe(USER_TWO);

  });

  it('should return tie game', function () {

    // Arrange
    const tieGame = 'TIE';
    const winnerResponse: WinnerResponseType = {
      winner: RoundWinnerEnum.TIE,
      continuePlaying: true,
    };

    // Act
    const computedRound = computeRoundService(winnerResponse, USER_ONE, USER_TWO);

    // Assert
    expect(computedRound.possibleEmperor).toBeUndefined();
    expect(computedRound.roundDone.winner).toContain(tieGame);
  });

});

export {
  // Use an empty export to please Babel's single file emit.
  // https://github.com/Microsoft/TypeScript/issues/15230
};