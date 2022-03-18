import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import HomePage from "./Homepage";
import 'semantic-ui-css/semantic.min.css'


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/Home" element={<HomePage/>} />
            <Route exact path="/" element={<HomePage/>} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);