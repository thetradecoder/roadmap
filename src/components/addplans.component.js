import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function AddPlans(){

    const [username, setUsername] =  useState("mamun");
    const [plantype, setPlantype] =  useState("");
    const [startdate, setStartdate]= useState(new Date().toLocaleDateString());
    const [deadline, setDeadline] = useState(new Date().toLocaleDateString());
    const [open, setOpen] = useState(true);
    function onChangeUsername(e){
        setUsername(e.target.value);
    };
    function onChangePlantype(e){
        setPlantype(e.target.value);
    };

    function onChangeStartdate(e){
        setStartdate(e.target.value);
    };
    function onChangeDeadline(e){
        setDeadline(e.target.value);
    }
    function onChangeOpen(e){
        setOpen(e.target.value)
    }

    return (
        <div>
            <div className="container">
                <form>
                <div className="d-flex flex-wrap justify-content-between">
                        <div className="form-group">
                            <label>Username:</label>
                            <input type="text" className="form-control" value={username} onChange={onChangeUsername} required/>
                        </div>
                        <div className="form-group">
                            <label>Plan type:</label>
                            <input type="text" className="form-control" value={plantype} onChange={onChangePlantype} required/>
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
                            <input type="text" className="form-control" value={open} onCange={onChangeOpen} required/>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label>Plan title:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Plan details:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Progress:</label>
                        <input type="text" className="form-control"/>
                    </div>
                  
                    <button type="submit" className="btn btn-primary">Add plan</button>
                </form>
            </div>
        </div>
    );
}

