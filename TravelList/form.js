import React from 'react';

export default function Form({needs , handelChange , handelSubmit}){
    return(
        <div className='bg-success p-2'>
            <form className='form d-flex align-items-center p-3 rounded' onSubmit={handelSubmit}>
                <label className='mx-3'>What de you need for your 😍 trip</label>
                <input 
                    className='numOfNeeds mx-3 form-control' 
                    type='number' 
                    name='num'
                    value={needs.num || ''}
                    onChange={handelChange}
                />
                <input 
                    className='mx-3 form-control w-25 ' 
                    type='text' 
                    name='item' 
                    placeholder='item ...'
                    value={needs.item || ''}
                    onChange={handelChange}
                />
                <button 
                    className='btn btn-info mx-4'
                >Add</button>
            </form>
        </div>
    )
}