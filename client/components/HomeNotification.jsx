import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from 'react-redux'



const HomeNotifcation = (props) => {

    const { user, isAuthenticated } = useAuth0();
    const { dispatch, recipients } = props
    // console.log("recipient ", recipients[0].birthdate)
    
    const notifyHandler = () => {
        toast.success(`Welcome ${user.name}! The next upcoming birthday is for Balto on 12 October`, { position: toast.POSITION.TOP_CENTER})
    }
    
    return (
        <div className="home-notif">

        <button onClick={notifyHandler}>
        🔔
        </button>
        </div>
        )}

    function mapStateToProps(globalState) {
        return {
            recipients: globalState.recipient
        }
      
      }
    export default connect(mapStateToProps) (HomeNotifcation)

