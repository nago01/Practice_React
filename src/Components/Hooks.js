import {React,useState} from 'react'

function Hooks() {
    const [val,setval]=useState(10);
    return (
        <div>
            <button className="button" onClick = {() =>
                 setval(val+1)
            }></button>
            {val}
            <button className="button" onClick = {()=> setval(val-2)}></button>
        </div>
    )
}

export default Hooks
