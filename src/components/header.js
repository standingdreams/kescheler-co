import { Link } from "gatsby"
import React from "react"

const Header = ({mastheadLogo, currentPage, clickHandler, activeMobileNav}) => (
  <header className="c-masthead">
    <div className="l-container">
      <Link className="c-masthead__logo" to="/">
        <img src={ mastheadLogo } alt="Kescheler and Co. logo"/>
      </Link>
      <nav className="c-mainNav">
        <ul>
          <li><Link className={currentPage === "home" ? `current` : ''} to="/">Home</Link></li>
          <li><Link className={currentPage === "blog" ? `current` : ''} to="/blog">Blog</Link></li>
          <li><Link className={currentPage === "contact" ? `current` : ''} to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <button className="c-menuBurger" onClick={() => clickHandler(!activeMobileNav)}>
        <div className="c-menuBurger__bars">
          <div className="c-menuBurger__bar c-menuBurger__bar--1"></div>
          <div className="c-menuBurger__bar c-menuBurger__bar--2"></div>
          <div className="c-menuBurger__bar c-menuBurger__bar--3"></div>
        </div>
      </button>
    </div>
  </header>
)

export default Header
