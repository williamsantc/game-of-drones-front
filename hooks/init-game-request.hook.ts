import {InitGameRequestType} from "../models/http/init-game.request.type";
import {ResponseType} from "../models/http/response.type";
import {GameStartedType} from "../models/game-started.type";
import {useDispatch} from "react-redux";
import {useCallback, useState} from "react";
import axios from "axios";
import {InitGameType} from "../models/init-game.type";
import {startGame} from "../redux/actions/actions";
import {GameActionTypes} from "../redux/actions/actions-types";
import {Dispatch} from "redux";
import getConfig from 'next/config';
import enviroment from "../utils/enviroment";

const initGameRequest = (request: InitGameRequestType): [ResponseType<GameStartedType>, () => Promise<void>] => {
  const dispatch: Dispatch<GameActionTypes> = useDispatch();
  const [response, setResponse] = useState<ResponseType<GameStartedType>>({
    data: null,
    error: null,
    isLoading: false,
  });

  const call = useCallback(async () => {
    setResponse(prev => ({...prev, isLoading: true}));
    try {
      const { API_URL } = enviroment;
      const resp = await axios.post<GameStartedType>(`${API_URL}/save-players`, request);
      setResponse({data: resp.data, isLoading: false, error: null});
      const gamePros: InitGameType = {
        gameId: resp.data.gameId,
        userTwo: request.userTwo.userNickname.toUpperCase(),
        userOne: request.userOne.userNickname.toUpperCase(),
      };
      dispatch(startGame(gamePros));
    } catch (error) {
      setResponse(prev => ({...prev, isLoading: false, error: error.response.data.error.message}));
    }
  }, [request]);
  return [response, call];
};

export default initGameRequest;