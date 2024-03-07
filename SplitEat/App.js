import React , {useState} from 'react';
import './spliteat.css'
import { ListOfFrend } from './ListOfFrend';
import { SpliBillForm } from './SpliBillForm';

const App = () => {
  const [addFrendOpen, setOpenAddFrend] = useState(false);
  const [Frends , setFrends]=useState([
    {id:1 , name:'hicham'  , img:'avatar-4.jpg' , blance:0},
    {id:2 , name:'Hamza'  , img:'avatar-1.jpg' , blance:-10},
    {id:3 , name:'Hind'  , img:'avatar-2.jpg' , blance:5},
  ])
  function addFrend(frend){
      setFrends(frends => [...frends , frend])
      setOpenAddFrend(false)
  }
  // her is the seleted frend to split with them
    const [slectedFrend , setSelectedFrend] = useState(null)
    function handelSelection(frend){
      setSelectedFrend(selected => selected?.id == frend.id ? null : frend)
      setOpenAddFrend(false)
    }
    // this function is use to change the data of the fren split with them
    function changeSelectedFrendInfo(val){
      setFrends(frends => frends.map(frend => frend.id ==slectedFrend?.id ? {...frend ,blance:frend.blance + val } : frend ))
      setSelectedFrend(null)
    }
    return (
      <div className='app p-5'> 
          <div className='container mt-3'>
            <ListOfFrend  
              addFrendOpen={addFrendOpen}
              setOpenAddFrend={setOpenAddFrend}
              Frends={Frends}
              addFrendFun={addFrend}
              onSelection={handelSelection}
              selectedFrend={slectedFrend}
            />
          </div>
          <div>
            {
              slectedFrend && <SpliBillForm slectedFrend={slectedFrend} changeSelectedFrendInfo={changeSelectedFrendInfo}/>
            }
          </div>
      </div>
    );
}
export default App;

