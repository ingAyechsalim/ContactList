import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

function deleteContact(id){
    axios.delete(`/delete-contact/${id}`)
    .then(res=>res.data)
    .catch(err=>console.log(err))
}

const ContactItem = ({item}) => {
    return (
        <div className="contact-item-container">
            <h1> Contact Name : {item.name}  </h1>
            <h2> Contact phone : {item.phone} </h2>
            <h3> Contact email : {item.email}</h3>
            <Link to={`/modifyContact/${item._id}`}>
            <input className="modifybutton" type="button" value="Modify"></input>
            </Link>
            <Link to="/">          
            <input className="deletebutton" type="button" value="Delete" onClick={()=>deleteContact(item._id)}></input>
            </Link>
        </div>
    );
};

export default ContactItem;