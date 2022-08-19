import "../Login.css";
import React, { useState } from "react";
import { auth } from "../Firebase";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/home");
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  return (
    <section>
    <div className="main">
      <h1 className="h1">Sign in</h1>
    
      <div className="control">
      <label className="label">E-mail</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="off"
        className="input"
        type="email"
        name="email"
      />
      </div>
      <div className="control">
      <label className="label">Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="off"
        className="input"
        type="password"
        name="password"
      />
      </div>
      <button onClick={signIn} className="button">
        Login
      </button>
      
      <button onClick={register} className="Button">
        Sign Up
      </button>
      <h1 className="words">
        By creating your account you agree to conditions of use and privacy
        notice
      </h1>
     
    </div>
    </section>
  );
}

export default Login;
