import React, { Component } from 'react';
import './Login_Screen.css'
import 'bootstrap/dist/css/bootstrap.css'
import axios from '../../content/axios';

class Login_Screen extends Component {

    constructor(props){
        super(props)
        this.state = {
             email : '',
             password: ''
        };
    }

    LOGINURL = '/api/login'

    handleResponse = async() => {
        const email = this.state.email;
        const password = this.state.password;

        const login = {email,password};
        try{
             await axios.post(this.LOGINURL, 
             login,
             {
                 headers: {"Content-Type": "application/json"}
             }).then((res) =>{
                 console.log(res);
             });
             
             }
        catch(err){
            console.log(err);
        }
    }


    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    } 

    render() {
        return(
            <div class='container'>
                <h1>Login</h1>
                <div class='row'>
                    <div class='col'>
                        <input type="text" autoComplete='email' value={this.state.email}  onChange={this.handleChange('email')}></input>
                        <div class='w-100'></div>
                        <input type="text" autoComplete='current-password' value={this.state.password} onChange={this.handleChange('password')}></input>
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
                       
                            <button class="btn btn-primary btn-lg btn-success" onClick={this.handleResponse}>Sign In</button>
                        
                    </div>
                </div>
        </div>
        )
    }
}

export default Login_Screen;