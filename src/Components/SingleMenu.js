import React from 'react'
import { useState } from 'react/cjs/react.development';
import Backenddata from '../Backenddata';

function SingleMenu(props) {
    // const [menudata2,updateData2]= useState(Backenddata);
    return (
        <>
        <section className="main-card--cointainer">
        {props.data.map((curElem)=>{
            return(<div>
                <div className="card-container">
                    <div className="card">
                        <div className="card-body">
                            <span className="card-number card-circle">1</span>
                            <span className="card-author" style={{color:"red"}}>1</span>
                        </div>
                    </div>
                </div>
            </div>)
        })}
        </section>
        </>
    )
}

export default SingleMenu
