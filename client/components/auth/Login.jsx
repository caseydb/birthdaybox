import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated &&
  
    <button className="login-button nav-two" onClick={() => loginWithRedirect()}>
      Log In / Register</button>);
    


};

export default LoginButton;