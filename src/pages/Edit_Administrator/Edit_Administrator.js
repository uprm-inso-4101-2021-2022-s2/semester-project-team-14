import React, { Component } from 'react'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'

class Edit_Administrator extends Component {

    constructor(props){
        super(props)
        this.state = {
            admin_information: [
                {id:1, email:'lolaMento@gmail.com', admin_name: 'Lola', admin_last_name: 'Mento', admin_password: '********', admin_active_status: true}
            ]
        }
    }

    renderTableData() {
        return this.state.admin_information.map((admin_information, index) => {
            const {id, email, admin_name, admin_last_name, admin_password, admin_active_status} = admin_information 
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{email}</td>
                    <td>{admin_name}</td>
                    <td>{admin_last_name}</td>
                    <td>{admin_password}</td>
                    <td>{admin_active_status}</td>
                </tr>
            )
        })
    }

    renderEditableTableData () {
        return this.state.admin_information.map((admin_information, index) => {
            const {id, email, admin_password, admin_name, admin_last_name, admin_active_status} = admin_information 
            return (
                <tr key={id}>
                    <td><input type='text' value={id} ></input></td>
                    <td><input type='text' value={email}></input></td>
                    <td><input type='text' value={admin_name}></input></td>
                    <td><input type='text' value={admin_last_name}></input></td>
                    <td><input type='text' value={admin_password}></input></td>
                    <td><input type='text' value={admin_active_status}></input></td>
                </tr>
            )
        })
    }

    renderTableHeader() {
       let header = Object.keys(this.state.admin_information[0])
       return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
       })
    }

    render() {
        return (
            <div>
                <h1 id='title'>Admin Information</h1>
                <table id='table_information' align='center'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderEditableTableData()}
                    </tbody>
                </table>
                <a href="/Active_Administrator">
                    <button class='btn btn-success btn-block'>Save</button>
                </a>
                <a href='/Admin_Information'>
                    <button class='btn btn-danger btn-block'>Cancel</button>
                </a>
            </div>
        )
    }
}

export default Edit_Administrator