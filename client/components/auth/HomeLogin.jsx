import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const HomeLoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated &&
    <div className="home-btn"><button className="register-button" onClick={() => loginWithRedirect()}>
      Register</button></div>);
    // <button className="register-button" onClick={() => loginWithRedirect()}>
    //   Register</button>);
      
      

};

export default HomeLoginButton;