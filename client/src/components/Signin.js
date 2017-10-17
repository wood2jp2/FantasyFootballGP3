import React, { Component } from "react";

class SigninComponent extends Component {
  constructor(){
    super();
    this.state = {
      authenticated: false,
      username: '',
      password: ''
    }
  }

  handleChange = e => {
<<<<<<< HEAD
    this.setState({
      [e.target.name]: e.target.value
    });
=======
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
>>>>>>> c8ea6bd2d464d9c6082ff0d661ec897189406624
  }

  render() {
    return (
    <div className='signin'>
    <h1>Username</h1>
    <input
      name='username'
      value={this.state.username}
      onChange={this.handleChange}
      />
    <h1>Password</h1>
    <input
      name='password'
      value={this.state.password}
      onChange={this.handleChange}
    />
<<<<<<< HEAD
    <button onClick={() => {
      this.attemptLogin
    }}> Sign in! </button>
    </div>
  )
 }
}
=======
    </div>
  )
  //   <input
  //     name='username'
  //     value={this.state.username}
  //     onChange= {this.handleChange}
  //   />
  //   <input
  //     name='password'
  //     value={this.state.password}
  //     onChange= {this.handleChange}
  //  />
  //  <button onClick={() => {
  //    this.attemptLogin
  //   }> Sign in! </button>


  }
 }

>>>>>>> c8ea6bd2d464d9c6082ff0d661ec897189406624
export default SigninComponent
