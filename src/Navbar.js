
import myImage from './images/Logo.jpg'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo-container">
        <img src={myImage} className='img' alt="Project Logo" />
        <h1 className='image-header'>Word Hunt</h1>
      </div>
      
      
    </nav>
  );
}
