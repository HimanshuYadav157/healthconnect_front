import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Sidebar extends Component {
  state = {
    search: "",
    modules: [
      { name: "Dashboard", path: "/" },
      { name: "Patients", path: "/patients" },
      { name: "Add Patient", path: "/add-patient" },
      { name: "Doctors", path: "/doctors" },
      { name: "Appointments", path: "/appointments" },
      { name: "Billing", path: "/billing" },
      { name: "Reports", path: "/reports" },
      { name: "Pharmacy", path: "/pharmacy" },
    ],
  };

  handleChange = (e) => this.setState({ search: e.target.value });

  render() {
    const { location } = this.props;
    const filtered = this.state.modules.filter((m) =>
      m.name.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div
        className="sidebar"
        style={{
          width: this.props.isOpen ? "220px" : "0",
          transition: "width 0.3s",
        }}
      >
        {this.props.isOpen && (
          <>
            <div className="sidebar-search">
              <input
                type="text"
                placeholder="Search..."
                value={this.state.search}
                onChange={this.handleChange}
              />
            </div>
            <ul className="sidebar-list">
              {filtered.map((mod, i) => (
                <li
                  key={i}
                  className={location.pathname === mod.path ? "active" : ""}
                >
                  <Link to={mod.path}>{mod.name}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default withRouter(Sidebar);
