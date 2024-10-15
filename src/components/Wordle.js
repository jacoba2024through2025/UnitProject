import React, { useEffect } from 'react'
import useGame from '../hooks/useGame'
import Grid from '../components/Grid'


export default function Wordle({ wordSolution }) {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn, wrongLetters, messageToDisplay, loserMessage } = useGame(wordSolution);
  //listens for user input from their ke yboard
  
  useEffect(()=> {
    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp]);

  useEffect(()=> {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])


  const handleReload = () => {
    window.location.reload(); // Reloads the page
  };

  return (
    <div>
      <div>
        <Grid guesses={guesses} wordLength={wordSolution.length} />
      </div>
      <div className='current-guess-styling'>
        Current guess: {currentGuess}
        
      </div>
      <div className='letters-wrong-styling'>
          
          Letters Wrong: {wrongLetters}
      </div>

      {isCorrect && (
        <button className='button-active' onClick={handleReload}>Play Again</button>
      )}

      <div className='winner-message'>
        {messageToDisplay}
      </div>

      
      <div className='loser-message'> 
        {loserMessage}
      </div>
      
      {turn >= 6 && !isCorrect && (
        <button className='button-active' onClick={handleReload}>Try Again</button>
      )}
      
      

      

      
      
    </div>
    
  )
}
