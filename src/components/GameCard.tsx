import React from 'react'
import "../styles/gamecard.css"
import { Game } from '../../types'

type GameCardProps = {
  game: Game
}

function GameCard({game}: GameCardProps) {
  return (
    <div className='game-card'>
      <img className="game-img" src={game.image} alt={game.title} />
      <div className="game-data-container">
        <h3 className="game-title">{game.title}</h3>
        <p className="game-desc">{game.desc}</p>
        <h4 className='game-platform'>{game.platform}</h4>
        <h4>{game.genre}</h4>
      </div>
    </div>
  )
}

export default GameCard