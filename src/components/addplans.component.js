import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function AddPlans(){

    return (
        <div>
            <div className="container">
                <form>
                <div className="d-flex flex-wrap justify-content-between">
                        <div className="form-group">
                            <label>Username:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Plan type:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Start date:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Deadline:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Open:</label>
                            <input type="text" className="form-control"/>
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

