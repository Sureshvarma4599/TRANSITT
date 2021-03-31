
import axios from 'axios';
import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import './signup.css'


function Signup(props) {
    const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("")
  const history = useHistory();

  const onEmailHandler = (e) =>{
    setEmail(e.currentTarget.value);
}
const onPasswordHandler = (e) =>{
    setPassword(e.currentTarget.value);
}
const onNameHandler = (e) =>{
    setName(e.currentTarget.value);
}
const onPhoneHandler = (e) =>{
    setPhone(e.currentTarget.value);
}
const onSubmitHandler=(e)=>{
    e.preventDefault();
    const user = {
        email:email,
        name:name,
        password:password,
        phone:phone
    }
    axios.post('https://transitt.herokuapp.com/signup',user)
    .then(res=>{
        console.log(res)
       
     if(res.status===200){
       // props.history.push('/')
       history.push("/");
    
     } })  
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
               
                   <div>
                    <input type="email" placeholder="enter your email" value={email} onChange={onEmailHandler}/>
                    </div>
                 <div>
                    <input type="text" placeholder="Name" value={name} onChange={onNameHandler}/>
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