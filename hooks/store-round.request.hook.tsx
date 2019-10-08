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
import {GameActionTypes} from "../redux/actions/actions-types";
import {Dispatch} from "redux";
import environment from "../utils/enviroment";
import {computeRoundService} from "../services/compute-round.service";

const storeRoundRequest = (request: RoundRequestType, game: GameType): [ResponseType<WinnerResponseType>, () => Promise<void>] => {
  const dispatch: Dispatch<GameActionTypes> = useDispatch();
  const [response, setResponse] = useState<ResponseType<WinnerResponseType>>({
    data: null,
    error: null,
    isLoading: false,
  });

  const call = useCallback(async () => {
    setResponse(prev => ({...prev, isLoading: true}));
    try {
      const { API_URL } = environment;
      const resp = await axios.post<WinnerResponseType>(`${API_URL}/play-round`, request);
      setResponse({data: resp.data, isLoading: false, error: null});

      const computedRound = computeRoundService(resp.data, game.userOne, game.userTwo);
      dispatch(storeRound(computedRound.roundDone));
      if (computedRound.possibleEmperor) {
        dispatch(storeWinner(computedRound.possibleEmperor));
      }

    } catch (error) {
      setResponse(prev => ({...prev, isLoading: false, error: error.response.data.error.message}));
    }
  }, [request]);
  return [response, call];
};

export default storeRoundRequest;