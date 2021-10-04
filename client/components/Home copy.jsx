import React from "react";
import HomeLoginButton from "./auth/HomeLogin";
import { useAuth0 } from "@auth0/auth0-react";


function Home() {

  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="hero-text-container">
        <h1 className="title">Birthday Box</h1>
        {isAuthenticated && <div className="home-btn"><button> Welcome {user.name} </button></div>}
        {/* <div className="home-btn"> */}
          <HomeLoginButton />
        {/* </div> */}

      </div>
        <img className="home-image" src="/images/Birthday-box.jpg" alt="people with giant present box!" />

    </>
  )
}


export default Home


