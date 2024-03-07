import React from 'react';
import Need from './need';
import Options from './options';


export default function PakingList({needs , deleteNeed}){
    return(
        <>
            <div className='pakingList p-4'>
                {needs.map((need , index) => <Need key={index} needs={need} delNeed={()=>deleteNeed(need.num)}/>)}
            </div>
            <div className='option'>
                <Options />
            </div>
        </>
    )
}