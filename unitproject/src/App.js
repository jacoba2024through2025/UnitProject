import React, { useState } from 'react'
import Wordle from './components/Wordle'



function App() {
	//wordSolution is the random solution for each game the user wants to play
	const [wordSolution, setWord] = useState('')
		
	const changeWordToShow= () =>{
	fetch('https://random-word-api.herokuapp.com/word')
	.then((response) => {
		return response.json();
		})
	.then(data => {
		if (data.length > 0) {
			for(let word of data){
				setWord(word);
				
				break;
				
			}
		}
		
		
	}).catch(err => {
		
		console.log("Error " + err);
	});
	}
	
	return (
		<>
			<button type= "button" onClick={()=>changeWordToShow()}>Change Word </button>
			{wordSolution && <Wordle wordSolution={wordSolution} /> }
			Word name: {wordSolution} Length: {wordSolution.length}
			
		</>
		
		
		
	
		
	);
}


	export default App;
	
	  
	


	

