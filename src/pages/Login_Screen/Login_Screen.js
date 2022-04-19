import React, { Component } from 'react';
import './Login_Screen.css'
import 'bootstrap/dist/css/bootstrap.css'

class Login_Screen extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return(
            <div class='container'>
                <h1>Login</h1>
                <div class='row'>
                    <div class='col'>
                        <input type="text" value='Email'></input>
                        <div class='w-100'></div>
                        <input type="text" value='Password'></input>
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
                            <button class="btn btn-primary btn-lg btn-success">Sign In</button>
                        </a>
                    </div>
                </div>
        </div>
        )
    }
}

export default Login_Screen;