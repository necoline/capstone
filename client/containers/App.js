import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions';
let GlobeIT = require('../images/newglobeit.png')
let bg = require('../images/bgg.png');

class App extends React.Component {
  constructor(props) {
    super(props);
     this.links = this.links.bind(this);
  }

  componentWillMount() { // to keep user logged in if paged is refreshed
    if (!this.props.auth.isAuthenticated) {
      if (sessionStorage.userId && sessionStorage.token)
        this.props.dispatch({
          type: 'LOGIN',
          id: sessionStorage.userId,
          token: sessionStorage.token
        });
     }
   }

  componentDidMount() {
    window.jQuery('.button-collapse').sideNav();
  }

  links() {
    if (this.props.auth.isAuthenticated) {
      return (
        <div>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/myProjects">My Projects</Link></li>
          <li><Link to="/newProject">New Project</Link></li>
          <li><a onClick={() => this.props.dispatch(logout())}>Logout</a></li>
        </div>
      )
    } else {
      return (<li><Link to="/login">Login</Link></li>);
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              <img 
                src={GlobeIT}
                style={{ marginTop: '10px', width: '44%' }} 
              />
            </a>
            <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              {this.links()}
            </ul>
            <ul className="side-nav" id="mobile">
              {this.links()}
            </ul>
          </div>
        </nav>
        <div style={
          { 
            background: 'url(../images/bgg.png) no-repeat center 100px fixed',
            backgroundSize: 'contain',
            height: '100vh'
          }
        }>
          {this.props.children}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
 return { auth: state.auth };
}

export default connect(mapStateToProps)(App);
