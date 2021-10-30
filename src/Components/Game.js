import React from 'react'
import { useState } from 'react';

function Game(props) {
    const [name,setName] = useState('');
    const [email,setEmail]=useState('');
    const [state,setState]=useState([]);
    const submitForm = (e) => {
        e.preventDefault();
        const newstate = {
            name1:name,
            email1:email
        }
        setState([...state,newstate]);
        console.log(newstate);
    }
    return (
        <div>
            <form onSubmit = {submitForm}>
                <input type="text" placeholder="your input here" value={name}
                onChange = {
                    (e)=>
                    {
                        setName(e.target.value)
                        //console.log({name});
                    }
                }/>
                <br></br>
                <input type="text" value={email}
                onChange = {
                    (e)=>
                    {
                        setEmail(e.target.value)
                        //console.log({email});
                    }
                }/>
                <br></br>
                <button></button>
                <div>
                    {
                        state.map((curElem)=>{
                            return (
                                <div>
                                    <p>{curElem.name1}</p>
                                    <p>{curElem.email1}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </form>
            {props.name}
            {props.xyz}
        </div>
    )
}

export default Game
