import {WinnerResponseType} from "../../models/http/winner.response.type";
import {RoundWinnerEnum} from "../../models/round-winner.enum";
import {computeRound} from "../../hooks/store-round.request.hook";

describe('StoreRoundRequest', () => {

  const USER_ONE = 'test';
  const USER_TWO = 'other';

  it('should return emperor empty and continue playing', function () {

    const winnerResponse: WinnerResponseType = {
      winner: RoundWinnerEnum.USER_ONE,
      continuePlaying: true
    }

    const computedRound = computeRound(winnerResponse, USER_ONE, USER_TWO)

    expect(computedRound.possibleEmperor).toBeUndefined();

  });

  it('should return emperor user one and stop playing', function () {

    const winnerResponse: WinnerResponseType = {
      winner: RoundWinnerEnum.USER_ONE,
      continuePlaying: false
    }

    const computedRound = computeRound(winnerResponse, USER_ONE, USER_TWO)

    expect(computedRound.possibleEmperor).toBe(USER_ONE);

  });

  it('should return emperor user two and stop playing', function () {

    const winnerResponse: WinnerResponseType = {
      winner: RoundWinnerEnum.USER_TWO,
      continuePlaying: false
    }

    const computedRound = computeRound(winnerResponse, USER_ONE, USER_TWO)

    expect(computedRound.possibleEmperor).toBe(USER_TWO);

  });

  it('should return tie game', function () {

    const tieGame = 'TIE';

    const winnerResponse: WinnerResponseType = {
      winner: RoundWinnerEnum.TIE,
      continuePlaying: true
    }

    const computedRound = computeRound(winnerResponse, USER_ONE, USER_TWO)

    expect(computedRound.possibleEmperor).toBeUndefined();
    expect(computedRound.roundDone.winner).toContain(tieGame);

  });

})

export {
  // Use an empty export to please Babel's single file emit.
  // https://github.com/Microsoft/TypeScript/issues/15230
}