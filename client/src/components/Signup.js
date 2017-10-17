import React, { Component } from "react";

class SignupComponent extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  render() {
    return (
    <div className='signup'>
      <h4>First Name</h4>
      <input
        name='firstName'
        value={this.state.firstName}
        onChange={this.handleChange}
        />
        <h4>Last Name</h4>
        <input
          name='lastName'
          value={this.state.lastName}
          onChange={this.handleChange}
          />
          <h4>Email</h4>
    <input
      name='email'
      value={this.state.email}
      onChange= {this.handleChange}
    />
    <h4>Password</h4>
   <input
      name='password'
      type='password'
      value={this.state.password}
      onChange= {this.handleChange}
   />
   <h4>Confirm Password</h4>
   <input
     name='confirmPassword'
     type='password'
     value={this.state.confirmPassword}
     onChange={this.handleChange}
   />
   <button onClick={() => {
     this.attemptSignup
   }}> Signup! </button>
   </div>
 )
  }
}

export default SignupComponent
