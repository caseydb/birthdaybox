import React, { useState, useEffect } from 'react'
import { getcompliment } from '../apis/compliment'

function Compliment () {
    const [comp, setComp] = useState(null)

    useEffect(() => {
        refreshCompliment()
    }, [])

    const refreshCompliment = () => {
        getcompliment()
        .then(getcomp => {
         setComp(getcomp) 
        })

    }
    return (
        <>
        {comp ? <p className='make-green'>{comp.compliment}</p> : <p>You are a great friend...</p>}
        <button onClick={refreshCompliment}>Get Compliment</button>
        </>
    )
}

export default Compliment