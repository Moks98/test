import React from "react";
import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
} from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (provider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        navigate("/check-in"); // Redirect to check-in after successful login
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => handleLogin(googleProvider)}>
        Login with Google
      </button>
      <button onClick={() => handleLogin(facebookProvider)}>
        Login with Facebook
      </button>
      <button onClick={() => handleLogin(twitterProvider)}>
        Login with Twitter
      </button>
    </div>
  );
};

export default Login;
