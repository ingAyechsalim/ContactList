import React, {Component} from'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class ModifyContact extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            phone:"",
            email:""
        }
    }

    componentDidMount(){
        axios.get(`/contact/${this.props.match.params.id}`)
        .then(res=>{
            this.setState({
                name:res.data.name,
               phone:res.data.phone,
                email:res.data.email,
            })
        })
    }
  contactUpdate=()=>{
      axios.put(`/modify-contact/${this.props.match.params.id}`,{
          name:this.state.name,
          phone:this.state.phone,
          email:this.state.email
      })
      .then(res=>res.date)
      .catch(err=>console.log(err))
  }

    
    render() {
        return (
            <div > 
                <h1> Modify Contact</h1>
                <form className="modiform" >
                <label> Name : </label>
                <input name="name" value={this.state.name} placeholder="name"onChange={e=>this.setState({name:e.target.value})} ></input>
                <label> Phone: </label>
                <input name="phone" value={this.state.phone}placeholder="phone number"type="Number" required onChange={e=>this.setState({phone:e.target.value})}></input>
                <label> Email : </label>
                <input name="email" value={this.state.email} placeholder="email adresse" type="email" required onChange={e=>this.setState({email:e.target.value})}></input>
                <Link to="/contacts">
                <button className="modifybutton" onClick={this.contactUpdate}> Modify</button>
                </Link>
                </form>
            </div>
        );
    }
}

export default ModifyContact
