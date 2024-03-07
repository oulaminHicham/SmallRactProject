import React , {useState} from 'react';
import './spliteat.css'
import { ListOfFrend } from './ListOfFrend';
import { SpliBillForm } from './SpliBillForm';

const App = () => {
    const [splitWithFrendOpen , setSplitFrend] = useState(false)
    return (
      <div className='app p-5'>
          <div className='container mt-3'>
            <ListOfFrend  onSplitFrend={setSplitFrend} splitOpen={splitWithFrendOpen}/>
          </div>
          {
            splitWithFrendOpen && <SpliBillForm />
          }
      </div>
    );
}
export default App;

