import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
const LoginPage = ({ startLogin }) => {
  return (
    <div>
      <button onClick={startLogin}> LOGIN</button>
    </div>
  );
};

const mapDispatchToProps = dispath => ({
  startLogin: () => dispath(startLogin())
});
export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
