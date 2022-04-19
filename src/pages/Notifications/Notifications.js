import './Notifications.css'
import React, { Component } from 'react';

class Notifications extends Component {

    constructor(props) {
        super(props);
        this.state = {
            administrators: [
                {id: 1, name: 'Magaly'},
                {id: 2, name: 'Luis Miguel'},
                {id: 3, name: 'Lola Mento'}
            ]
        }
    }

    renderTableData() {
        return this.state.administrators.map((administrators, index) => {
            const { id, name} = administrators
            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>
                        <a href="/Admin_Information">
                            <button class='btn btn-primary btn-success' id='menu_button'>Ver Mas</button>
                        </a>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return(
            <div>
            <h1 id='title'>Notifications</h1>
            <table id='menu_information' align='center' class='table'>
                {/* <tbody>
                    {this.renderTableData()}
                </tbody> */}
            </table>
            <a>
                <button align='center' class='btn btn-primary btn-success' id='menu_button'>
                    Terms of Service
                </button>
            </a>
            <br/>
            <br/>
            <a>
                <button align='center' class='btn btn-primary btn-success' id='menu_button'>
                    Data Policiy
                </button>
            </a>
            <br/>
            <br/>
            <a>
                <button align='center' class='btn btn-primary btn-success' id='menu_button'>
                    Cookies Policy
                </button>
            </a>
            <br/>
            <br/>
            <a>
                <button align='center' class='btn btn-primary btn-success' id='menu_button'>
                    Community Standards
                </button>
            </a>
        </div>
        );
    }
}


export default  Notifications;