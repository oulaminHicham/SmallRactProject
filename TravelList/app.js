import React, { useState } from 'react';
import './styling.css'
import Logo from './logo';
import Form from './form'; 
import PakingList from './packingList';
import Stats from './status';

export default function App(){
    const [needs , setNeeds]=useState([])
    const [needsfromForm , setformNeeds]=useState({})
    //  function to handel changin in form data
    function onChangefun(event){
        const {name , value}=event.target
        setformNeeds(prevData => ({...prevData ,[name]:value}))
    }
    // function to handel submit of form
    function onSubmitfun(event){
        event.preventDefault()
        setNeeds(prevData => [...prevData ,needsfromForm ])
    }
    return(
        <div className='container'>
            <Logo />
            <Form 
                needs={needsfromForm}
                handelChange={onChangefun}
                handelSubmit={onSubmitfun}
            />
            <PakingList needs={needs} />
            <Stats />
        </div>
    )
}



