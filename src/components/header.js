import { Link } from "gatsby"
import React from "react"

const Header = props => (
  <header className="c-masthead">
    <div className="l-container">
      <Link className="c-masthead__logo" to="/">
        <img src={ props.mastheadLogo } alt="Kescheler and Co. logo"/>
      </Link>
      <nav className="c-mainNav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <button class="c-menuBurger" onClick={() => props.clickHandler(!props.activeMobileNav)}>
        <div class="c-menuBurger__bars">
          <div class="c-menuBurger__bar c-menuBurger__bar--1"></div>
          <div class="c-menuBurger__bar c-menuBurger__bar--2"></div>
          <div class="c-menuBurger__bar c-menuBurger__bar--3"></div>
        </div>
      </button>
    </div>
  </header>
)

export default Header
