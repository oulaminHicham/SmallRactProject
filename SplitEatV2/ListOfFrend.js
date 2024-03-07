import React, { useState } from 'react';
import AddFrend from './AddFrend';
import { Frend } from './Frend';

export function ListOfFrend({ onSplitFrend, splitOpen }) {
    const [addFrendOpen, setOpenAddFrend] = useState(false);
    return (
        <div>
            <div className='bg-dark p-4 rounded-3'>
                <Frend splitOpen={splitOpen} onSplitFrend={onSplitFrend} name='hind' dexcreption='you woenes hind 7 $' />
                <Frend splitOpen={splitOpen} onSplitFrend={onSplitFrend} name='hind' dexcreption='you woenes hind 7 $' />
                <Frend splitOpen={splitOpen} onSplitFrend={onSplitFrend} name='hind' dexcreption='you woenes hind 7 $' />
            </div>
            <div className='ad--frend mt-3'>
                <button onClick={()=>setOpenAddFrend(p=>!p)} className='btn btn-warning rounded-3'>{addFrendOpen ? 'close' : 'Add frend'}</button>
            </div>
            {
                addFrendOpen && <AddFrend />
            }
        </div>
    );
}
