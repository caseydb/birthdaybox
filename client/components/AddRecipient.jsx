import React, { useState } from 'react'
import { connect } from 'react-redux'
import RecipientsList from './RecipientsList'
import { addRecipientThunk } from '../actions/recipient'


function AddRecipient(props) {
  const { dispatch } = props

  const [formIsVisible, setFormVisible] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    address: '',
  })

  const toggleForm = () => {
    setFormVisible(!formIsVisible)
  }

  function handleChange(e) {

    const newBirthday = {
      ...formData,
      [e.target.name]: e.target.value
    }
    setFormData(newBirthday)
  }

  const saveRecipient = () => {
    dispatch(addRecipientThunk(formData))
  }

  const renderForm = () => {
    return (
      <>
      
        <div className='form-Container'>
          <div className="left-Side">
            <h3 className='form-Header'>Add Birthday</h3>
            <div className='form-Container-Inner'>
              <form>
                <input onChange={handleChange} value={formData.name} className='form-Input' placeholder="Name" type="text" name="name" required />
                <input onChange={handleChange} value={formData.address} className='form-Input' placeholder="Address" type="text" name="address" required/>
                <input onChange={handleChange} value={formData.date} className='form-Input' placeholder="Date" type="date" name="birthdate" required/>
                <button className="submit-Button" type='Add' onClick={saveRecipient} >Add</button>
              </form>
            </div>
          </div>
        </div>

      
      </>
    )
  }

  return (
    <div className="birthday">
      <RecipientsList />
      {
        formIsVisible ? (
          <>

            {renderForm()}
            {/* <button onClick={toggleForm}>Close</button> */}
            {/* {renderList()} */}
          </>
        ) : <button onClick={toggleForm}>Add new birthday</button>
      }

    </div>
  )
}

export default connect()(AddRecipient)