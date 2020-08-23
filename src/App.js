import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoApp} from "./components/TodoApp";
import {Login} from "./components/Login.js";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import moment from "moment";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    

    render() {
        localStorage.setItem('isLoggedIn', this.state.isLoggedIn);
        localStorage.setItem('username', 'user');
        localStorage.setItem('password', 'psw');
        
        let view;
        const logged =localStorage.getItem('isLoggedIn');
        
        if (logged===true){
            view = (
                <div>
                        <TodoApp/>
                        <Route path="/todo" component={TodoAppView}/>
                </div>
                );
        }else{
            view = (
                    
                    <div>
                        <Login/>
                        <Route exact path="/" component={LoginView}/>
                    </div>
                    );
        }


        const LoginView = () => (
            <Login/>
        );
      
      const TodoAppView = () => (
            <TodoApp/>
        );


        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>


                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    {view}
                </div>
            </Router>
        );
    }

    handleisLoggedInChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}

export default App;
