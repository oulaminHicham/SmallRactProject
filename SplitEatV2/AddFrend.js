import React from 'react';

export default function AddFrend() {
    return (
        <>
            <div className='bg-dark p-5 my-3 w-50 mx-auto rounded-4'>
                <label className='w-50 mb-3'>Frend Name :</label>
                <input className='form-control mb-3' type='text' /><br />

                <label className='w-50 mb-3'>Img url :</label>
                <input className='form-control' type='text' /><br />

                <div className='w-100 mt-3'>
                    <button className='btn btn-warning px-5 mx-auto'>Add</button>
                </div>
            </div>
        </>
    );
}
