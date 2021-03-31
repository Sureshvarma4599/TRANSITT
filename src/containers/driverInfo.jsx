import axios from 'axios';
import React, { Component } from 'react'
import { Scrollbars } from 'rc-scrollbars';
import '../App.css'

export default class DriverInfo extends Component {
    constructor(){
    super();
    this.state={
        datas:[]
    }
    }
    componentDidMount(){
        axios.get("https://transitt.herokuapp.com/driver/")
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
               <h6>Drivers found:{this.state.datas.length}</h6>
               <table className="a" striped bordered hover>
               <tr>
                   <thead>
                   <th>Name</th>
                   <th>Age</th>
                   <th>Phone</th>
                   <th>Id</th>
                  
                   </thead>
                        </tr>
               {this.state.datas.length>0 && this.state.datas.map(data=>(
              <span key={data.id}>
                
               <tbody>
            
                     <tr>
                     <thead>
                    <td>{data.name}</td>
                     <td>{data.age}</td> 
                     <td>{data.phone}</td>
                     <td>{data.Id}</td>
                  
                     </thead>
                     </tr> 
              </tbody>
              </span>
               ))}
               </table>
            
               
               </div>
               
           </React.Fragment>
        )
               }
}
