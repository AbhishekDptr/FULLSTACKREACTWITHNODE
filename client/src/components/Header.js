import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
  }

  renderContent() {
    switch (this.props.auth) {
      //based on user status null is when call is being made
      case null:
        return;
      //false is if user is logged out
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      //user is logged in and we have the profile returned from google oauth
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }
  render() {
    //console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            EMAILY
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Header);
