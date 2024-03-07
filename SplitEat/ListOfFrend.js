import React, { useState } from 'react';
import AddFrend from './AddFrend';
import { Frend } from './Frend';

export function ListOfFrend(props) {
    const {addFrendOpen,setOpenAddFrend,onSelection ,Frends,addFrendFun,selectedFrend}=props
    return (
        <div>
            <div className='bg-dark p-4 rounded-3'>
                {
                    Frends.map(frend => {
                        return(
                            <Frend 
                                key={frend.id}
                                frendInfo ={frend}
                                onSelection={onSelection}
                                selectedFrend={selectedFrend}
                            />
                        )
                    })
                }
            </div>
            <div className='ad--frend mt-3 d-flex justify-content-end'>
                <button onClick={()=>setOpenAddFrend(p=>!p)} className='btn btn-warning rounded-3'>{addFrendOpen ? 'close' : 'Add frend'}</button>
            </div>
            {addFrendOpen && <AddFrend addFrendFun={addFrendFun}/>}
        </div>
    );
}
