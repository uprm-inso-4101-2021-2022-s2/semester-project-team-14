import React from 'react';
import './Home.css'

function Home() {
    return (
        <div class='container-fluid'>
            <div class='row' id='Header-color' vertical-align='left'>
                  <div class='col'>
                  <img src={ require('.//resources/RumCircleElip.png') }/>
                    
                </div>
                <div class='col'>
                    <h1>RUMCircle</h1>
                    
                </div>
                <div class='col' id='Home-header'>
                    <a href="Home_Screen">
                    <button vertical-align='right' id='Home-Button'>
                       Home 
                    </button>
                   
                    </a>
                    <a href="Categories">
                    <button id='Home-Button'>
                    Categories 
                    </button>
                    
                    </a>
                    <a href="Account">
                    <button id='Home-Button'>
                    Settings
                    </button>
                    </a>
                    </div>
            </div>
        </div>
    );
}

export default Home;