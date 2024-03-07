import React from 'react';

export default function Options(){
    return(
        <div className='p-3 w-50 mx-auto option'>
                {/* <button className=''>SORT BY INPUT ORDER</button> */}
                <select className='rounded-4 mx-3 btn btn-info text-white px-3'>
                    <option>SORT BY INPUT ORDER</option>
                    <option>SORT BY INPUT ORDER</option>
                    <option>SORT BY INPUT ORDER</option>
                </select>
                <button className='rounded-4 mx-3 btn btn-info text-white px-3'>CLEARE LIST</button>
        </div>
    )
}