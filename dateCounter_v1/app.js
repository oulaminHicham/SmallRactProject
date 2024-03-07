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
            <div className='container bg-danger p-5 rounded'>
                <div className='w-75 mt-4 mx-auto d-flex justify-content-between align-items-center'>
                    <Btn
                        sembol='+' 
                        handelFn={()=>setStep(prevStep => prevStep + 1) }
                    />
                    <Box val={step}/>
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
                    <Box val={count}/>
                    <Btn
                        sembol='-' 
                        handelFn={()=>setCount(prevCount => prevCount - step)}/>
                </div>
                <div className='w-75 fs-3 mx-auto mt-4 bg-info p-3 rounded'>
                    {count === 0 ? 'today is ' :count > 0 ?`${count} days from today is `:`${-count} days a go was `} <span className='fs-2 text-success'>{date.toDateString()}</span>
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
