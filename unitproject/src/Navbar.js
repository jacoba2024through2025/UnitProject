
import myImage from './images/Logo.png'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo-container">
        <img src={myImage} className='img' alt="Project Logo" />
        <h1>Beyond Borders</h1>
      </div>
      <div className="icon-container">
      <ul>
      <li>
        <a href="/">
            <i class="fa-solid fa-house"></i>
            <span className="button-text">Home</span>
          </a>
        
        </li>

        <li>
          
        <a href="travel">
            <i className="fa-solid fa-location-dot"></i>
            <span className="button-text">View Travel Plans</span>
          </a>
        </li>

        <li>
        <a href="about">
            <i class="fa-solid fa-circle-info"></i>
            <span className="button-text">About</span>
          </a>
        </li>

        
      </ul>
      </div>
      
    </nav>
  );
}
