import React from "react"
export default function Step({step , steptitle}){
    return(
        <>
            <div className='text-dark'>
                <h3>Step {step} : <span className='text-white'>{steptitle}</span></h3>
            </div>
        </>
    )
}