import React from 'react';

export function SpliBillForm() {
    return (
        <div className='bg-dark p-4 rounded-4 split--with--frend'>
            <h4 className='text-warning'>SPLIT BIIL WITH HIND </h4>

            <label className='w-50'>bill Vlaue</label>
            <input className='rounded-3 ' type='text' /><br />

            <label className='w-50'>Your Expence :</label>
            <input className='rounded-3' type='text' /><br />

            <label className='w-50'>Hind Expence :</label>
            <input className='rounded-3' type='text' /><br />

            <label className='w-50'>Witch is Paying bill :</label>
            <input className='rounded-3' type='text' /><br></br>

            <label className='w-50'>bill Vlaue</label>
            <input className='rounded-3' type='text' /><br />

            <button className='btn btn-warning px-5 '>split Bill </button>
        </div>
    );
}
