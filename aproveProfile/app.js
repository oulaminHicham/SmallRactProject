import React , {useState , Fragment }from 'react';
import './styling.css'
import NumOfStep from './numOfstep';
import Step from './steps';
import PrevBtn from './prevBtn';
import NextBtn from './nextBtn';

export default function App(){
    const profileSteps=[1,2,3,4,5,6,7,8,9,10];
    const [stepNumber , setStepNumber]=useState(1)
    const [isClose , setClose]=useState(false)
    const steptitles = ['apllay job','sersh to job','i dont now to job','heloo react','i like python','heloo react','i like python',"i like js" , 'i like mysql' , 'i like php']
    function prevStep(){
        stepNumber > 1 && setStepNumber(stepNumber - 1)
    }
    function nextStep(){
        stepNumber < profileSteps.length && setStepNumber(stepNumber + 1)
    }
    return( 
      <Fragment>
          <div className={`bg-secondary p-4 container rounded-4 w-75 mt-5 position-relative ${isClose ? 'close' : ''}`}>
            <div className='parentOfNumBox'>
                {profileSteps.map(step => {
                    return(
                        <NumOfStep 
                            key={step} 
                            stepNum={step}  
                            bgColor={stepNumber >= step ? 'info' :'white'}
                            textColor={stepNumber>= step ? 'white' :'black'}
                        />
                    )
                })}
            </div>
            <div className='w-75 mx-auto bg-danger p-4 mt-3 mb-3 rounded-4'>
                <Step step={stepNumber} steptitle={steptitles[stepNumber - 1]}/>
            </div>
            <div className='w-75 mx-auto d-flex justify-content-between'>
                <PrevBtn handelFun={prevStep}/>
                <NextBtn handelFun={nextStep}/>
            </div>
        </div>
        <button 
            className='closeBtn'
            onClick={()=>setClose(prev =>!prev)}
        >   {isClose ? 'open' :'X'}
        </button>
      </Fragment>
    )
}

