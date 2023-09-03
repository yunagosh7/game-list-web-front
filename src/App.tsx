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
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log("entry: ", entry);
    })
    observer.observe(refTest.current);
    
  }, []);
  return <>
  {games.map(game => (
    <main ref={refTest} className="main">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </main>
  ))}
  </>;
}

export default App;
