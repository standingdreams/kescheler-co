import { Link } from "gatsby"
import React from "react"

const Header = props => (
  <header className="c-masthead">
    <div className="l-container">
      <h1>
        <Link className="c-masthead__logo" to="/">
          <img src={ props.mastheadLogo } alt="Kescheler and Co. logo"/>
        </Link>
      </h1>
      <nav className="c-mainNav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
