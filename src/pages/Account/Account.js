import React, { Component } from 'react';
import './Account.css'
import '../Menu_Format.css'

class Account extends Component{

        constructor(props){
            super(props)
            this.state = {
                offices: [
                        { id: 1, name: 'Asistencia Economica'},
                        { id: 2, name: 'Oficina de Registraduria'},
                        { id: 3, name: 'Recaudaciones'}
                    ]
            }
        }

        renderTableData(){
            return this.state.offices.map((offices, index) => {
                const {id, name} = offices
                return(
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td><a href="/Office_Information"><button class="btn btn-primary btn-success" id='menu_button'>Ver Mas</button></a></td>
                    </tr>
                )
            })
        }

        render() {
            return(
            <div className='Acount'>
                <h1 id='title'>Account</h1>
                <table id='menu_information' align='center' class='table'>
                    {/* <tbody>
                        {this.renderTableData()}
                    </tbody> */}
                </table>
                <a>
                <button class='btn btn-primary btn-success' id='menu_button'>
                Personal and Account information
                </button>
                </a>
                <br/>
                <br/>
                <a>
                <button class='btn btn-primary btn-success' id='menu_button'>
                Password and Security
                </button>
                </a>
                <br/>
                <br/>
                <a>
                <button class='btn btn-primary btn-success' id='menu_button'>
                Delete Account
                </button>
                </a>
            </div>
        );
    }
}

export default Account;


