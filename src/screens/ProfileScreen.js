import React from 'react'
import "./ProfileScreen.css"
import Nav from '../components/subcomponents/nav/Nav'
import person from "../components/subcomponents/images/person.png"
import { useSelector } from 'react-redux'
import {selectUser} from "../features/userSlice"
import {auth} from "../firebase"
import PlanScreen from './PlanScreen'

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profilescreen">
      <Nav/>
      <div className="profilescreen__body">
        <h1 >Edit Profile</h1>
        <div className="profilescreen__info">
          <img src={person} alt="userlogo"></img>
          <div className="profilescreen__details">
            <h2>{user.email} </h2>
            <div className="profilescreen__plans">
              <h3 >Plans</h3>
              <PlanScreen/>
              <button onClick={()=>{auth.signOut()}} className="profilescreen__signout">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen;
