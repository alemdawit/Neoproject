import React, { Component } from "react";
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import axios from 'axios';



function Userview () {

    return(
              
        <div class="form-style-6">
    <h1>{user.name}</h1>
    <form onSubmit={patchUser}>
        <lable>Full Name</lable>
        <input type="text" value={user.name} disabled/>
        <input type="text" name = "btnname" placeholder="You New Name" /><br/>
        <lable>Email</lable>
        <input type="email" value={user.email} disabled/>
        <input type="email" name = "btnemail" placeholder="You New Email"/><br/>
        <lable>Notes</lable>
        <textarea value={user.notes} disabled></textarea><textarea name = "btnnote" placeholder="Enter New Note"></textarea><br/>
        <lable>Enabled</lable>
        <input type="text" value={user.enabled} disabled/><input type="checkbox" name = "chkenabled"/><br/>
        <button>Update</button>
    </form>
    </div>
    )

}








export default Userview