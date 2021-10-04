import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteRecipientThunk, updateRecipientThunk } from '../actions/recipient'

function RecipientsList(props) {
    const { dispatch, recipients } = props

    function deleteHandler(id) {
        dispatch(deleteRecipientThunk(id))
    }
    console.log("recipients ", recipients)
    console.log("recipients name ", recipients.name)

    return (
        <>
            <div>
                <h1 className='gift-title'>Birthday Tracker</h1></div>
            <div className='table-container'>

                <div className="table-box">
                    <table className='myTable'>
                        <tbody>
                            <tr className='table-heading'>
                                <td>Name</td>
                                <td>Birthday</td>
                                <td>Address</td>
                                <td></td>
                            </tr>
                        </tbody>

                        {recipients?.map(recipient => {
                            return (
                            <tbody key={recipient.id}>
                            <tr>
                                <td>{recipient.name}</td>
                                <td className='column'>{recipient.birthdate}</td>
                                <td>{recipient.address}</td>
                                <td>
                                    <button className="delete-button" onClick={() => deleteHandler(recipient.id)}>Delete</button>
                                </td>
                            </tr>
                            </tbody>
                            
                            
         
                            )
                        })
                        }
                    </table>
                    <div><img className="home-image" src="/images/swish-image.png" alt="people with giant present box!" /></div>
                </div>
            </div>

        </>
    )
}



function mapStateToProps(globalState) {
    const sortRecipients = globalState.recipient.sort((a, b) => {
        //by month and then by day
        let d1 = new Date(a.birthdate); // 1993-02-15T00:00:00Z =>   1993-02-14T20:00:00EST
        let d2 = new Date(b.birthdate);
        if (d1.getUTCMonth() > d2.getUTCMonth()) {
            return 1;
        } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
            return -1;
        } else {
            //same month
            return d1.getUTCDate() - d2.getUTCDate();
        }
    });
    return {
        recipients: sortRecipients
    }

}

export default connect(mapStateToProps)(RecipientsList)
