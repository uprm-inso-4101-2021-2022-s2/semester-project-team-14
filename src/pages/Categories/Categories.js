import '../Table_Format.css'
import React, { Component } from 'react'

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            directory_history: [
                {id: 1, editor: 'Magaly Mercado', name: 'Registraduria', latitude: 18.2093337, longitude: -67.1410899, room_code: 'C-203-B', email:'registro@uprm.edu', date: '03/31/20222', justification: 'Updated Coordiantes'},
                {id: 2, editor: 'Magaly Mercado', name: 'Registraduria',latitude: 18.2093337, longitude: -67.1410899, room_code: 'C-203-B', email:'registro@uprm.edu', date: '03/31/20222', justification: 'Updated Room Code'}
            ]
        }
    }

    renderTableData() {
        return this.state.directory_history.map((directory_history, index) => {
            const {id, editor, name, longitude, latitude, room_code, email, date, justification} = directory_history
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{editor}</td>
                    <td>{name}</td>
                    <td>{latitude}</td>
                    <td>{longitude}</td>
                    <td>{room_code}</td>
                    <td>{email}</td>
                    <td>{date}</td>
                    <td>{justification}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.directory_history[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return(
        <div>
            <h1 id='title'>Categories</h1>
            <br/>
            <br/>
             <div class='container-fluid'>
              <div class='row'  vertical-align='left' style={{marginLeft: 150}}>
                  <div class='col'>
                  <img src={ require('../../resources/Cat1.png') }/>
                    </div>
                    <br/>
                    <div class='col'>
                  <img src={ require('../../resources/Cat2.png') }/>
                    </div>
                </div>
                <br/>
                <br/>
                <div class='row'  vertical-align='left' style={{marginLeft: 150}}>
                  <div class='col'>
                  <img src={ require('../../resources/Cat3.png') }/>
                    </div>
                    <div class='col'>
                  <img src={ require('../../resources/Cat4.png') }/>
                    </div>
                </div>
             </div>
        </div>
        )
    }
}
 
export default Categories;