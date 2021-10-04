import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'




function  Checkout () {
    const history = useHistory()

    function sendHandler(e){
        e.preventDefault()
        history.push('/payform') //redirecting to payform page
    }

    return (
        <>
        
        <div className="checkout-container">
            <h2 className='checkout-Header'>Checkout<img className="emoji" src= "/images/wrapped-giftbox.png"/></h2>
            <div className='checkout--p'>Contact Information</div>
            <form onSubmit={sendHandler}>
                <input className='checkout-Input' 
                placeholder="Full Name" 
                required="required" 
                type="text" 
                name="name" 
                />
                <input className='checkout-Input' 
                placeholder="eg: serenestha@gmail.com" 
                required="required" 
                type="text" 
                name="email" />
                <input className='checkout-Input' 
                placeholder="City" 
                type="text" 
                name="city" />
                <input className='checkout-Input' 
                placeholder="Country" 
                required="required" 
                type="text" 
                name="Country" />
                <input className='checkout-Input' 
                placeholder="Postcode/Zipcode" 
                required="required" 
                type="number" 
                name="postcode/zipcode" />
                <input className='checkout-Input' 
                placeholder="Phone/Mobile number" 
                required="required" 
                type="number" 
                name="Phone number" />
                <div className='checkout-Input'>
                    <select className="dropdown" required="required">
                        <option value="">Select Payment Methods</option>
                        <option value="1">Debit Card</option>
                        <option value="2">Credit Card</option>
                        <option value="2">Master Card</option>
                    </select>
                </div>
                <button className="checkout-submit-btn" type='Send'><img className="arrow" src= "/images/arrow.png"/></button>
              </form>
              </div>
        
        </>
    )
}



export default connect() (Checkout)