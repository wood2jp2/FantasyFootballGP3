<<<<<<< HEAD
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
=======
// import React, { Component } from "react";
// import API from "../utils/API";
//
// class SignupComponent extends React.Component {
//
//   state = {
//     username: '',
//     password: '',
//     email: ''
//   }
//
//   handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }
//
//   render() {
//     <div>
//     <input
//       name='username'
//       value={this.state.username}
//       onChange= {this.handleChange}
//     />
//    <input
//       name='password'
//       value={this.state.password}
//       onChange= {this.handleChange}
//    />
//    <button onClick={() => {
//      this.attemptSignup
//    }}> Signup! </button>
//    </div>
//   }
// }
>>>>>>> c8ea6bd2d464d9c6082ff0d661ec897189406624
