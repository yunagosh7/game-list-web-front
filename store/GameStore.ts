import { create } from "zustand";
import { Game } from "../types";

interface GameStore {
    games: Game[];
    fetchGames: () => void;
}


export const useGameStore = create<GameStore>()((set) => ({
    games: [],
    fetchGames: async () => {
        const res = await fetch("https://www.freetogame.com/api/games", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            mode: "no-cors",
            method: "GET"
        });    
        const json = await res.json();
        console.log(json);
        
        // set({games: games})
    }
}))
