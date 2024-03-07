import React from 'react';

const Bill = ({payDependancy , handelChange}) => {
    return (
        <div className=''>
            <label className='form-label'>How Much Was The Bill ? :</label>
            <input 
                name='bill'
                className='form-control ' 
                type='number' 
                placeholder='bill value'
                value={payDependancy.bill || ''} 
                onChange={(e)=>handelChange(e)}/>
        </div>
    );
}

export default Bill;
