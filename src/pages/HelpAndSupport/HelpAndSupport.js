import '../Table_Format.css'
import React, { Component } from 'react'

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            administrator_history: [
                {id: 1, editor: 'Magaly Mercado', updated_record: 'Madeline', last_name: 'Rodriguez', email: 'madelinej.rodriguez@upr.edu', date: '02/15/2022', justification: 'Fixed name'},
                {id: 2, editor: 'Magaly Mercado', updated_record: 'Nelson', last_name: 'Pagan', email: 'nelson.pagan2@upr.edu', date: '03/15/2022', justification: 'Deleted Account, no longer works here'}
            ]
        }
    }

    renderTableData() {
        return this.state.administrator_history.map((administrator_history, index) => {
            const {id, editor, updated_record, last_name, email, date, justification} = administrator_history
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{editor}</td>
                    <td>{updated_record}</td>
                    <td>{last_name}</td>
                    <td>{email}</td>
                    <td>{date}</td>
                    <td>{justification}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.administrator_history[0])
        return header.map((key,index) => {
            if (key === 'updated_record'){
                return <th key={index}>UPDATED RECORD</th>
            }
            else if (key === 'last_name'){
                return <th key={index}>LAST NAME</th>
            }
            else {
                return <th key={index}>{key.toUpperCase()}</th>
            }
        })
    }

    render() {
        return(
            <div>
                <h1 id='title'>
                    Help and Support
                </h1>
                <table id='table_information' align='center'>
                    {/* <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody> */}
                </table>
                <a>
                <button align='center' class='btn btn-primary btn-success' id='menu_button'>
                    Contact Us
                </button>
                </a>
            </div>
        )
    }
}

export default About;