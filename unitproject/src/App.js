import Navbar from './Navbar'
import Travel from './Travel'
import About from './About'
import Home from './Home'
import data from './data.json'
console.log(data)

function App() {
	
	


	let component
	switch (window.location.pathname) {
		case "/":
			component = <Home />
			break
		case "/travel":
			component = <Travel />
			break
		case "/about":
			component = <About />
			break
		default:
			break

	}

	return (
		<>
			<Navbar />
			{component}
		</>
		

		
	);
}

export default App;

