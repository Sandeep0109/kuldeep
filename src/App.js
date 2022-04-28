import React from 'react'
import './App.css'
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Shop from './Shop';


 const App = () => {
  return (
    <Router>
      
      
       
      
      <Switch>
          <Route path="/shop">
           <Shop />
          </Route>
         
          <Route path="/">
           <Login />
          </Route>
        </Switch>
    </Router>
    
  )
}

export default App;
