import React from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    let redirect = this.props.location.query.redirect || '/Tutorial';
    this.state = { error: false, redirect };
  }

  signUp(e) {
    e.preventDefault();
    let email = this.refs.newEmail.value;
    let password = this.refs.newPassword.value;
    this.props.dispatch(signup(email, password, this.props.history, this.state.redirect));
  }

  signIn(e) {
    e.preventDefault()
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    this.props.dispatch(login(email, password, this.props.history, this.state.redirect));
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2 className="center">Sign Up</h2>
          <form onSubmit={this.signUp}>
            <input ref="newEmail" placeholder="email" />
            <input type="password" ref="newPassword" placeholder="password"/>
            <br />
            <button className="btn grey" type="submit">Sign Up</button>
          </form>
          <h2 className="center">Sign In</h2>
          <form onSubmit={this.signIn}>
            <label><input ref="email" placeholder="email"/></label>
            <label><input type="password" ref="password" placeholder="password" /></label><br />
            <button className="btn grey" type="submit">Sign In</button>
          </form>
        </div>
      </div>
     )
   }
}



export default connect()(Login);
