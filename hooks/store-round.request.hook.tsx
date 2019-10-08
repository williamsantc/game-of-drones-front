import {ResponseType} from "../models/http/response.type";
import {useDispatch} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {RoundRequestType} from "../models/http/round.request.type";
import {WinnerResponseType} from "../models/http/winner.response.type";
import {storeRound, storeWinner} from "../redux/actions/actions";
import {RoundWinnerEnum} from "../models/round-winner.enum";
import {GameType} from "../models/game.type";
import {RoundType} from "../models/round.type";

const storeRoundRequest = (request: RoundRequestType, game: GameType): [ResponseType<WinnerResponseType>, () => Promise<void>] => {
  const dispatch = useDispatch();
  const [response, setResponse] = useState<ResponseType<WinnerResponseType>>({
    data: null,
    error: null,
    isLoading: false,
  });

  const call = useCallback(async () => {
    setResponse(prev => ({...prev, isLoading: true}));
    try {
      const resp = await axios.post<WinnerResponseType>('http://localhost:3000/play-round', request);
      setResponse({data: resp.data, isLoading: false, error: null});

      const computedRound = computeRound(resp.data, game.userOne, game.userTwo);
      dispatch(storeRound(computedRound.roundDone));
      if(computedRound.possibleEmperor) {
        dispatch(storeWinner(computedRound.possibleEmperor));
      }

    } catch (error) {
      setResponse(prev => ({...prev, isLoading: false, error: error.response.data.error.message}));
    }
  }, [request]);
  return [response, call];
};

export const computeRound = (winnerResponse: WinnerResponseType, userOne: string|undefined, userTwo: string|undefined)
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

  const computed: ReturnType<typeof computeRound> = {
    roundDone
  }

  if (winnerResponse.winner !== RoundWinnerEnum.TIE && !winnerResponse.continuePlaying && possibleEmperor) {
    computed.possibleEmperor = possibleEmperor;
  }

  return computed;
}

export default storeRoundRequest;