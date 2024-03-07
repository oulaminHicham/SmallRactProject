import React from 'react';

export default function NextBtn({handelFun}){
    return(
        <>
            <button className='btn btn-primary px-4' onClick={handelFun}>Next</button>
        </>
    )
}