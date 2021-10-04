import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './auth/Login'
import Profile from './auth/Profile'
import HomeNotifcation from './HomeNotification';

function Nav ({cart}) {

  const { isAuthenticated } = useAuth0();

  const [ cartCount, setCartCount ] = useState(0)

  useEffect(()=> {
    let count = 0
    cart.forEach(item => {
      count += item.qty
    })
    setCartCount(count)

  }, [cart, cartCount])


  return (    
    
    <header>
      
      <div className='container'>
        <nav>
          <div className="row">
             <div className="flex-start">
              <Link className='nav-two' to="/">Home</Link>
              <Link className='nav-two' to="/about">About</Link>
              <Link className='nav-two' to="/gifts">Gifts</Link>
              {isAuthenticated &&
              <div>
              <Link className='nav-two' to="/birthdays">Birthdays</Link>
              <Link className='nav-two' to="/cart">Cart</Link></div>}
            </div>

            <div className="flex-end">
              {isAuthenticated && <HomeNotifcation/>}
              <LoginButton className="button-blue"/>
              <Profile/>
            </div>
          </div>
        </nav>
      </div>

    </header>
      
    )
  }

function mapStateToProps (globalState) {
  return {
    cart: globalState.cart
  }
}


export default connect(mapStateToProps) (Nav)
