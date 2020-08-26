import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';    


export class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {items: [], email: '', password:''};
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form onSubmit={this.handleSubmit} className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input 
                                    id="email" 
                                    name="email" 
                                    autoComplete="email" 
                                    autoFocus 
                                    onChange={this.handleEmail}
                                    value={this.state.email}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handlePassword}
                                    value={this.state.password}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }


    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.email.length || !this.state.password.length )
            return;

        const user=localStorage.getItem('username');
        const psw=localStorage.getItem('password');
        if (this.state.email===user && this.state.password===psw){
            localStorage.setItem('isLoggedIn', true);
            
            return <Redirect to="/todo" />
            
        }else {
            localStorage.setItem('isLoggedIn', false);
        }

    }

}