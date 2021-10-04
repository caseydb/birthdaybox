import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getcompliment } from '../apis/compliment'
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";




toast.configure()


function PayForm () {
    
    const [comp, setComp] = useState(null)
    const history = useHistory()
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        refreshCompliment()
        }, [])
    
    const refreshCompliment = () => {
            getcompliment()
            .then(getcomp => {
             setComp(getcomp) 
            })
        }

    const lastMessage = () => {
            history.push('/thankyou')
        }

    const payHandler = (e) => {
        e.preventDefault()
        toast.info(`Thanks ${user.name}! Your special one got your gift box with your special compliment`, 
        { position: toast.POSITION.TOP_CENTER, autoClose: 2000})

        setTimeout((lastMessage),5000)

    }

return (
    <>
        <div>
            <h2 className='cardDet-Header'>Card Details <img className="emoji" src= "/images/birthday-cake.png"/></h2>
            <form onSubmit={payHandler}>
                <label className='cardDet-Input'><strong>Name on Card 💳</strong></label>
                <input className='cardDet-Input' 
                required="required" 
                placeholder="Lisa Copp" 
                type="text" 
                name="name" />
                <label className='cardDet-Input'><strong>Card Number </strong></label>
                <input className='cardDet-Input' 
                required="required" 
                placeholder="eg: 4242 4242 4424 2424" 
                type="number" 
                name="card number" />
                <label className='cardDet-Input'><strong>Expiry Date</strong></label>
                <input className='cardDet-Input' 
                placeholder="MM/YY" 
                required="required"
                type="text" 
                name="date" />
                <label className='cardDet-Input'><strong>Security Code</strong></label>
                <input className='cardDet-Input' 
                placeholder="CVC" 
                required="required"
                type="number" 
                name="security code" />
                <div className="compliment">
                {comp ? <p className='make-green'>{comp.compliment}</p> : <p>You are a great friend...</p>}
                </div>
                <div>
                <button type="button" className="cardDet-compliment-btn" onClick={refreshCompliment}>Change Compliment</button>
                </div>
                <button className="cardDet-submit-btn" >Send</button>
              </form>
        </div>
    </>
        
 )

}



export default PayForm
