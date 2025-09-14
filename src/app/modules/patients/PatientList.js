import React, { Component } from "react";
class PatientList extends Component {
  state = { patients: [{id:1,name:"Alice"}, {id:2,name:"Bob"}] };
  render() {
    return (
      <div>
        <h3>Patients</h3>
        <table>
          <thead><tr><th>ID</th><th>Name</th></tr></thead>
          <tbody>{this.state.patients.map(p=> <tr key={p.id}><td>{p.id}</td><td>{p.name}</td></tr>)}</tbody>
        </table>
      </div>
    );
  }
}
export default PatientList;
