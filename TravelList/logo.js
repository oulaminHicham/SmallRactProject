import React from 'react';

export default function Logo(){
    return(
        <div className='p-3 d-flex justify-content-center align-items-center logo mt-3'>
            <img src='img/logo.png' alt='logo' className='px-3 logo-img'/>
            <h1 className='logo-title px-3'>FAR AWAY </h1>
            <img src='img/rocket.png' alt='logo' className='px-3 logo-img' />
        </div>
    )
}