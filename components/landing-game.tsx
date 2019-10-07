import React, {useState} from "react";
import {InitGameRequestType} from "../models/request/init-game.request.type";
import initGame from "../hooks/init-game.hook";

const LandingGame: React.FC = () => {
  const [userOneNickname, setUserOneNickname] = useState('');
  const [userTwoNickname, setUserTwoNickname] = useState('');

  const request: InitGameRequestType = {
    userOne: {userNickname: userOneNickname},
    userTwo: {userNickname: userTwoNickname}
  }

  const [response, sendRequest] = initGame(request);

  return (<div>
    <div className="d-flex justify-content-center">
      <h1 className="game-title">Game of Drones!</h1>
    </div>
    <label className="label-player">First player:</label>
    <input className="input-player" placeholder="nickname first player"
           onChange={event => setUserOneNickname(event.target.value)}/>
    <label className="label-player mt-3">Second player:</label>
    <input className="input-player" placeholder="nickname second player"
           onChange={event => setUserTwoNickname(event.target.value)}/>
    <div className="d-flex justify-content-center mt-3 mb-3">
      <button className="btn" onClick={() => sendRequest()}>Start Game</button>
    </div>
    {response.error ? <p className="error-msg">⚠️An error occurred: {response.error} 😔</p> : ''}
  </div>)
}

export default LandingGame;