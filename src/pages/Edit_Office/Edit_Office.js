import React, { Component } from 'react'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'

class Edit_Office extends Component {

    constructor(props){
        super(props)
        this.state = {
            office_information: [
                {id:1, building_id:1, office_name: 'Actividades Sociales y Culturales', office_description: 'Test Description', office_schedule: 'L-V 7:45AM-4:30PM', office_latitude: 18.2101382977879, office_longitude: -67.1411936055247, office_floor_number: 3, office_room_code: 'CE-306', office_email: 'actividadessociales@uprm.edu', office_phone_number: '(787)-832-4040', office_extension_number: 'Ext. 3366,3370', office_website: 'https://www.uprm.edu/p/actividades-sociales', office_active_status: true}
            ]
        }
    }

    renderTableData() {
        return this.state.office_information.map((office_information, index) => {
            const {id, building_id, office_name, office_schedule, office_description, office_latitude, office_longitude, office_floor_number, office_room_code, office_email, office_phone_number, office_extension_number, office_website, office_active_status} = office_information 
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{building_id}</td>
                    <td>{office_name}</td>
                    <td>{office_description}</td>
                    <td>{office_schedule}</td>
                    <td>{office_latitude}</td>
                    <td>{office_longitude}</td>
                    <td>{office_floor_number}</td>
                    <td>{office_room_code}</td>
                    <td>{office_email}</td>
                    <td>{office_phone_number}</td>
                    <td>{office_extension_number}</td>
                    <td>{office_website}</td>
                    <td>{office_active_status}</td>
                </tr>
            )
        })
    }

    renderEditableTableData () {
        return this.state.office_information.map((office_information, index) => {
            const {id, building_id, office_name, office_schedule, office_description, office_latitude, office_longitude, office_floor_number, office_room_code, office_email, office_phone_number, office_extension_number, office_website, office_active_status} = office_information 
            return (
                <tr key={id}>
                    <td><input type='text' value={id} ></input></td>
                    <td><input type='text' value={building_id}></input></td>
                    <td><input type='text' value={office_name}></input></td>
                    <td><input type='text' value={office_description}></input></td>
                    <td><input type='text' value={office_schedule}></input></td>
                    <td><input type='text' value={office_latitude}></input></td>
                    <td><input type='text' value={office_longitude}></input></td>
                    <td><input type='text' value={office_floor_number}></input></td>
                    <td><input type='text' value={office_room_code}></input>{office_room_code}</td>
                    <td><input type='text' value={office_email}></input></td>
                    <td><input type='text' value={office_phone_number}></input></td>
                    <td><input type='text' value={office_extension_number}></input></td>
                    <td><input type='text' value={office_website}></input></td>
                    <td><input type='text' value={office_active_status}></input></td>
                </tr>
            )
        })
    }

    renderTableHeader() {
       let header = Object.keys(this.state.office_information[0])
       return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
       })
    }

    render() {
        return (
            <div>
                <h1 id='title'>Office Information</h1>
                <table id='table_information'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderEditableTableData()}
                    </tbody>
                </table>
                <a href="/Active_Directory">
                    <button class='btn btn-success btn-block'>Save</button>
                </a>
                <a href="/Office_Information">
                    <button class='btn btn-danger btn-block'>Cancel</button>
                </a>
            </div>
        )
    }
}

export default Edit_Office