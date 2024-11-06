import React from "react";
import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
} from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const handleLogin = (provider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
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
