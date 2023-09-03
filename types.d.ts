interface GameResponse {
  id: number;
  title: string;
  short_description: string;
  thumbnail: string;
  platform: string;
  genre: string;
}

interface Game {
  id: number;
  title: string;
  image: string;
  desc: string;
  platform: string;
  genre: string;
} 

export {
  GameResponse,
  Game
}
