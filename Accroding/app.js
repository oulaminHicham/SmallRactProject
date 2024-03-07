import React from 'react';
import './style.css'
import { Card } from "./Card"
import {data} from './data'

export default function App()
{
    const [curOpen , setOpen] = React.useState(null)
    return(
        <div className="container mt-3">
            {
            data.map(d=><Card key={d.id} num={d.id} title={d.title} curenrOpen={curOpen} onOpen={setOpen}>{d.content} </Card>)
            }
        </div>
    )
}


