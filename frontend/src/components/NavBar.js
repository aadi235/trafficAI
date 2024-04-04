import React from 'react';

const NavBar = ({ title }) => {
  return (
    <header>
    
      <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">Traffic.ai</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#upload">Upload</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;