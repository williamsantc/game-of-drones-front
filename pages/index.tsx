import Layout from "../layouts/layout";
import LandingGame from "../components/landing-game";
import { useSelector } from "react-redux";
import { GameType } from "../models/game.type";
import Playground from "../components/playground";
import Winner from "../components/winner";
import React from "react";

const Home: React.FC = () => {
  const game = useSelector<GameType, GameType>(state => state);

  return (
    <Layout>
      {!game.gameId ?
        <LandingGame /> : game.winner ?
          <Winner winnerName={game.winner} />
          : <Playground />}
    </Layout>
  );
};

export default Home;
