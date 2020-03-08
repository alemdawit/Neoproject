import React, { Component } from "react";
import {Modal, Button} from 'react-bootstrap';
import axios from 'axios';
import { Table } from 'react-bootstrap';
export class Newuser extends Component {

    constructor(props){
        super(props);
       
        
    }
    
    handleSubmit = (e) =>{
      e.preventDefault();

      const name = e.target.elements.btnname.value;
      const email = e.target.elements.btnemail.value;
      const note = e.target.elements.btnnote.value;
      const enabled = e.target.elements.chkenabled.checked;
      axios.post('/users/',{
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

    render(){
        return(
              
            <Modal
            {...this.props}
           
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <form onSubmit={this.handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter"> New User Add 
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table responsive>
                      <thead>
                        <tr>
                        <th>Full Name</th>
                          <th>Email</th>
                          <th>Notes</th>
                          <th>Enabled</th>
                        
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><input type="text" name = "btnname" placeholder="You New Name" /></td>
                          <td><input type="email" name = "btnemail" placeholder="You New Email"/></td>
                          <td><textarea name = "btnnote" placeholder="Enter New Note"></textarea></td>
                          <td><input type="checkbox" name = "chkenabled"/></td>
                        </tr>
                      </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit">Save</Button>
              <Button onClick={this.props.onHide}>Cancel</Button>
            </Modal.Footer>
            </form>
          </Modal>
        )
    }

}