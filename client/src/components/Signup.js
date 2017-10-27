import React, { Component } from "react";
import axios from 'axios';
import "materialize-css";
import "react-materialize";


class SignupComponent extends React.Component {

  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    signupFail: false
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  attemptSignup = () => {

    const {firstname, lastname, email, password} = this.state;
    axios.post('/signup', {
      firstname,
      lastname,
      email,
      password
    }).then(response => {
        this.setState({
          signupFail: false
        });
        this.props.onSuccess(response.email);
        this.props.history.push('/welcome');
    }).catch(response => {
      this.setState({
        signupFail: true
      })
    })
  }

  render() {
    return (
    <div className='signup flow-text white-text'>
      <h4>First Name</h4>
      <input
    name='firstname'
    value={this.state.firstname}
        onChange={this.handleChange}
        />
        <div className="flow-text white-text"></div>
        <h4>Last Name</h4>
        <input
      name='lastname'
      value={this.state.lastname}
          onChange={this.handleChange}
          />
          <div className="flow-text white-text"></div>
          <h4>Email</h4>
    <input
      name='email'
      value={this.state.email}
      onChange= {this.handleChange}
    />
    <div className="flow-text white-text"></div>
    <h4>Password</h4>
   <input
      name='password'
      type='password'
      value={this.state.password}
      onChange= {this.handleChange}
   />
   <div className="flow-text white-text"></div>
   <h4>Confirm Password</h4>
   <input
     name='confirmPassword'
     type='password'
     value={this.state.confirmPassword}
     onChange={this.handleChange}
   />
   <button onClick={() => {
     this.attemptSignup()
   }}> Signup! </button>

   {this.state.signupFail &&
     <h3 className='flow-text white-text'>One of the fields contains invalid data.
       <br></br><br></br>
       Please ensure that you've entered your email and other information correctly!</h3>
   }
   </div>
 )
  }
}

export default SignupComponent
