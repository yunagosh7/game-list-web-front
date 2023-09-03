import React from 'react'
import "../styles/gamecard.css"
import { Game } from '../../types'

type GameCardProps = {
  game: Game
}

function GameCard({game}: GameCardProps) {
  return (
    <div className='game-card'>
      <h3 className="game-title">{game.title}</h3>
      <img className="game-img" src={game.image} alt={game.title} />
      <p className="game-desc">{game.desc}</p>
    </div>
  )
}

export default GameCard