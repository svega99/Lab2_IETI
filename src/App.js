import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoApp} from "./components/TodoApp";
import {Login} from "./components/Login.js";

import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
        
    }

    
    
    
    

    render() {
        //if(localStorage.getItem('isLoggedIn')==null) localStorage.setItem('isLoggedIn',false);
        localStorage.setItem('isLoggedIn',false);
        localStorage.setItem('username', 'user');
        localStorage.setItem('password', 'psw');
        


        const LoginView = () => {
            const logged =localStorage.getItem('isLoggedIn');
            
            if (logged==="true"){
                return <Redirect to="/todo" />
            }
            else return <Login/>
        };
      
      const TodoAppView = () => {
            const logged =localStorage.getItem('isLoggedIn');
            
            if (logged==="false" ){
                return <Redirect to="/" />
            }
            else return <TodoApp/>
        };


        return (
            <Router>
                <div className="App" >
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>


                    
                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoAppView}
                        />
                    </div>
                   
                </div>
            </Router>
        );
    }

    

}

export default App;
