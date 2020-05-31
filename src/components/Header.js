import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import { startLogout } from "../actions/auth";
const Header = props => (
  <header>
    <Link to="/" className="app-title">
      <h1>Expensify</h1>
    </Link>
    <NavLink to="/dashboard" activeClassName="is-active">
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Add Expense
    </NavLink>

    <NavLink to="/about" activeClassName="is-active">
      About us
    </NavLink>
    <button onClick={props.startLogout}>LogOUT</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});
export default connect(
  undefined,
  mapDispatchToProps
)(Header);
