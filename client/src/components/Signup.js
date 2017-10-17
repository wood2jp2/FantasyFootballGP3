import React, { Component } from "react";
// import API from "../utils/API";
//
class SignupComponent extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
    <div className='signup'>
      <input
        name='firstName'
        value={this.state.firstName}
        onChange={this.handleChange}
        />
        <input
          name='lastName'
          value={this.state.lastName}
          onChange={this.handleChange}
          />
    <input
      name='email'
      value={this.state.email}
      onChange= {this.handleChange}
    />
   <input
      name='password'
      value={this.state.password}
      onChange= {this.handleChange}
   />
   <button onClick={() => {
     this.attemptSignup
   }}> Signup! </button>
   </div>
 )
  }
}

export default SignupComponent
