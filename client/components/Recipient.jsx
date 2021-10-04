import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { deleteRecipientThunk, updateRecipientThunk } from '../actions/recipient'



const Recipient = (props) => {
  

const {dispatch, recipient } = props

const [ toggle, setToggle ] = useState(false)
const [ recipientName, setRecipientName ] = useState('')


const [updateData, setUpdateData] = useState({
        name:'',
        birthdate: '',
        address:''
      })


function deleteHandler (id) {
    dispatch(deleteRecipientThunk(id))
  }


function updateHandler (e, id, updateData) {
    dispatch(updateRecipientThunk(id, updateData))
}


const toggleEditing = () => {
    setToggle(!toggle)
}

function updateOnChange (e) {
    e.preventDefault()
    const updatedValue = {
      ...updateData,
      [e.target.name]: e.target.value
    }
    setUpdateData(updatedValue)
  }


const updateForm = () => {
    return  (
        <>
            <form onSubmit={(e)}>
                <label htmlFor="name">Name: </label>
                <input onChange={(e) => updateOnChange(e)} value={updateData.name} placeholder="Name" type="text" name="name" />
                <label htmlFor="birthdate">Birthdate: </label>
                <input onChange={(e) => updateOnChange(e)} value={updateData.birthdate} placeholder="YYMMDD eg: 20011010" type="text" name="birthdate" />
                <label htmlFor="address">Address: </label>
                <input onChange={(e) => updateOnChange(e)} value={updateData.address} placeholder="eg: 20 Copeland Street, Naenae, Lower Hutt" type="text" name="address" />
                <button type="submit"> update </button>
            </form>
        </>)
}

  return (
    <>
            <li key={recipient.id}> Name:{recipient.name} Birth Date:{recipient.birthdate} Address:{recipient.address} 
            <button onClick={() => deleteHandler(recipient.id)}>Delete</button>
            </li>
            {
                toggle ? (
                <>
                    {updateForm(recipient.id, updateData)}
                    <button onClick={toggleEditing}>Close</button>
                </>
                    ) : <button onClick={() => toggleEditing()}>Update</button>
            }

    </>

    )
}


export default connect() (Recipient)
