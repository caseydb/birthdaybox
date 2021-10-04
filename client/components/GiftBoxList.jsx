import React, { useState, useEffect } from 'react'
import {connect} from "react-redux"
import { getAllGiftBoxesThunk } from '../actions/giftBox'
import GiftBoxItem from './GiftBoxItem'


function GiftBoxList(props) {
  //console.log(props)
 const { dispatch, giftList } = props

 useEffect(()=> {
   dispatch(getAllGiftBoxesThunk())
  },[])

  return (
    <>
      {/* <div className='table'>
                <table className='myTable'>
                    <tr className='table-heading'>
                        <td>Id</td>
                        <td>GiftItem</td>
                        <td>GiftPrice</td>
                        <td>Image</td>
                    </tr> */}
                    
                <div>
                  <h1 className='gift-title'>Birthday Gift Boxes</h1>
                  <div className="wrapper-container">
                  {giftList.map(eachGiftBox => {
                    return (
                      <GiftBoxItem key={eachGiftBox.id} gift={eachGiftBox} />
                    )
                  })}
                  </div>
                </div>
              )
            
            
                {/* {giftList?.map(eachGiftBox => {
                    return (
                      <GiftBoxItem/> */}
                        {/* // <tr key={eachGiftBox.id}>
                        //     <td>{eachGiftBox.id}</td>
                        //     <td>{eachGiftBox.giftItem}</td>
                        //     {/* string interpolation (${}) and using template string literal ((``) like concatenation)*/}
                        {/* //     <td className='column'>{`NZD $${eachGiftBox.giftPrice}`}</td> 
                        //     <td className='column'>{eachGiftBox.image}</td> 

                        // </tr>
                    )
                })
                }
                </table>
            </div> */} 
     
     </>
    )
  }

  function mapStateToProps (globalState) {
    return {
      giftList: globalState.giftBox
    }
  }
  

  export default connect(mapStateToProps) (GiftBoxList)