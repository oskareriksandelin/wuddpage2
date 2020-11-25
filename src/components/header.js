import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import jQuery from 'jquery'
import './hamburger.css'
import './header.css'

export default function Header({siteTitle}) {
  const data = useStaticQuery(graphql`
    query {
      datoCmsHeader {
        sitelogo {
          url
        }
      }
    }
  `)

  const hamburgerActiveState = useState(false)

  const handleHamburgerClick = () => {
    const hamburgerIsActive = hamburgerActiveState[0]
    const setHamburgerActiveState = hamburgerActiveState[1]
    setHamburgerActiveState(!hamburgerIsActive)
  }

  useEffect(() => {
    if(hamburgerActiveState[0]) {
      jQuery('#menu').slideDown()
    } else {
      jQuery('#menu').slideUp()
    }
  }, [hamburgerActiveState[0], jQuery])
  
  return (
  <header>
  <div className="container">
      <div className="row menurow">
        <div className="hamburgermobile col-md-4 col-6 ">
          <div className="container">
            <div className="row align-self-center navigation">
              
                <button
                  className={'hamburger hamburger--vortex ' 
                    + (hamburgerActiveState[0] ? 'is-active' : '')}
                  type="button"
                  onClick={handleHamburgerClick}
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
                {/* <a className="menytext">
                  Meny
                </a> */}
              
            </div>
          </div>
        </div>
          <div className="logocontainer col-md-6">
            <Link to="/">
            <img src={data.datoCmsHeader.sitelogo.url} alt="logo" className="logoimg"/>
            </Link>
          </div>
          <div className="webmenucontainer col-6">
                <Link to="/omoss/" className="webmenuitem"> HEM </Link>
                <Link to="/omoss/" className="webmenuitem"> OM OSS </Link>
                <Link to="/omoss/" className="webmenuitem"> STARTA ETT PROJEKT </Link>

          </div>
      </div>
      <div 
        id="menu"
        style={{
          display: 'none'
        }}
        className="row activemenu"
      >
          <div className="activemenucol no-gutters col-12 col-md-4 ">
            <h3 className="optionstitle">
              MENY
            </h3>
            <div className="activemenuoptions">
              <Link className="moptions" to="/#ett">HEM</Link>
              <Link className="moptions" to="/#tva">OM OSS</Link>
              <Link className="moptions" to="/#tva">STARTA ETT PROJEKT</Link>
            </div>
          </div>

        </div>
    </div>
    
</header>
)

      }

