import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <button className="toggle-btn" onClick={this.props.toggleSidebar}>
          ☰
        </button>
        <h2>HealthConnect Dashboard</h2>
        <button className="logout-btn" onClick={this.props.onLogout}>
          Logout
        </button>
      </div>
    );
  }
}

export default Header;
