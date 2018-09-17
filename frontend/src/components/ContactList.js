import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import ContactItem from './ContactItem'
import axios from 'axios'

class ContactList extends Component {
    constructor(props){
        super(props)
        this.state={
            contact:[]
        }
    }
    componentDidMount(){
        axios.get("/contacts")
        .then(res=>{
            this.setState({
                contact:res.data
            })
        })
        .catch(err=>console.log(err))
    }

    render() {
        return (
            <div> <Link to="/"><button className="homebutton">home page</button></Link>
            <div className="list-contact">
                {this.state.contact.map((elem,i)=>{
                    return <ContactItem key={i} item={elem}/>
                })}
            </div></div>
        );
    }
   
}


export default ContactList;