import React from 'react'
import useGame from '../hooks/useGame'


export default function Message({wordSolution}) {
  let {  isCorrect } = useGame(wordSolution);
  console.log(isCorrect)
  return (
    <h1 className='header-style'>Guess A Random Word!</h1>
  )
}
