import React, { Component } from 'react'
import './Password_Recovery.css'
import 'bootstrap/dist/css/bootstrap.css'

class Password_Recovery extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div class='container'>
                <h1>Restablecer Contraseña</h1>
                <h2>Introduzca su correo electronico para recibir instrucciones para restablecer su cuenta</h2>
                <div class='row'>
                    <input type='text'></input>
                </div>
                <div class='row'>
                    <a href="/Password_Reset">
                    <button class="btn btn-primary btn-lg btn-success">Enviarme Correo Electronico</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Password_Recovery;