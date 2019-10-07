import React, {useState} from 'react';
import UserChoice from "./user-choice";
import {MovementsType} from "../models/movements.type";
import {useSelector} from "react-redux";
import {GameType} from "../models/game.type";
import {RoundRequestType} from "../models/request/round.request.type";
import storeRound from "../hooks/store-round.hook";

interface PlaygroundAttributes {

}

const Playground: React.FC = () => {
  const game = useSelector<GameType, GameType>(state => state)
  const [playerOneMovement, setPlayerOneMovement] = useState<MovementsType>();
  const [playerTwoMovement, setPlayerTwoMovement] = useState<MovementsType>();

  const roundRequest: RoundRequestType = {
    gameId: game.gameId,
    movementUserOne: playerOneMovement,
    movementUserTwo: playerTwoMovement
  }

  const [response, sendRequest] = storeRound(roundRequest, game);

  const match = () => {
    sendRequest().then(() => {
      setPlayerTwoMovement(undefined);
      setPlayerOneMovement(undefined);
    });
  }

  return <div>
    <UserChoice saveMovement={!playerOneMovement ? setPlayerOneMovement : setPlayerTwoMovement}
    nickname={!playerOneMovement ? game.userOne : game.userTwo}
    round={game.rounds ? game.rounds.length + 1 : 0}/>
    {playerTwoMovement ? <button onClick={match} className="btn-match">MATCH!</button> : ''}
    <div className="d-flex justify-content-center">
      <h1 className="round-title mb-1">Scoreboard</h1>
    </div>
    {game.rounds && game.rounds.length > 0 ? game.rounds.map((round, idx) => <div
        className="row justify-content-center mt-1" key={idx}>
      <div className="error-msg col">{idx + 1}</div><div className="error-msg col text-align-center">{round.winner}</div>
    </div>) : <p className="error-msg">Nothing to show yet, I'm waiting for u guys 🕓🕔</p>}
  </div>
}
export default Playground;