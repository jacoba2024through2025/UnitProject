import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './Navbar';
import Message from './components/Message';
import Wordle from './components/Wordle';

function App() {
  const [wordSolution, setWord] = useState('');

  const changeWordToShow = useCallback(() => {
    const randomWords = [
      'apple', 'banana', 'cherry', 'date', 'elderberry',
      'fig', 'grape', 'honeydew', 'kiwi', 'lemon',
      'mango', 'nectarine', 'orange', 'papaya', 'quince',
      'raspberry', 'strawberry', 'tangerine', 'watermelon',
	  'procurement', 'management', 'community', 'corelogic','slack', 'gamble',
	  'fire', 'arson', 'grand', 'grape', 'float', 'osteoperosis', 'scoliosis',
	  'power', 'alien', 'minecart', 'versus', 'rhombus', 
	  'tetradecahedron', 'shapes', 'ham', 'egg', 'hungry', 'hamburger',
	  'duck', 'javascript', 'benchmark', 'hexagon', 'sulfur', 'dioxide', 'airbnb'
    ];

    const randomIndex = Math.floor(Math.random() * randomWords.length);
    setWord(randomWords[randomIndex]);
  }, []);

  useEffect(() => {
    changeWordToShow();
  }, [changeWordToShow]);
  console.log(wordSolution)
  return (
    <>
      <Navbar />
      <Message />
	  
      {wordSolution && <Wordle wordSolution={wordSolution} />}
      
    </>
  );
}

export default App;


/*import React, { useState,useEffect} from 'react'
import Navbar from './Navbar'
import Message from './components/Message'
import Wordle from './components/Wordle'




function App() {
	//wordSolution is the random solution for each game the user wants to play
	const [wordSolution, setWord] = useState('')
	
	var url = './data_folder/data.json'
		
	const changeWordToShow= () =>{
	fetch('https://random-word-api.herokuapp.com/word')
	fetch(url)
	.then((response) => {
		
		return response.json();
		})
	.then(data => {
		console.log(data)
		if (data.length > 0) {
			for(let word of data){
				setWord(word)
				
				break
				
			}
		}
		
		
	}).catch(err => {
		
		console.log("Error " + err);
	});
	}

	


	useEffect(() => {
        changeWordToShow();
    }, []);

	
	
	return (
		<>
			<Navbar />
			<Message />
			{wordSolution && <Wordle wordSolution={wordSolution} /> }
			
				<div className='solution-length'>
					Length: {wordSolution.length}
					
				</div>
			
			
			
			
			
		</>
		
		
		
	
		
	);
//}


	export default App;*/
	
	
		  
	


	

