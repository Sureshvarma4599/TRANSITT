import axios from 'axios';
import React, { Component } from 'react'
import '../../../src/App.css'

export default class VehicleInfo extends Component {
    constructor(){
    super();
    this.state={
        datas:[]
    }
    }
    componentDidMount(){
        axios.get("https://transitt.herokuapp.com/vehicle/")
        .then(res=>{
            console.log(res)
            this.setState({datas:res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
           <React.Fragment>
               <div className="views">
                   <h6>Vehicles:{this.state.datas.length}</h6>
               <table>
               <tr>
                   <thead>
                   <th>Vehicle.NO</th>
                   <th>Type</th>
                   <th>Status</th>
                   <th>Capacity</th>
                  
                   </thead>
                        </tr>
               {this.state.datas.length>0 && this.state.datas.map(data=>(
              <span key={data.id}>
                
               
               
                     <tr>
                    <td>{data.vehicle}</td>
                     <td>{data.type}</td> 
                     <td>{data.status}</td>
                     <td>{data.capacity}</td>
                     
                     </tr> 
                     
              </span>
               ))}
               </table>
               </div>
           </React.Fragment>
        )
               }
}
