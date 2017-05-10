import React, { Component } from 'react';
import Input from '../components/Input';

class Login extends Component {
  render() {
    return (
      <div>
        <Input placeText='手机号' />
        <Input placeText='验证码' />
      </div>
    );
  }
}

export default Login;