import React, {Component} from'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


class AddContact extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            phone:"",
            email:""
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    addcontact =()=>{
        axios.post("/add-contact",{...this.state})
        .then(res=>res.data)
        .catch(err=>console.log(err))
    }
    
    render() {
        return (
            <div className="modify-cantact-container"> 
                <h1> Add Contact</h1>
                <form className="Addform">
                <label>  Full Name : </label>
                <input name="name" placeholder="name" onChange={this.handleChange}></input>
                <label>  Phone: </label>
                <input name="phone" placeholder="phone number" onChange={this.handleChange}type="Number" required></input>
                <label> Email : </label>
                <input name="email" placeholder="email adresse" onChange={this.handleChange}type="email" required></input>
                <Link to="/contacts">
                <button className="buttonadd" onClick={this.addcontact}>Add</button>
                </Link>
                </form>
            </div>
        );
    }
}

export default AddContact
