
import axios from 'axios';
import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import './signup.css'


function Signup(props) {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("")
  const [password,setPassword]=useState("");
 
  
  const history = useHistory();

  
const onNameHandler = (e) =>{
    setName(e.currentTarget.value);
}
  const onEmailHandler = (e) =>{
    setEmail(e.currentTarget.value);
}
const onPhoneHandler = (e) =>{
    setPhone(e.currentTarget.value);
}
const onPasswordHandler = (e) =>{
    setPassword(e.currentTarget.value);
}

const onSubmitHandler=(e)=>{
    e.preventDefault();
    const user = {
      
        name:name,
        email:email,
        phone:phone,
        password:password
        
    }
    axios.post('https://transitt.herokuapp.com/signup',user)
    .then(res=>{
        console.log(res)
       
     if(res.status===200){
       // props.history.push('/')
       alert("account created")
       history.push("/");
    
     } })  
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
               
                   <div>
                    <input type="text" placeholder="Name" value={name} onChange={onNameHandler}/>
                    </div>
                   <div>
                    <input type="email" placeholder="enter your email" value={email} onChange={onEmailHandler}/>
                   </div>
                   <div>
                    <input type="Phone" placeholder="enter your phone no" value={phone} onChange={onPhoneHandler}/>
                    </div>
                 <div>
                    <input type="password" placeholder="password" value={password} onChange={onPasswordHandler}/>
                    </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}
export default Signup 