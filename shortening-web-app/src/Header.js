import React from 'react';

function Header() {
  return (
    <header>
      <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light py-4">
          <div className="align-items-center d-flex gap-4 justify-content-between w-100">
            <a className="navbar-brand logo" href="http://localhost:3000/#"> </a>
            <button className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarToggler" 
                aria-controls="navbarToggler" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse">
              <div className='d-flex align-items-center gap-3 justify-content-between w-100'>
                <ul className="navbar-nav d-flex align-items-center gap-3">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="http://localhost:3000/#">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="http://localhost:3000/#">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="http://localhost:3000/#">Resources</a>
                  </li>
                </ul>
                <ul className="align-items-center d-flex gap-3 navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="http://localhost:3000/#">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link btn primary-cta radius-4 px-4" href="http://localhost:3000/#">Sign Up</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav> 
        <div className="collapse navbar-collapse fade d-md-none" id="navbarToggler">
              <div className='align-items-center d-flex flex-column gap-3 position-absolute py-4 radius-1 navbar-menu'>
                <ul className="navbar-nav d-flex align-items-center gap-3 px-3 w-100">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="http://localhost:3000/#">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="http://localhost:3000/#">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="http://localhost:3000/#">Resources</a>
                  </li>
                  <li className='nav-item'>
                    <hr className='m-0'></hr>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="http://localhost:3000/#">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link btn primary-cta radius-4 px-4" href="http://localhost:3000/#">Sign Up</a>
                  </li>
                </ul>
            </div>
          </div>
      </div>
    </header>
  );
}

export default Header;