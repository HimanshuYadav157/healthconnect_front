import React, { Component } from "react";
class AddPatient extends Component {
  state={name:"",age:""}; 
  handleChange=(e)=>this.setState({[e.target.name]:e.target.value});
  handleSubmit=(e)=>{e.preventDefault(); alert(`Patient Added: ${this.state.name}`);}
  render(){return(
    <div>
      <h3>Add Patient</h3>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
        <input type="number" name="age" placeholder="Age" onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );}
}
export default AddPatient;
