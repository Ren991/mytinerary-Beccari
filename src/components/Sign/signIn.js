
import React from 'react'
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import { Link as LinkRouter } from 'react-router-dom';
import Snack from './snackbar';
import FacebookSignIn from './FacebookSignIn';


function SignIn(props) {

	const handleSubmit = (event) => {
		event.preventDefault()
		const logedUser = {
			email: event.target[1].value,//posicion del mail
			password: event.target[2].value,//posicion del password
			from: "form-Signin"
		}
		props.signInUser(logedUser)
    console.log(event.target[1]);    
	}
	
console.log(props);
	return (
      <div className="signInForm">
		
		<form className="signUpForm formIn" onSubmit={handleSubmit}>
			<h2 className="signInh3">Sign In</h2>
			<FacebookSignIn/>
			<div className="form-group input-group">
			<Snack/>	
				<input name="email" className="form-control" placeholder="Email address" type="email" />
			</div>
			<div className="form-group input-group">
				
				<input name='password' className="form-control" placeholder="Create password" type="password" />
			</div>

			<div className="form-group">
				
				<button type="submit" className="btn btn-primary btn-block"> SignIn  </button>
			
			</div>
			<div className="text-center dontAccount">Dont Have an account? <LinkRouter className="dontAccount" to="/signup">SignUp</LinkRouter> </div>
		</form>
		</div>

	)

}


const mapDispatchToProps = {
	signInUser: userActions.signInUser,

}



export default connect(null, mapDispatchToProps)(SignIn);