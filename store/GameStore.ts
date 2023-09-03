import { create } from "zustand";
import { Game, GameResponse } from "../types";

interface GameStore {
  games: Game[];
  fetchGames: () => void;
}


export const useGameStore = create<GameStore>()((set) => ({
  games: [],
  fetchGames: async () => {
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc";
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ddbada9357mshc574fe51222235bp1df5bcjsn8576f2c1aaaa',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    const res = await fetch(url, options);
    const data: Array<GameResponse> = await res.json()
    let games: Game[] = [];
    data.forEach(gameResponse => {
      const game: Game = {
        title: gameResponse.title,
        desc: gameResponse.short_description,
        image:  gameResponse.thumbnail,
        genre: gameResponse.genre,
        id: gameResponse.id,
        platform: gameResponse.platform 
      }
      games.push(game)
    })
    set({games})
    
  }
}))
