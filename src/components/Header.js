import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Sign in
          </Link>
        </li>


        <li className="nav-item">
          <Link to="register" className="nav-link">
            Sign up
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li>
          <h2>LOOGED IN! Dashboard!</h2>
        </li>

        <li className="nav-item">
          <Link
            to={'/'}
            className="nav-link">
            <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />
            {props.currentUser.username}
          </Link>
        </li>

        <li>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              props.logout();
            }}>
            Or click here to logout.
          </button>
        </li>

      </ul>
    );
  }

  return null;
};


class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} logout={this.props.logout} />
        </div>
      </nav>
    );
  }

  componentWillMount() {
    console.log(this);
  }
}

export default Header;
