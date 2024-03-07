import React from 'react';
import Button from './button';
export function Frend(props) {
    const {frendInfo,onSelection,selectedFrend}=props
    const {id , name , img , blance}=frendInfo
    // const isSelected = selectedFrend !== null ? selectedFrend.id == id ? true : false : false
    const isSelected = selectedFrend?.id == id
    return (
        <div className={`d-flex justify-content-center align-items-center mb-4}${isSelected ?'selected': ''}`}>
            <img src={'img/'+img} alt={name} className='mb-3'/>
            <div className={`mx-5 w-50 frend--name_dex`}>
                <h3 className='mb-0 text-white'>{name}</h3>
                {blance < 0 && <p className='text-danger'>{name} owen you {-blance} $</p>}
                {blance > 0 && <p className='text-success'>You owe {name} {blance} $</p>}
                {blance === 0 && <p className='text-info'>You and {name} are even</p>}
            </div>
            <Button onCliking={() => onSelection(frendInfo)} width='25'>{isSelected ?'close':'Select'}</Button>
        </div>
    ); 
}
