import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions';

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
          <li><Link to="/tutorial">Tutorial</Link></li>
          <li><Link to="/myProjects">My Projects</Link></li>
          <li><Link to="/newProject">New Project</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><a onClick={() => this.props.dispatch(logout())}>Logout</a></li>
        </div>
      )
    } else {
      return (<li><Link to="/login">Sign In</Link></li>);
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">GlobeIT</a>
            <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              {this.links()}
            </ul>
            <ul className="side-nav" id="mobile">
              {this.links()}
            </ul>
          </div>
        </nav>
        {this.props.children}
        <div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
 return { auth: state.auth };
}

export default connect(mapStateToProps)(App);
