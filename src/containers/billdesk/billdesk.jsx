import React, { Component } from 'react'
import axios from 'axios';
import '../../../src/App.css'
import { Scrollbars } from 'react-custom-scrollbars';


export default class Billdesk extends Component {
    constructor(){
        super();
        this.state={
            datas:[]
        }
        }
       onChangeHandler=(e)=>{
           this.setState({No:e.target.value});
       }
       
        
        onClickHandler=(e)=>{
           
               var no=this.state.No
            
            axios.get(`https://transitt.herokuapp.com/trip/`+no)
            .then(res=>{
                console.log(res)
                this.setState({datas:res.data})
                console.log(this.state.datas)
            })
            .catch(err=>{
                console.log(err)
            })
            
        }
       
        render(){
    return (
        <React.Fragment>
        
        <div className="bill">
        <input  type="textarea" 
          name="textValue"  style={{width: "570px"},{height:"100px"}}/>
            
     <input type="number" id="input" onChange={this.onChangeHandler}/>
     <button onClick={this.onClickHandler}> search</button>
            <div className="view">
           
               <table>
               <tr>
                 
                   <th>LR.NO</th>
                   <th>Date</th>
                   <th>From</th>
                   <th>To</th>
                   <th>Vehicle.No</th>
                   <th>Amount</th>
                  
             </tr>
               {/* {this.state.datas.length>0 && this.state.datas.map(data=>(
              <span key={data.id}> */}
                
               
                     <tr>
                    <th>{this.state.datas.No}</th>
                     <th>{this.state.datas.date}</th> 
                     <th>{this.state.datas.from}</th>
                     <th>{this.state.datas.to}</th>
                     <th>{this.state.datas.vehicleNumber}</th>
                     <th>{this.state.datas.amount}</th>
                     </tr> 
                     
              {/* </span>
               ))} */}
               </table>
               <button onClick={() => window.print()}>PRINT</button>
        </div>

     

        </div>

        </React.Fragment>
    )
}
}
