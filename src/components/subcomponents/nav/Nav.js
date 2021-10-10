import React, { useEffect, useState } from 'react'
import "./Nav.css"
import logo from "../images/netflix_logo.svg"
import person from "../images/person.png"
import { useHistory } from 'react-router'

const Nav = () => {

  const history = useHistory();
  
  const[show, handleshow] = useState(false)
  console.log(show)

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleshow(true)
    } else {
      handleshow(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll',transitionNavBar)
    return ()=> window.removeEventListener('scroll',transitionNavBar)
  },[])

  return (

    <div className={`nav  ${show && "nav__black"}`}>
      <div className="nav__contents">
        <div className="nav__bar">
          <img
            onClick={()=>{history.push("/")}}
            className="nav__logo"
            src={logo}
            alt="logo">
      
          </img>
          <img
            onClick={()=>{history.push("/profile")}}
            className="nav__avatar"
            src={person}
            alt="avatar logo">
      
          </img>
        </div>
      
      </div>
    </div>
          
    

  )
}

export default Nav;
