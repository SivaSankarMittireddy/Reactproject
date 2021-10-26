import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         password:""
      };
      this.login=this.login.bind(this);
    
      
    }
  
    login(){
        if(this.state.username=="siva"&& this.state.password=="254");
        alert("login successfully...."+this.state.username);
        
    }
    
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter user name....."value={this.state.username} onChange={(e)=> this.setState({username:e.target.value})}/><br></br><br></br>
        <input type="password" placeholder="Enter your password" value={this.state.password} onChange={(e)=> this.setState({password:e.target.value})}/><br></br><br></br>
        <button  onClick={this.login}>Login</button>
        <p>{this.state.username}</p>
        <p>{this.state.password}</p>
      </div>
    )
  }
}

export default Login
