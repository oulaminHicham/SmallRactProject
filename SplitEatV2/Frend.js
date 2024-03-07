import React from 'react';


export function Frend({ name, dexcreption, onSplitFrend, splitOpen }) {
    return (
        <div className='d-flex justify-content-center align-items-center mb-4'>
            <img src='img/avatar-1.jpg' alt='img' />
            <div className='mx-5'>
                <p className='mb-0'>{name}</p>
                <p className='text-danger'>{dexcreption}</p>
            </div>
            <button
                className='mx-5 btn btn-warning rounded-3'
                onClick={() => onSplitFrend(p => !p)}
            >
                {/* {splitOpen ? 'close' : 'select'} */}
                select
            </button>
        </div>
    );
}
