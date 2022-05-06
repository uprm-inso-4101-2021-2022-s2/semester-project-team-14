import React, { Component } from 'react'
import './Password_Reset'
import 'bootstrap/dist/css/bootstrap.css'

class Password_Reset extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class='container'>
                <h1>Restablecer Contraseña</h1>
                <div class='row'>
                    <text>Insertar Contraseña Nueva</text>
                </div>
                <div class='row'>
                    <input type='text'></input>
                </div>
                <div class='row'>
                    <text>Confirmar Contraseña Nueva</text>
                </div>
                <div class='row'>
                    <input type='text'></input>
                </div>
                <div class='row'>
                    <a href="/Login_Screen">
                    <button class='btn btn-primary btn-large btn-success'>Restablecer Contraseña </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Password_Reset