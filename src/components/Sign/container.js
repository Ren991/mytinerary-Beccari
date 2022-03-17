import React from "react";
import { connect } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import userActions from "../../redux/actions/userActions";


function Container(props) {
  function SignOut() {
    props.signOutUser(props.user.email);
  }

  return (
    <>
    
      {props.user ? (
        <>
          <h1>
            Welcome {props.user.name} from {props.user.from[0]}
          </h1>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <button
              onClick={SignOut}
              className="btn btn-primary btn-block"
              style={{ maxWidth: 400 }}
            >
              {" "}
              SignOut{" "}
            </button>
          </div>
        </>
      ) : (
        <h1>There is no user connected</h1>
      )}
      <div className="card bg-light">
        <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
          <h4 className="card-title mt-3 text-center">User Account</h4>
          <p className="text-center">Get started with your free account</p>
          <LinkRouter to="/signIn">
            <button className="buttonClick s">Sign In</button>
          </LinkRouter>
          
          <p className="divider-text">
            <span className="bg-light">OR</span>
          </p>

          <LinkRouter to="/signUp">
            <button className="buttonClick s">Sign Up</button>
          </LinkRouter>
        </article>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.userR.user,
  };
};
const mapDispatchToProps = {
  signOutUser: userActions.signOutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
