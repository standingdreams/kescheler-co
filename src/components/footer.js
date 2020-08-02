import React from 'react'
import { Link } from "gatsby"

const Footer = props => {
  return (
    <footer className="c-footer">
      <div className="l-container">
        <div className="c-footer__block">
          <div className="c-footer__blockItem">
            <Link className="c-footer__logo" to="/">
              <img src={props.footerLogo} alt="Kescheler &amp; Co."/>
            </Link>
          </div>
          <div className="c-footer__blockItem c-footer__blockItem--2">
            <p className="el-h3">{props.quote_slogan}</p>
            <div className="c-footer__contactInfo">
              <p className="el-small">Contact Info</p>
              <p>
                <a href={`mailto:${props.email_address}`}>{ props.email_address }</a>
              </p>
            </div>
          </div>
        </div>
        <div className="c-footer__block">
          <nav className="c-footer__blockItem c-footer__nav">
            <ul>
              <li><a href="/">About</a></li>
              <li><a href="/">Work</a></li>
            </ul>
          </nav>
          <div className="c-footer__blockItem c-footer__blockItem--3">
            <p className="c-footer__disclaimer">
              &copy; {new Date().getFullYear()}. Copyright Kescheler and Co.
            </p>
            <nav className="c-footer__social">
              <ul>
                {props.facebook &&
                  <li><a className="-facebook" href={ props.facebook } target="_blank" rel="noopener noreferrer">Facebook</a></li>
                }
                {props.instagram &&
                  <li><a className="-instagram" href={ props.instagram } target="_blank" rel="noopener noreferrer">Instagram</a></li>
                }
                {props.twitter &&
                  <li><a className="-linkedin" href={ props.twitter } target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                }
                {props.linkedin &&
                  <li><a className="-twitter" href={ props.linkedin } target="_blank" rel="noopener noreferrer">Twitter</a></li>
                }
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
