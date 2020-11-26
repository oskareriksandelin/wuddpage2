import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import jQuery from 'jquery'
import './project.css'
import Dropdown from 'react-bootstrap/Dropdown'

export default function Header({siteTitle}) {
  const data = useStaticQuery(graphql`
    query {
      datoCmsHeader {
        sitelogo {
          url
        }
      }
      datoCmsFooter{
          footerimg{
              url
          }
      }
      datoCmsIndex{
        usppic1{
            url
        }
    }
    }
  `)
  
  return (
  <project>
  <div className="container">
  <div className="project">
        <div className="projectinfo col-12">
            <h7>Starta ett projekt med oss.</h7>
            {/* <h9>Fyll i information för att starta ett projekt med oss. </h9> */}
            <p className="projecttext">För att utveckla hållbara byggnader som är långsiktigt attraktiva finns inga genvägar. Med tydliga ingångsvärden inom hållbarhet och kvalité i kombination med en smart arbetsprocess kan vi garantera en hög standard,</p>
        </div>
          <div className="projectform col-12">
          <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          action="/omoss"
          >
            <input type="hidden" name="contact" value="contact" />
                
                <p className="formtext">
                <label>Ditt namn: </label> 
                <input type="text" name="name" className="inputform" placeholder="För och efternamn" /> 
                </p>  

                <p className="formtext">
                <label>Din mailadress: </label> 
                <input type="email" name="email" placeholder="Mail" className="inputform" /> 
                </p> 

                <p className="formtext">
                    <label>Din mailadress: </label>     
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                                <Dropdown.Item value="leader">Leader</Dropdown.Item>
                                <Dropdown.Item value="follower">Follower</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </p>

                <p className="formtext">
                <label>Meddelande </label> 
                <textarea name="message" placeholder="Meddelande" className="inputform" rows="6">
                </textarea> 
                </p> 

              <div className="buttoncontainer">
                <button type="submit" className="projectbutton">Skicka</button>
              </div>

          </form>
          </div>

          <div className="projectcontact">
            <h9>Kontakta oss direkt annars. </h9> 
            <div className="col-12 col-md-6 contactinfo">
                <div className="contactspace">
                    <p className="contactspacetitle">info@wudd.se</p>
                    <p className="contactspacetext">Nya projekt, press och allmänna frågor.</p>
                </div>
            </div>
            <div className="col-12 col-md-6 contactimg">
                <img className="contactimg" src={data.datoCmsIndex.usppic1.url} alt=""/>
            </div>
          </div>
      </div>

      <div className="footerimgcontainer">
          <img className="footerimg" src={data.datoCmsFooter.footerimg.url} alt=""/>
      </div>
    </div>
    
</project>
)

      }