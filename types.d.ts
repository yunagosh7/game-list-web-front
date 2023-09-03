interface GameResponse {
  title: string;
  short_description: string;
  thumbnail: string;
}

interface Game {
  id: number;
  title: string;
  image: string;
  desc: string;
} 

export {
  GameResponse,
  Game
}
