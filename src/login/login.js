import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  constructor(){
    super();
    this.state ={
      userName:"",
      passWord:"",
      remberPassWord:false
    }
  }
  componentWillMount(){
    this.state.userName = localStorage.getItem("userName") == null ? "":localStorage.getItem("userName")
    this.state.passWord = localStorage.getItem("passWord") == null ? "":localStorage.getItem("passWord")
  }
  changeUserName(val){
    this.setState({
      userName:val.target.value
    })
  }
  changePassWord(val){
    this.setState({
      passWord:val.target.value
    })
  }
  remberPassWord(){
    this.state.remberPassWord = !this.state.remberPassWord;
  }
  login(){
    if(this.state.remberPassWord){
      localStorage.setItem("userName",this.state.userName)
      localStorage.setItem("passWord",this.state.passWord)
    }
  }
  render() {
    return (
      <div className="likebody">
        <div className="App-login" alt="loginBackGroundImage">
          <div className="welcome">
              <div>欢迎,欢迎,热烈欢迎</div>
            <div className="center">
              <div style={{marginLeft:-152}}>
                记住密码 :
                <input type="checkbox" onChange={this.remberPassWord.bind(this)}/>
              </div>
              <div>
                用户名 :
                <input className="message" value={this.state.userName} onChange={this.changeUserName.bind(this)}/>
              </div>
              <div style={{paddingLeft:18}}>
                密码 :
                <input className="message" value={this.state.passWord} onChange={this.changePassWord.bind(this)} type="password"/>
              </div>
              <div style={{marginTop:20}}>
                <div className="buttonDiv" onClick={this.login.bind(this)} style={{marginLeft:'52%'}}>
                  <button className="loginButton">
                    <span className="buttonText">登录
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
