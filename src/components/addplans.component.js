import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



export default function AddPlans(){

    const [username, setUsername] =  useState("mamun");
    const [type, setType] =  useState("shortplan");
    const [startdate, setStartdate]= useState(new Date().toLocaleDateString());
    const [deadline, setDeadline] = useState(new Date().toLocaleDateString());
    const [open, setOpen] = useState(true);
    const [title, setTitle]= useState("");
    const [details, setDetails] = useState("");
    const [progress, setProgress]= useState("");

    function onChangeUsername(e){
        setUsername(e.target.value);
    };
    function onChangeType(e){
        setType(e.target.value);
    };

    function onChangeStartdate(e){
        setStartdate(e.target.value);
    };
    function onChangeDeadline(e){
        setDeadline(e.target.value);
    }
    function onChangeOpen(e){
        setOpen(e.target.value)
    };
    function onChangeTitle(e){
        setTitle(e.target.value)
    };
    function onChangeDetails(e){
        setDetails(e.target.value);
    };
    function onChangeProgress(e){
        setProgress(e.target.value)
    };
    function onSubmitPlan(e){
        e.preventDefault();
        const plans={
            username, type, startdate, deadline, open, title, details, progress
        }
        axios.post(`http://localhost:5000/${type}/add`, plans)
        .then(res=>{
            
            window.location=(`/${type}`)})
        .catch(err=>console.log(err));
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={onSubmitPlan}>
                <div className="d-flex flex-wrap justify-content-between">
                        <div className="form-group">
                            <label>Username:</label>
                            <input type="text" className="form-control" value={username} onChange={onChangeUsername} required/>
                        </div>
                        <div className="form-group">
                            <label>Plan type:</label>
                            <select selected={type} onChange={onChangeType}>
                                <option>shortplan</option>
                                <option>longplan</option>
                            </select>                           
                        </div>
                        <div className="form-group">
                            <label>Start date:</label>
                            <input type="text" className="form-control" value={startdate} onChange={onChangeStartdate} required/>
                        </div>
                        <div className="form-group">
                            <label>Deadline:</label>
                            <input type="text" className="form-control" value={deadline} onChange={onChangeDeadline} required/>
                        </div>
                        <div className="form-group">
                            <label>Open:</label>
                            <select selected={open} onChange={onChangeOpen}>
                                <option>true</option>
                                <option>false</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label>Plan title:</label>
                        <input type="text" className="form-control" value={title} onChange={onChangeTitle} required/>
                    </div>
                    <div className="form-group">
                        <label>Plan details:</label>
                        <input type="text" className="form-control" value={details} onChange={onChangeDetails} required/>
                    </div>
                    <div className="form-group">
                        <label>Progress:</label>
                        <input type="text" className="form-control" value={progress} onChange={onChangeProgress} required/>
                    </div>
                  
                    <button type="submit" className="btn btn-primary">Add plan</button>
                </form>
            </div>
        </div>
    );
}

