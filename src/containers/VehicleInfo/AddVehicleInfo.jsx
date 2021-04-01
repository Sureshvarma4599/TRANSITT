import axios from 'axios';
import React,{useState} from 'react'
import '../../App.css'


export default function AddVehicleInfo() {

    const [vehicle,setNo]=useState(" ")
    const [type,setType]=useState('')
    const [status,setStatus]=useState('')
    const [capacity,setCapacity]=useState('')
  
    const handleNoChange=(e)=>{
        setNo(e.currentTarget.value)
    }
    
    const handleTypeChange=(e)=>{
        setType(e.currentTarget.value)
    }
    
    const handleStatusChange=(e)=>{
        setStatus(e.currentTarget.value)
    }

    
    const handleCapacityChange=(e)=>{
        setCapacity(e.currentTarget.value)
    }
    
    const onSubmit=(e)=>{
        
        const data ={
           vehicle:vehicle,
           type:type,
           status:status,
           capacity:capacity
        }
      
        axios.post('https://transitt.herokuapp.com/vehicle/Sureshrajum8888@gmail.com',data)
        .then(res=>{
            console.log(res.data)
            
        })
    }
        return (
        <div>
            <div className="details">
            <form>
               
               <div>
                <input type="text" placeholder="vehicle-no" value={vehicle} onChange={handleNoChange}/>
                </div>
             <div>
                <input type="text"  placeholder="vehicle-type" value={type} onChange={handleTypeChange}/>
                </div>
               <div>
                <input type="text" placeholder="vehicle-status" value={status} onChange={handleStatusChange}/>
                </div>
              <div>
                <input type="text" placeholder="vehicle-capacity" value={capacity} onChange={handleCapacityChange}/>
                </div>
            <button type="button" style={{marginLeft:"23%"}} onClick={onSubmit}>submit</button>
           
            </form>
            </div>
        </div>
    )
}
