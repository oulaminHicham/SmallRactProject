import React from 'react';

const Satisfaction = ({children , name,payDependancy , handelChange}) => {
    return (
        <div>
            <label className='form-label mt-3'>{children}</label>
            <select 
                className='form-select '
                name={name}
                value={payDependancy.name || ''}
                onChange={(e)=>handelChange(e)}
            >
                <option value={0} selected>Disatisfied (0%)</option>
                <option value={5}>it was okay (5%)</option>
                <option value={10}>it was good (10%)</option>
                <option value={20}>it was amazing (20%)</option>
            </select>
        </div>
    );
}

export default Satisfaction;
