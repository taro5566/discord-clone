import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../../firebase";
import "./Login.scss";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth , provider ).catch((err) => {
      alert(err.message);
    });
  };

  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./discordLogo.png" alt="" />
      </div>

      <Button onClick={signIn}>ログイン</Button>
    </div>
  );
};

export default Login;
