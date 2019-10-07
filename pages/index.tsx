import Layout from "../layouts/layout";
import LandingGame from "../components/landing-game";
import {useSelector} from "react-redux";
import {GameType} from "../models/game.type";
import Playground from "../components/playground";
import Winner from "../components/winner";

const Home: React.FC = () => {
  const game = useSelector<GameType, GameType>(state => state)

  return (
      <Layout>
        {!game.gameId ?
            <LandingGame/> : (game.userOneCounter && game.userOneCounter > 2) || (game.userTwoCounter && game.userTwoCounter > 2) ?
                <Winner
                    winnerName={game.userOneCounter && !game.userTwoCounter ||
                    (game.userTwoCounter && game.userOneCounter && game.userOneCounter > game.userTwoCounter)
                        ? game.userOne : game.userTwo}/>
                : <Playground/>}
      </Layout>
  )
};

export default Home
