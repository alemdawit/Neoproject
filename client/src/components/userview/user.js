import React, { Component } from "react";
import {Modal, Button} from 'react-bootstrap';
import axios from 'axios';
import { Table } from 'react-bootstrap'
export class User extends Component {

    constructor(props){
        super(props);
       
        this.state = {
          persondetail : [],
          id : props.uuid,
          userfound:null,
          name:null,
          email:null,
          notes:null,
          enabled:null
        }
    }
    handleSubmit = (e) =>{
      e.preventDefault();
      
      const name = e.target.elements.btnname.value;
      const email = e.target.elements.btnemail.value;
      const note = e.target.elements.btnnote.value;
      const enabled = e.target.elements.chkenabled.checked;
      const id = e.target.elements.txtid.value;
      axios.put(`/users/${ id }`,{
          "name":`${name}`,
          "email":`${email}`,
          "notes":`${note}`,
          "enabled":`${enabled}`
      })
      .then(function (res){
          console.log(res);
      })
      .catch(function (err){
          console.log(err);
      })
    }
    componentWillMount(){
      axios.get(`/users/${ this.state.id }`).then(res => {
      console.log(res.data.id);
      if(res.data.id != null){
        this.setState({
          name:(res.data.id.name),
          email:res.data.id.email,
          notes:res.data.id.notes,
          enabled:res.data.id.notes,
        });
      }
      })
    }

    render(){
        return(
              
            <Modal
            {...this.props}
           
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >

            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter"> User View 
              </Modal.Title>
            </Modal.Header>
            <form onSubmit={this.handleSubmit}>
            <Modal.Body>
                UserID:
                <input type="text" name="txtid" value={this.state.id = this.props.uuid} disabled/><br/>

                  <Table responsive>
                      <thead>
                        <tr>
                        <th></th>
                          <th>Curent</th>
                          <th>New UpDate</th>
                        
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Full Name : </td>
                          <td><input type="text" value={ this.props.name || this.state.name } disabled/></td>
                          <td><input type="text" name = "btnname" placeholder="You New Name" /></td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td><input type="email" value={this.props.email || this.state.email} disabled/></td>
                          <td><input type="email" name = "btnemail" placeholder="You New Email"/></td>
                         
                        </tr>
                        <tr>
                          <td>Notes</td>
                          <td><textarea value={this.props.notes || this.state.notes} disabled></textarea></td>
                          <td><textarea name = "btnnote" placeholder="Enter New Note"></textarea></td>
                          
                        </tr>
                        <tr>
                          <td>Enabled</td>
                          <td><input type="text" value={this.props.enabled || this.state.notes} disabled/></td>
                          <td><input type="checkbox" name = "chkenabled"/></td>
                          
                        </tr>
                      </tbody>
                    </Table>
            </Modal.Body>
            <Modal.Body>
            </Modal.Body>
            <Modal.Footer>
              
              <Button type="submit" >Update</Button>
              <Button onClick={this.props.onHide}>Close</Button>
              
            </Modal.Footer>
            </form>
          </Modal>
        )
    }

}