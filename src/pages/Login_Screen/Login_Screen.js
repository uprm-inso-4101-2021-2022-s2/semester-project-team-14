import React, { Component } from 'react';
import './Login_Screen.css'
import 'bootstrap/dist/css/bootstrap.css'
import axios from '../../content/axios';
 
const LOGIN_URL = "/api/login"
class Login_Screen extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            login: ''
        }
    }

    handleResponse = async(e,values) => { 
        e.preventDefault();
        try{
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify(values),
                {
                    headers: {"Content-Type": "application/json"},
                    
                });
                console.log(response);
        }catch(err){
            console.log('No Server Response');
        }
    }

    handleChange = input => e => {
        console.log(e.target.value);
        this.setState({[input]: e.target.value});
    } 


    render() {
        const {email, password} = this.state;
        const values = {email, password}
        return(
            <div class='container'>
                <h1>Login</h1>
                <div class='row'>
                    <div class='col'>
                        <form onSubmit={ e => {this.handleResponse(e,values);}}>
                            <input type="text" value={this.email} onChange = {this.handleChange('email')} required></input>
                            <div class='w-100'></div>
                            <input type="text" value={this.password} onChange={this.handleChange('password')} required></input>
                            <div class='w-100'></div>
                            <div class='row'>
                            <div class='col'>
                                <a href="/Create_Account">
                                    <button type='button' class='btn btn-link'>
                                        Crear Cuenta
                                    </button>
                                </a>
                            </div>
                            <div class='col'>
                                <a href="/Password_Recovery">
                                    <button type='button' class='btn btn-link'>
                                        Reestablecer contraseña
                                    </button>
                                </a>
                            </div>
                            </div>
                            <a href="/Token">
                                <button class="btn btn-primary btn-lg btn-success" type="submit" value="signin">Sign In</button>
                            </a>
                        </form>
                    </div>
                </div>
        </div>
        )
    }
}

export default Login_Screen;