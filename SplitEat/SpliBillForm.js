import React ,{useState} from 'react';
import Button from './button';

export function SpliBillForm({slectedFrend,changeSelectedFrendInfo}) {
    const [bill ,setBill]=useState('')
    const [myExpence ,setMyExpence]=useState('')
    const frendExpence = bill ? (bill - myExpence) : ''  ;
    const [payer ,setPAyer] = useState('')
    // handel submit function
    function handelSubmit(e){
        e.preventDefault()
        if(!bill || !myExpence) return
        const blance=payer=='user' ? frendExpence : -frendExpence;
        changeSelectedFrendInfo(blance)
    }
    return (
        <form className='bg-dark  p-4 rounded-4 split--with--frend' onSubmit={(e)=>handelSubmit(e)}>
            <h6 className='text-warning'>SPLIT BIIL WITH {slectedFrend.name} </h6>
            <label className=' text-white'>bill Vlaue :</label>
            <input 
                className='rounded-3 ' 
                name='bill'
                type='number'
                value={bill || ''} 
                onChange={(e)=>setBill(parseInt(e.target.value))}
            /><br />

            <label className=' text-white'>Your Expence :</label>
            <input 
                className='rounded-3' 
                name='myExpence'
                type='number' 
                value={myExpence || ''} 
                onChange={(e)=>setMyExpence(parseInt(e.target.value) <= bill ? parseInt(e.target.value) :myExpence)}
            /><br />

            <label className=' text-white'>{slectedFrend.name} Expence :</label>
            <input 
                className='rounded-3 text-white' 
                name='frendExpence'
                type='text' 
                disabled 
                value={frendExpence || ''}
            /><br />

            <label className=' text-white mb-1'>How is Paying the bill :</label>
            <select 
                className='form-select rounded-3 mb-3'
                name='payer'
                value={payer || ''}
                onChange={(e)=>setPAyer(e.target.value)}
            >
                <option>...</option>
                <option value='user'>You</option>
                <option value={slectedFrend.name}>{slectedFrend.name}</option>
            </select>
            <label className=' text-white'>bill Vlaue :</label>
            <Button width='100'>split Bill</Button>
        </form>
    );
}
