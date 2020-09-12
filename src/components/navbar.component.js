import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery/dist/jquery.min.js';


export default function Navbar (){
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a href="/" className="navbar-brand">tradecoder</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="nav-item"><Link to = "/shortplan">Short Term Plan</Link></li>
                    <li className="nav-item"><Link to ="/longplan">Long Term Plan</Link></li>
                </ul>
            </div>

        </nav>
    );
}