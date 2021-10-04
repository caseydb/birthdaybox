import React, { useRef } from 'react';
import ReactNotifications from 'react-browser-notifications';
import { useAuth0 } from "@auth0/auth0-react";

function Notification () {

const reminder = useRef(null)
const { user, isAuthenticated } = useAuth0();

const showNotifications = () => {
    if(reminder.current.supported()) reminder.current.show();
  }

const handleClick = (event) => {   
   reminder.close(event.target.tag);
  }

    return (
      isAuthenticated && (
      <div>

        <ReactNotifications
          onRef={ref => reminder.current = (ref)} 
          title={user.name}
          body="Welcome to Birthday Box!"
          icon="icon.png"
          tag="abcdef"
          timeout="3000"
          onClick={event => handleClick(event)}
        />
        <button onClick={showNotifications}>
        <img className="home-emoji" src= "/images/notification-bell.png"/>
        </button>

      </div>
      )
    )
}


export default Notification