import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {User} from './user';

import {Newuser} from './newuser';
export default class userview extends React.Component{
 
    constructor(props){
      super(props);
      let usercheck = ((props.match.params.id)? true:false);
      
      this.state = {
        persons: [],
        userview:usercheck,
        newuserview:false,
        uuid:props.match.params.id,
        name:null,
        email:null,
        notes:null,
        enabled:true,
        link:props.match.params.id,
        offset:0,
        limit:10,
        total:0,
        numberofpage:(this.total/this.limit),
        current:1,
        clickedbutton:null
      }
    }
    componentDidMount(){
        axios.get(`/users/?offset=${this.state.offset}`).then(res => { 
        this.setState({persons: res.data.data,total:res.data.total,numberofpage:Math.floor(res.data.total/this.state.limit)});
        })
    }
    handleSubmit = (e) =>{
      e.preventDefault();

      if(this.state.clickedbutton === "+"){
          if(this.state.current < this.state.numberofpage ){
            this.state.current+=1;
          }
      }else if(this.state.clickedbutton === "-"){
        if(this.state.current > 0 ){
          this.state.current-=1;
        }
      }
      axios.get(`/users/?offset=${this.state.current}`).then(res => {
             
        this.setState({persons: res.data.data});
        
      })
      .then(function (res){
          
      })
      .catch(function (err){
        
      })
    }
    render (){
      let userviewclose = () => this.setState({userview:false,newuserview:false})
      
        return(
          
          <div className='row'>
           
                <form onSubmit={this.handleSubmit}>
                <div className="row">
                      <div className="card">
                      <Button
                          type="submit" onClick = {()=> this.setState({clickedbutton:"-"})}
                      >Previous
                      </Button>
                      </div>
                      <div className="card">
                      
                      <Button
                          type="submit" onClick = {()=> this.setState({clickedbutton:"+"})}
                      >Next
                      </Button>
                      </div>
                      </div>
                </form>
            <div className="card"  style={{ marginLeft: "auto" }}>
              <Button
                    onClick = {()=> this.setState({newuserview:true})}
                >Add New User +
              </Button>
           
            </div>
            
            <div className='row' >
                {this.state.persons.map(persons => (
                  <div className="col-sm-6 col-md-4" key={persons.uuid}>
                  <div className="card"key={persons.uuid}>
                    <div className="card-body"key={persons.uuid}>
                <h5 className="card-title"key={persons.uuid}><strong>{persons.name}</strong></h5>
                <p className="price">{persons.email}</p>
                      <div className="text-center">
                      
                        <Link to={Link} to={persons.uuid}><Button
                        onClick = {()=> this.setState({userview:true,uuid:persons.uuid,name:persons.name,email:persons.email,notes:persons.notes,enabled:persons.enabled})}
                        
                        key={persons.uuid}
                        ></Button></Link>
                      </div>
                    </div>
                  </div>  
                </div>
                
                ))}
                 <User
                        uuid={this.state.uuid}
                        name={this.state.name}
                        email={this.state.email}
                        notes={this.state.notes}
                        enabled={this.state.enabled}
                        show={this.state.userview}
                        onHide={userviewclose}
                />
                <Newuser
                        show={this.state.newuserview}
                        onHide={userviewclose}
                />
              </div>
              </div>
          )
    }
};