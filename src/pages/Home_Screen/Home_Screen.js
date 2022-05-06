import React, { Component } from 'react';
import './Home_Screen.css'
import 'bootstrap/dist/css/bootstrap.css'

class Home_Screen extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return(
            <div class='container'>
                <h1>Home</h1>
                <div class='row' >
                    <div class='col'>
                    <h3>Colegio Racing Engineering Recruiting Event!</h3>
                    </div>
                    <div >
                        <div style={{marginLeft: 150}}>
                            <h6>
                                     Hello everyone, the CRE team is searching for an Electrical Engineering student to work with the electornics division....
                                     If interested feel free to reach out to fsaecolegioracing@uprm.edu

                                    
                            </h6>
                            <h6 style={{marginLeft: 20}}>
                                     Place: Stefani Lobby <br/>
                                     Date: March, 25<br/>
                                     Time: 10:30 am <br/>
                            </h6>
                            <div>
                            <img src={ require('../../resources/CRE.png') } />
                            </div>
                      </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default Home_Screen;