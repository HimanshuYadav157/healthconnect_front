import React, { Component } from "react";
import "../../../../App.css";

class Login extends Component {
  state = { username: "", password: "" };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "admin" && password === "123") this.props.onLogin();
    else alert("Invalid Credentials (admin / 123)");
  };

  render() {
    return (
        <div className="login-container">
      <div className="login-page">
        <div className="login-card">
          <div className="login-header">
            <img src="/hospital-logo.png" alt="Hospital Logo" className="logo" />
            <h2>HealthConnect</h2>
          </div>
          <form onSubmit={this.handleSubmit} className="login-form">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;
