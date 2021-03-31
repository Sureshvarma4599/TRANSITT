import axios from 'axios';
import React,{useState} from 'react'
import '../../../src/App.css'


export default function AddNew() {

    const [No,setNo]=useState(" ")
    const [date,setDate]=useState('')
    const [from,setFrom]=useState('')
    const [to,setTo]=useState('')
    const [vehicleNumber,setVehicleNumber]=useState('')
    const [amount,setAmount]=useState('')
    const [user,setUser]=useState('')
    const handleNoChange=(e)=>{
        setNo(e.currentTarget.value)
    }
    
    const handleDateChange=(e)=>{
        setDate(e.currentTarget.value)
    }
    
    const handleToChange=(e)=>{
        setTo(e.currentTarget.value)
    }

    
    const handleFromChange=(e)=>{
        setFrom(e.currentTarget.value)
    }
    
    const handleVehicleChange=(e)=>{
        setVehicleNumber(e.currentTarget.value)
    }
    
    const handleAmountChange=(e)=>{
        setAmount(e.currentTarget.value)
    }
   
   
    const onSubmit=(e)=>{
        if(No===""||date===""||to===""||from===""||vehicleNumber===""||amount===""){
            alert("some fields are empty!!!")
        }
        const data ={
            No:No,
            date:date,
            from:from,
            to:to,
            vehicleNumber:vehicleNumber,
            amount:amount
        }
      var author ="Sureshrajum8888@gmail.com"
        axios.post(`https://transitt.herokuapp.com/trip/${author}`,data)
        .then(res=>{
            console.log(res.data)
            alert("trip added succesfully")
            
        })
    }

    
        return (
        <div>
              
        <div className="details">
            <form >
         
          <div>
                <input type="number" placeholder="LR.NO" value={No} onChange={handleNoChange}/>
                </div>
                <div>
                <input type="date"  value={date} onChange={handleDateChange}/>
                </div>
                <div>
                <input type="text" placeholder="from address" value={from} onChange={handleFromChange}/>
                </div>
                <div>
                <input type="text" placeholder="to address" value={to} onChange={handleToChange}/>
              
                </div>
                <div>
                <input type="text" placeholder="enter Vehicle number" value={vehicleNumber} onChange={handleVehicleChange}/>
                </div>
                <div>
                <input type="text" placeholder="enter amount" value={amount} onChange={handleAmountChange}/>
                </div>
                <div>
               
                </div>
            <button type="button" onClick={onSubmit}>submit</button>
           
            </form>
            </div>
        </div>
    )
}
