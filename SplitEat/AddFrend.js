import React , {useState} from 'react';
import Button from './button';

export default function AddFrend({addFrendFun}) {
    const [id , setId]=useState(4)
    const [myfrends , setMyFrends] = useState({})
    function handelChange(e){
        setId(id => id + 1)
        const {name , value} = e.target;
        setMyFrends(frendes =>({...frendes ,id:id , [name]:value , blance:0}))
    }
    function handelSubmit(e){
        e.preventDefault()
        if(!myfrends.name || !myfrends.img) return;
        addFrendFun(myfrends)
        setMyFrends({})
    }
    return (
        <form onSubmit={e=>handelSubmit(e)}>
            <div className='bg-dark p-5 my-3 w-50 mx-auto rounded-4'>
            <h4 className='text-center text-white'>Add Frend</h4>

                <label className='mb-3 text-white'>Frend Name :</label>
                <input 
                    className='form-control' 
                    type='text' 
                    name='name'
                    value={myfrends.name || ''}
                    onChange={(e)=>handelChange(e)}
                /><br />

                <label className='mb-3 text-white'>Img url :</label>
                <input 
                    className='form-control' 
                    type='text' 
                    name='img'
                    value={myfrends.img || ''}
                    onChange={(e)=>handelChange(e)}
                /><br />
            <Button width='100'>Add</Button>
            </div>
        </form>
    );
}
