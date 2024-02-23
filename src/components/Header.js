import logo from '../images/logo.png'
import { useState } from 'react';

function Header() {

  const [color , setColor] = useState(false)
  const changeColor =() => {
    if(window.scrollY >= 56){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  window.addEventListener("scroll" , changeColor)

  return (
    
      <div className='header'>
        <nav className={color ? "navbar navbar-expand-lg navbar-dark fixed-top nav-scroll" : "navbar navbar-expand-lg navbar-dark fixed-top"}>
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} width="70" height="70" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
              </ul>
  
              <div className='header-icons mb-3 mb-lg-0 mx-0 mx-lg-4'>
                <a href='#'><i class="fab fa-linkedin-in"></i></a>
                <a href='#'><i class="fab fa-facebook-f i-middle"></i></a>
                <a href='#'><i class="fab fa-instagram"></i></a>
              </div>
  
              <button className='header-btn mb-2 mb-lg-0'>Let's Connect</button>
            </div>
          </div>
        </nav>
      </div>
    
    );
  }
  
  export default Header;
  