import { useEffect } from 'react'
import './App.css'
import {useGameStore} from '../store/GameStore'

function App() {
  const [ fetchGames ] = useGameStore((state) => [
    state.fetchGames
  ])
  

  useEffect(() => {
    fetchGames()
  }, [])
  return (
    <>
    
    </>
  )
}

export default App
