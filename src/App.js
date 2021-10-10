import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './components/homescreen/Homescreen';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
  const Unsubscribe = auth.onAuthStateChanged((userAuth) => {
    if (userAuth) {
      dispatch(login({
        uid: userAuth.uid,
        email : userAuth.email,
      }))
    } else {
      dispatch(logout())
    }
    return Unsubscribe;
  })
},[dispatch])


  return (
    <div className="App">
      <Router>
        {!user ? (<LoginScreen />) : (
          <Switch>
            <Route path = "/profile">
              <ProfileScreen/>
            </Route>
            <Route path="/">
              <Homescreen />
            </Route>
          </Switch>
        )}
        
        </Router>
    </div>
  );
}

export default App;
