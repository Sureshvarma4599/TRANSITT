import axios from 'axios';
import React,{useState} from 'react'
import '../App.css'


export default function AddDriver() {

    const [name,setName]=useState(" ")
    const [age,setAge]=useState('')
    const [phone,setPhone]=useState('')
    const [Id,setId]=useState('')
    
    const handleNoChange=(e)=>{
        setName(e.currentTarget.value)
    }
    
    const handleDateChange=(e)=>{
        setAge(e.currentTarget.value)
    }
    
    const handleFromChange=(e)=>{
        setPhone(e.currentTarget.value)
    }

    
    const handleToChange=(e)=>{
        setId(e.currentTarget.value)
    }
    
   
    const onSubmit=(e)=>{
        if(name===""||age===""||phone===""||Id===""){
            alert("some fields are empty!!!")
        }
        const data ={
           name:name,
           age:age,
           phone:phone,
           Id:Id
        }
      
        axios.post('https://transitt.herokuapp.com/driver/Sureshrajum8888@gmail.com',data)
        .then(res=>{
            console.log(res.data)
            alert("Driver added succesfully")
            
        })
    }
        return (
        <div>
            
        <div className="details">
            <form >
           
          <div>
                <input type="text" placeholder="name" value={name} onChange={handleNoChange}/>
                </div>
                <div>
                <input type="age" placeholder="enter driver age" value={age} onChange={handleDateChange}/>
                </div>
                <div>
                <input type="phone" placeholder="phone" value={phone} onChange={handleFromChange}/>
                </div>
                <div>
                <input type="text" placeholder="Driver Id" value={Id} onChange={handleToChange}/>
              
                </div>
               
            <button type="button" style={{marginLeft:"23%"}} onClick={onSubmit}>submit</button>
           
            </form>
            </div>
        </div>
    )
}
