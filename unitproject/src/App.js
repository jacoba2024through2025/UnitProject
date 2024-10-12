import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Message from './components/Message'
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
}


	export default App;
	
	  
	


	

