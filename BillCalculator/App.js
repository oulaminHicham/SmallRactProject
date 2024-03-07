import React  , {useState} from 'react';
import Bill from './Bill';
import Satisfaction from './Satisfaction';
import ResetBtn from './ResetBtn';

const App = () => {
    const [payDependancy , setPayDependancy]=useState({bill:0 ,mySatisfaction:0 ,fSatisfaction:0})
    const tip =payDependancy.bill * ((payDependancy.mySatisfaction + payDependancy.fSatisfaction) / 2) / 100
    const totalPay = tip + payDependancy.bill
    // function to handel changing 
    function handelChange(e){
        const {name , value}=e.target;
        setPayDependancy(dependancy => ({...dependancy ,[name]:parseInt(value)}))
    }
    // reset the bill
    function handelSubmit(e){
        e.preventDefault()
        setPayDependancy({})
    }
    return (
        <div className='container mt-5 bg-dark p-5 rounded-3'>
           <form className='w-75 mx-auto' onSubmit={(e)=>handelSubmit(e)}>
                <Bill 
                    payDependancy={payDependancy}
                    handelChange={handelChange}
                />
                <Satisfaction 
                    name='mySatisfaction' 
                    payDependancy={payDependancy}
                    handelChange={handelChange}
                >How Did You Like The Service ?</Satisfaction>
                <Satisfaction 
                    name='fSatisfaction' 
                    payDependancy={payDependancy}
                    handelChange={handelChange}

                >How Did Your Frend Like The Service ?</Satisfaction>
                <ResetBtn handelSubmit={handelSubmit}/>
           </form>
           {
            payDependancy.bill > 0 &&
            <div className='mt-5'>
                <h4 className='text-center'>You pay {totalPay} $ ({payDependancy.bill} $   + {tip} $ tip)</h4>
           </div>
           }
        </div>
    );
}
export default App;




