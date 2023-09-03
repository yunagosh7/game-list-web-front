import { useEffect, useRef } from "react";
import "./App.css";
import { useGameStore } from "../store/GameStore";
import GameCard from "./components/GameCard";

function App() {
  const [games, fetchGames] = useGameStore((state) => [
    state.games,
    state.fetchGames
  ]);

  const refTest = useRef()

  useEffect(() => {
    fetchGames();
    
  }, []);
  return <>
  {games.map(game => (
    <main key={game.id} className="main">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </main>
  ))}
  </>;
}

export default App;
