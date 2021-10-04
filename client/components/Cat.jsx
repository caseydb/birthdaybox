import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";




function Cat () {

    const {user} = useAuth0();

    return (
        <>
            <img className="CatImage" src={`http://apimeme.com/meme?meme=Grumpy-Cat-Birthday&top=${user?.name}&bottom=You Remembered Me!`}/>
        </>
    )
}


export default Cat