import { useState } from "react";
import { Box } from "@mui/material";
import LoginCard from "../../components/LoginCard/LoginCard";
import SingupCard from "../../components/SignupCard/SingupCard";

import "./Auth.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  function toggleLoginSignup() {
    setIsLogin((oldState) => !oldState);
  }

  return (
    <Box className={`box ${isLogin ? "boxLogin" : "boxRegister"}`}>
      {isLogin ? (
        <LoginCard changeToSignup={toggleLoginSignup} />
      ) : (
        <SingupCard changeToLogin={toggleLoginSignup} />
      )}
    </Box>
  );
}

export default Auth;
