import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';


function FacebookSignUp(props) {

  const responseFacebook = async (res) => {
    console.log(res)
    console.log(res.name)
      const fullNameSeparado = res.name.split(" ")
      console.log(fullNameSeparado)

      let nombre = fullNameSeparado[0]
      let apellido = fullNameSeparado[1]
      //console.log(nombre)
      //console.log(apellido)
console.log(props.selectPaises);
    const userData = {
      name:fullNameSeparado[0],
      lastName:fullNameSeparado[1],
      name: res.name,
      email: res.email,
      password: res.id,
      photo:res.picture.data.url,
      from: "facebook",
      
      country:props.pais,
    }
    console.log(res);
    await props.signUpUser(userData)
  }

  return (
    <FacebookLogin
    cssClass="buttonsocial my-facebook-button-class"
    icon="fa-facebook"
    textButton=" SignUp with Facebook"
      appId="4805413366241762"
      autoLoad={false} //Para que no se intente conectar automaticamente
      fields="name,email,picture"//Campos que queremos que facebook nos devuelva
      callback={responseFacebook}//Funcion que va a ser llamada cuando se haga click

    />
  );
}
const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(FacebookSignUp);