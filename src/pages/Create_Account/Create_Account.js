import React, { Component } from 'react';
import './Create_Account.css'
import 'bootstrap/dist/css/bootstrap.css'

class Create_Account extends Component {

    constructor(props){
        super(props)
    }


    render(props) {

        return (
            <div class='container'>
                <h1>Create Account</h1>
                <div class='row'>
                    <div class='col'>
                        
                        <input type="text" value='Name'></input>
                        <div class='w-100'></div>
                        <input type="text" value='Last Name'></input>
                        <div class='w-100'></div>
                        <input type="text" value='Email'></input>
                        <div class='w-100'></div>
                        <input type="text" value='Year of Study'></input>
                        <div class='w-100'></div>
                        <input type="text" value='Department'></input>
                        <div class='w-100'></div>
                        <input type="text" value='Password'></input>
                        <div class='w-100'></div>
                        <input type="text" value='Confirm Password'></input>
                        <div class='w-100'></div>
                        <div class='row'>
                        </div>
                        <a href='/Login_Screen'>
                        <button type='button' class="btn btn-primary btn-lg btn-success" onClick={() => props.push('/Active_Directrory')}>Create Account</button>
                        </a>
                    </div>
                </div>
        </div>
        )
    }
}

export default Create_Account