import React from 'react'
import Row from './Row'
export default function Grid({ currentGuess, guesses, turn, wordLength }) {
  return (
    <div>
        {guesses.map((guessingGrid, i) =>{
          if (turn === i) {
            return <Row key={i} currentGuess={currentGuess}/>
          }
            return <Row key={i} guess={guessingGrid} wordLength={wordLength}/>
        })};
    </div>
  )
}
