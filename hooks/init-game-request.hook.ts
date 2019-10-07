import {InitGameRequestType} from "../models/request/init-game.request.type";
import {RequestType} from "../models/request/request.type";
import {GameStartedType} from "../models/game-started.type";
import {useDispatch} from "react-redux";
import {useCallback, useState} from "react";
import axios from "axios";
import {InitGameType} from "../models/init-game.type";
import {startGame} from "../redux/actions/actions";

const initGameRequest = (request: InitGameRequestType): [RequestType<GameStartedType>, () => Promise<void>] => {
  const dispatch = useDispatch();
  const [response, setResponse] = useState<RequestType<GameStartedType>>({
    data: null,
    error: null,
    isLoading: false,
  });

  const call = useCallback(async () => {
    setResponse(prev => ({...prev, isLoading: true}));
    try {
      const resp = await axios.post<GameStartedType>('http://localhost:3000/save-players', request);
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