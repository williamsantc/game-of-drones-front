import {WinnerResponseType} from "../models/http/winner.response.type";
import {RoundType} from "../models/round.type";
import {RoundWinnerEnum} from "../models/round-winner.enum";

export const computeRoundService = (winnerResponse: WinnerResponseType, userOne: string|undefined, userTwo: string|undefined)
    : { roundDone: RoundType, possibleEmperor?: string } => {
  const roundDone: RoundType = {};
  let possibleEmperor: string | undefined = '';
  if (winnerResponse.winner === RoundWinnerEnum.USER_ONE) {
    roundDone.winner = `${userOne} 🎉`;
    possibleEmperor = userOne;
  } else if (winnerResponse.winner === RoundWinnerEnum.USER_TWO) {
    roundDone.winner = `${userTwo} 🎉`;
    possibleEmperor = userTwo;
  } else {
    roundDone.winner = 'TIE 😵';
  }

  const computed: ReturnType<typeof computeRoundService> = {
    roundDone,
  };

  if (winnerResponse.winner !== RoundWinnerEnum.TIE && !winnerResponse.continuePlaying && possibleEmperor) {
    computed.possibleEmperor = possibleEmperor;
  }

  return computed;
};