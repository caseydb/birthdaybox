import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { getAllRecipientsThunk } from '../actions/recipient'

import About from './About'
import Nav from './Nav'
import Home from './Home'
import Checkout from './Checkout'
import PayForm from './PayForm'

import AddRecipient from './AddRecipient'
import RecipientsList from './RecipientsList'
import GiftBoxList from './GiftBoxList'
import Cart from './Cart'
import Cat from './Cat'


const App = (props) => {

  const {dispatch} = props
  useEffect(()=> {
    dispatch(getAllRecipientsThunk())
  }, [])

  return (
    <>
    <Route path='/' component={Nav} />
      <Route exact path='/' component={Home} />
      <Route path="/about" component={About} />
      <Route path='/recipientslist' component={RecipientsList}/>
      <Route path="/birthdays" component={AddRecipient} />
      <Route path="/gifts" component={GiftBoxList}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path = "/checkout" component={Checkout}/>
      <Route exact path = "/payform" component={PayForm}/>
      <Route exact path = "/thankyou" component={Cat}/>
    </>
    )
}

export default connect() (App)


