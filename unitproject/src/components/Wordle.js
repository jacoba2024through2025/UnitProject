import React, { useEffect } from 'react'
import useGame from '../hooks/useGame'
import Grid from '../components/Grid'


export default function Wordle({ wordSolution }) {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn } = useGame(wordSolution);

  //listens for user input from their keyboard
  useEffect(()=> {
    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp]);

  useEffect(()=> {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <div>
      <div>
        <Grid guesses={guesses} wordLength={wordSolution.length} />
      </div>
      <div className='current-guess-styling'>
        Current guess: {currentGuess}
      </div>
      
    </div>
    
  )
}
