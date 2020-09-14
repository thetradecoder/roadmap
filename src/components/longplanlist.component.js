import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function LongPlanList(){
const [longplans, setLongplans] =  useState([]);
useEffect(()=>{

    axios.get('http://localhost:5000/longplan')
    .then(res=>{
        setLongplans(res.data.reverse());
    })
    .catch(err=>console.log(err))
})
    return (
        <div>
            <div className="container">

                {longplans.map(e=>{
                    return (
                        
                        <div className="shadow p-3">                                        
                            <h4>Plan Title: {e.title}</h4>
                            <p>Details:{e.details} <br/> 
                            Plan Duration: {e.duration} months, Open date: {e.plandate?e.plandate.substring(0,10):e.plandate}, 
                            Start Date: {e.startdate?e.startdate.substring(0,10):e.startdate}, Deadline: {e.deadline?e.deadline.substring(0,10):e.deadline} </p>            
                        </div>
                    );
                })}
            </div>

        </div>

    );
}
