import React from 'react';

export default function Need({needs}){
    return(
        <div className='bg-white d-inline p-2 m-2 rounded-4'>
            <input type='checkBox'/>
            <span className='mx-1 text-black'>{needs.num}</span>
            <span className='mx-1 text-black'>{needs.item}</span>
            <span 
                className='text-danger mx-2 del-need-btn'
                onClick={()=> console.log("is cliked")}
            >X</span>
        </div>  
    )
}