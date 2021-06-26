
import firebase from "firebase/app";
import fire from "./fire";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from "../App";
import { useContext, useEffect, useState } from "react";

function Login() {

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
 
  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) =>{
        console.log(email);
      const lUser = {
        email: email
      }
      setUserToken();
      setLoggedInUser(lUser);
      history.replace(from);
      })
      .catch((error) => {
        setEmailError(error.message)
       console.log(error.message);
      }); 
  };
  

  const setUserToken = () => {
    fire.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
      sessionStorage.setItem('token', idToken)
    }).catch(function (error) {
      // Handle error
    });
  }
  return (
   
      <section className="container mt-5 ">
      <h1 className="text-center mb-5">Log In</h1>
      <div className="loginContainer text-center">
        <label htmlFor=""> Email</label>
        <br />
        <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
        <p className="text-danger"></p>
        <label htmlFor="">Password</label>
        <br />
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <p className="text-danger">{emailError}</p>
        <div className="btnContainer">
          <>
            <button className="btn btn-primary" onClick={handleLogin}>Sign In</button>
          </>

        </div>
      </div>
    </section>

  );
}

export default Login;