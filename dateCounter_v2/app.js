import React , {Fragment , useState} from 'react';

export default function App(){
    return(
        <Counter />
    )
}
// counter function
function Counter() {
    const [step , setStep]=useState(1)
    const [count , setCount]=useState(0)
    const date = new Date()
    date.setDate(date.getDate() + count)
    return ( 
        <Fragment>
            <div className='container bg-success p-5 rounded mt-4'>
                <div className='w-75 mt-4 mx-auto d-flex justify-content-between align-items-center'>
                    <Btn
                        sembol='+' 
                        handelFn={()=>setStep(prevStep => prevStep + 1) }
                    />
                    <input 
                        className='form-range w-50'
                        type='range'
                        value={step}
                        step={5}
                        min={1}
                        max={10}
                        onChange={(e)=>setStep(parseInt(e.target.value))}
                    />
                    <span>{step}</span>
                    <Btn
                        sembol='-'
                        handelFn={()=>setStep(prevStep => prevStep - 1)}
                     />
                </div>
                <div className='w-75 mt-4 mx-auto d-flex justify-content-between align-items-center'>
                    <Btn
                        sembol='+'
                        handelFn={()=>setCount(prevCount => prevCount + step)} 
                    />
                    <input
                        className='form-control w-50'
                        type='number'
                        value={count}
                        onChange={(e)=>setCount(parseInt(e.target.value))}
                     />
                    <Btn
                        sembol='-' 
                        handelFn={()=>setCount(prevCount => prevCount - step)}/>
                </div>
                <div className='w-75 fs-3 mx-auto mt-4 bg-info p-3 rounded'>
                    {count === 0 ? 'today is ' :count > 0 ?`${count} days from today is `:`${-count} days a go was `} <span className='fs-2 text-white'>{date.toDateString()}</span>
                </div>
            </div>
        </Fragment>
     );
}
// Btn Component
function Btn({handelFn , sembol}){
    return(
        <button className='d-block fs-3 btn btn-primary px-4' onClick={handelFn}>{sembol}</button>
    )
}
// box component
function Box({val}){
    return(
        <div className='fs-1'>Count : {val}</div>
    )
}
