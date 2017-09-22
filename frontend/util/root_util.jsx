import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser);
});
const Protected = { component: Component, path };
