import * as React from "react";
import {MovementsType} from "../models/movements.type";

interface UserChoiceAttributes {
  saveMovement: (movement: MovementsType) => void;
  nickname: string | undefined;
  round: number;
}
const UserChoice: React.FC<UserChoiceAttributes> = ({saveMovement, nickname, round}) => {

  return (<div>
    <div className="d-flex justify-content-center">
      <h1 className="round-title mb-1">Round {round}</h1>
    </div>
    <div className="d-flex justify-content-center">
      <h1 className="round-title mt-1">Player: {nickname}</h1>
    </div>
    <div className="d-flex justify-content-center">
      <button className="btn-movement"
              onClick={() => saveMovement(MovementsType.ROCK)}>{MovementsType.ROCK}!
      </button>
      <button className="btn-movement ml-3"
              onClick={() => saveMovement(MovementsType.SCISSORS)}>{MovementsType.SCISSORS}!
      </button>
      <button className="btn-movement ml-3"
              onClick={() => saveMovement(MovementsType.PAPER)}>{MovementsType.PAPER}!
      </button>
    </div>
  </div>);
};

export default UserChoice;