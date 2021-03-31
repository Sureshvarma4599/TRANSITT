//import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import Logo from '../../add1.jpg'
import Add from '../../add3.jpg'
import { useHistory } from 'react-router-dom';
//import Dashboard from '../Dashboard/Dashboard'
import React, { useState} from 'react'
import './home.css'
//import React from 'react'

 function HomeComponent() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const history = useHistory();


    //post
    const onEmailHandler = (e) =>{
        setEmail(e.currentTarget.value);
    }
    const onPasswordHandler = (e) =>{
        setPassword(e.currentTarget.value);
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const user = {
            email:email,
            password:password
        }
        //console.log("user",user)
        axios.post('https://transitt.herokuapp.com/login/',user)
        
        .then(res=>{
            console.log(res)
           
         if(res.status===200){
           // props.history.push('/')
           history.push("/dashboard");
            alert(res.data)
         }   
         else{
             alert("login failed")
             history.push("/");
         }

        })
        .catch(err=>{
            console.log(err)
        })
       
    }
   

    return (
<div>
        <div className="landing">
       
     
           
            <form onSubmit={onSubmitHandler}>
             
                <input type="email" placeholder="enter your email" id="email" value={email} onChange={onEmailHandler}/>
               <br/><br/>
                <input type="password" placeholder="enter your password" id="password" value={password} onChange={onPasswordHandler}/>
              <br/><br/>
                <button type="submit" >LOGIN</button>
                <Link to="/signup" style={{ textDecoration: 'none',color:'black' }}>SIGNUP</Link> 
             
            </form>
            
           
         
            
          
            
        </div>
       
         
    
        </div>
        
     
       
    )
}
export default HomeComponent

