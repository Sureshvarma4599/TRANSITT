import axios from 'axios';
import React, { Component } from 'react'
import { Scrollbars } from 'rc-scrollbars';
import '../../../src/App.css'

export default class View extends Component {
    constructor(){
    super();
    this.state={
        datas:[],
        reload:false
    }
    }
    componentDidMount(){
        axios.get("https://transitt.herokuapp.com/trip/")
        .then(res=>{
            console.log(res)
            this.setState({datas:res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    onClickHandler=(id)=>{
        
        console.log(id)
        axios.delete("https://transitt.herokuapp.com/trip/"+id)
        .then(res=>{
            console.log(res)
            window.location.reload()
        })
        .catch(err=>{
            console.log(err)
        })
  
    }
    render() {
        return (
           <React.Fragment>
             
               <div className="views">
                   <h6>Trips : {this.state.datas.length}</h6>
               <table className="a" striped bordered hover>
               <tr>
                   <thead>
                   <th>No</th>
                   <th>Date</th>
                   <th>From</th>
                   <th>To</th>
                   <th>Vehicle.No</th>
                   <th>Amount</th>
                   <th>Actions</th>
                   </thead>
                  
                        </tr>
               {this.state.datas.length>0 && this.state.datas.map(data=>(
              <span key={data.id}>
                
               
             <tbody>
                   <tr>
                       <thead>
                    <td>{data.No}</td>
                     <td>{data.date}</td> 
                     <td>{data.from}</td>
                     <td>{data.to}</td>
                     <td>{data.vehicleNumber}</td>
                     <td>{data.amount}</td>
                     <td><button onClick={()=>{this.onClickHandler(data._id)}}>delete</button></td>
                     </thead>
                     </tr>
                 
              </tbody>
                         
            
              </span>
               ))}
               </table>
            
               <button onClick={() => window.print()}>PRINT</button>
               </div>
               
           </React.Fragment>
        )
               }
}
