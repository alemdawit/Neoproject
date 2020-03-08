import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBIcon, MDBBtn} from
"mdbreact";
export default class userview extends React.Component{
    state = {
        persons: [],
    };
    componentDidMount(){
        axios.get(`/users`).then(res => {
        //console.log(res.data.data);    
        this.setState({persons: res.data.data});
        })
    }
    render (){
        return(
            

      <div className='row' >


    {this.state.persons.map(persons => (
      <div className="col-sm-6 col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><strong>{persons.name}</strong></h5>
            <p className="price">Email : {persons.email} </p>
            <div className="text-center">
              <button
                className="btn-custom"   
              >
                Edit
              </button>
              <button
                className="btn-custom"
              >
                VIEW
              </button>
            </div>
          </div>
        </div>
          
        </div>

        ))}

          </div>
        )
    }
};