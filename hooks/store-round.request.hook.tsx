import {RequestType} from "../models/request/request.type";
import {useDispatch} from "react-redux";
import {useCallback, useState} from "react";
import axios from "axios";
import {RoundRequestType} from "../models/request/round.request.type";
import {WinnerRequestType} from "../models/request/winner.request.type";
import {storeRound, storeWinner} from "../redux/actions/actions";
import {RoundWinnerEnum} from "../models/round-winner.enum";
import {GameType} from "../models/game.type";
import {RoundType} from "../models/round.type";

const storeRoundRequest = (request: RoundRequestType, game: GameType): [RequestType<WinnerRequestType>, () => Promise<void>] => {
  const dispatch = useDispatch();
  const [response, setResponse] = useState<RequestType<WinnerRequestType>>({
    data: null,
    error: null,
    isLoading: false,
  });

  const call = useCallback(async () => {
    setResponse(prev => ({...prev, isLoading: true}));
    try {
      const resp = await axios.post<WinnerRequestType>('http://localhost:3000/play-round', request);
      setResponse({data: resp.data, isLoading: false, error: null});
      const roundDone: RoundType = {};
      let possibleEmperor: string | undefined = '';
      if (resp.data.winner === RoundWinnerEnum.USER_ONE) {
        roundDone.winner = `${game.userOne} 🎉`;
        possibleEmperor = game.userOne;
      } else if (resp.data.winner === RoundWinnerEnum.USER_TWO) {
        roundDone.winner = `${game.userTwo} 🎉`;
        possibleEmperor = game.userTwo;
      } else {
        roundDone.winner = 'TIE 😵';
      }
      dispatch(storeRound(roundDone));

      if (resp.data.winner !== RoundWinnerEnum.TIE && !resp.data.continuePlaying && possibleEmperor) {
        dispatch(storeWinner(possibleEmperor));
      }
    } catch (error) {
      setResponse(prev => ({...prev, isLoading: false, error: error.response.data.error.message}));
    }
  }, [request]);
  return [response, call];
};

export default storeRoundRequest;