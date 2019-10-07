import Layout from "../layouts/layout";
import LandingGame from "../components/landing-game";
import {useSelector} from "react-redux";
import {GameType} from "../models/game.type";
import Playground from "../components/playground";
import React from "react";


const Home: React.FC = () => {
  const gameId = useSelector<GameType, number | undefined>(state => state.gameId);

  return (
      <Layout>
        {!gameId ? <LandingGame/> : <Playground/>}
      </Layout>
  )
};

export default Home
