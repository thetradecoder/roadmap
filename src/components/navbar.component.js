import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery/dist/jquery.min.js';


export default function Navbar (){
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a href="/" className="navbar-brand">tradecoder</a>
                </div>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#main-menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="main-menu" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link to = "/shortplan" className="nav-link">ST Plan</Link></li>
                        <li className="nav-item"><Link to ="/longplan" className="nav-link">LT Plan</Link></li>
                    </ul>
                </div>
            </div>

        </nav>
    );
}