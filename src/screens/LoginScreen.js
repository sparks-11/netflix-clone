import React, { useState } from 'react';
import "./LoginScreen.css"
import logo from "../components/subcomponents/images/netflix_logo.svg"
import SignUpScreen from './signUpScreen';

const LoginScreen = () => {
  const [signIn,setsignIn]= useState(false)


  return (
    <div className="loginscreen">
      <div className="loginscreen__background">
        <img
          className="loginscreen__logo"
          src={logo}
          alt="netflix_logo"></img>
      </div>
      <button
      onClick={()=>{setsignIn(true)}}
        className="loginscreen__btn">Sign in</button>
      <div className="loginscreen__gradient"></div>

      <div className="loginscreen__body">
        {signIn ? (<SignUpScreen />) : (
        <div className="loginscreen__body loginscreen__content">
          <h1>Unlimited films, Tv programs and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <div className="loginscreen__input">
            <form>
              <input type="email" placeholder="Email Address" ></input>
              <button className="loginscreen__btn--submit" onClick={()=>{setsignIn(true)}}>Get Started</button>
            </form>
          </div>
        </div>
        )}
      
      </div>

    </div>
  )
}

export default LoginScreen;
