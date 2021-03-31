import React from 'react'
import {Link} from 'react-router-dom';
import '../../App.css'
export default function Navbar() {
    return (
        <div className="navCompo">
           
              
               <div>
                <h2>TRANSITT</h2>
                </div>    
                <div>
                 <ul>
                       <Link to="/" style={{ textDecoration: 'none',color:'black' }}>    <li>Home  </li></Link>
                       <Link to="/login" style={{ textDecoration: 'none',color:'black' }}><li>  Login </li></Link>
                       <Link to="/signup" style={{ textDecoration: 'none',color:'black' }}> <li> Create Account</li></Link>
                         <Link to="/" style={{ textDecoration: 'none',color:'black' }}><li>About</li></Link>
                         <a href="" style={{ textDecoration: 'none',color:'black' }}> <li>Services</li></a>
                    </ul>
                    </div>
        
               

           
        </div>
    )
}
