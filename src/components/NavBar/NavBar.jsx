import React from 'react'
import './NavBar.scss'

function NavBar() {
  return (
    <nav className='navbar'>
    <div className="nav__contanier">
    <div className="nav">
        <div className="nav__item">
            <a href='#presentation' className="nav__item-icon">Qui suis-je ?</a>
        </div>
        <div className="nav__item">
        <a href='#skills' className="nav__item-icon">Compétences</a>
        </div>
        <div className="nav__item">
        <a href='#projects' className="nav__item-icon">Projets</a>
        </div>
        <div className="nav__item">
        <a href='#contact' className="nav__item-icon">Contact</a>
        </div>
        <div className="nav__item">
        <a href='#' className="nav__item-icon"><i class="fa-regular fa-flag"></i></a>
        </div>
        
        <div className="nav__blob"></div>
    </div>
</div>


<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
<defs>
    <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
        <feBlend in="SourceGraphic" in2="goo" />
    </filter>
</defs>
</svg>
</nav>
  )
}

export default NavBar
