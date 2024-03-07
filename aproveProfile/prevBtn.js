import React from "react"
export default function PrevBtn({handelFun}){
    return(
        <>
            <button className='btn btn-primary' onClick={handelFun}>previus</button>
        </>
    )
}