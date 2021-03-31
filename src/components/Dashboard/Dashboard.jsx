import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


export default class Dashboard extends React.Component {
 
 constructor(props){
     super(props);
     this.state={
        
     }
 }
 
 
 
 
    render(){  
    return (
        
        <div className="dashboard">
            <h2>TRANSITT</h2>
            <ul>
                <li> <Link to="/addTrip"  style={{ textDecoration: 'none',color:'white' }}>Add-Trip</Link></li>
                <li><Link to="/view" style={{ textDecoration: 'none',color:'white' }}>View-Trips</Link></li>
                <li><Link  to="/vehicleinfo" style={{ textDecoration: 'none',color:'white' }}>Vehicle-Info</Link></li>
                <li><Link  to="/addvehicleinfo" style={{ textDecoration: 'none',color:'white' }}>add-Vehicle</Link></li>
                <li><Link to="/driver" style={{ textDecoration: 'none',color:'white' }}>Driver-Info</Link></li>
                <li><Link  to="/addDriver" style={{ textDecoration: 'none',color:'white' }}>add-Driver</Link></li>
             
                <li><Link to="/billing" style={{ textDecoration: 'none',color:'white' }}>Bill-Desk</Link></li>
                <li><Link to="/logout" style={{ textDecoration: 'none',color:'white' }}>LogOut</Link></li>
            </ul>
            
        </div>
    )
}
}
