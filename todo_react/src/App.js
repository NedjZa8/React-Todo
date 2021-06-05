import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { Signup } from './Components/Signup';
import { Login } from './Components/Login';
import { NotFound } from "./Components/NotFound";
import {auth, db} from "./Config/Config";


export class App extends Component {

     state={
         currentUser: null
     }

     componentDidMount() {
         auth.onAuthStateChanged(user=>{
             if (user){
                db.collection('users').doc(user.uid).get().then(snapshot=>{
                    this.setState({
                        currentUser:snapshot.data().Name
                    })
                })
             }
             else {
                 console.log('\n' +
                     'l\'utilisateur n\'est pas connecté pour récupérer les tâches')
             }
         })
     }

    render() {
       return (
       <Router>
         <Switch>
           <Route exact path='/' component={()=><Home
                currentUser={this.state.currentUser}
           />}/>
           <Route path="/Signup" component={Signup}/>
           <Route path="/Login" component={Login}/>
           <Route component={NotFound}/>
         </Switch>
       </Router>
     )
   }
 }

export default App;
