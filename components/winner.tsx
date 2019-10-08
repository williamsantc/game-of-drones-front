import React from 'react';
import {useDispatch} from "react-redux";
import {playAgain} from "../redux/actions/actions";
import {GameActionTypes} from "../redux/actions/actions-types";
import {Dispatch} from "redux";

interface WinnerAttributes {
  winnerName: string|undefined;
}

const Winner: React.FC<WinnerAttributes> = ({winnerName}) => {

  const dispatch: Dispatch<GameActionTypes> = useDispatch();

  const again = () => {
    dispatch(playAgain());
  };
  return <div>
    <div className="d-flex justify-content-center">
      <h1 className="game-title">We have a WINNER!</h1>
    </div>
    <div className="d-flex justify-content-center mt-4">
      <h1 className="game-title">😎 {winnerName} is the new EMPEROR! 😎</h1>
    </div>
    <div className="d-flex justify-content-center mt-3 mb-3">
      <button className="btn" onClick={() => again()}>Play Again</button>
    </div>
  </div>;
};

export default Winner;