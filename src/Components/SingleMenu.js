import React from 'react'
// import { useState } from 'react/cjs/react.development';
// import Backenddata from '../Backenddata';

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
                            <span className="card-number card-circle">{curElem.id}</span>
                            <label><span className="card-author" style={{color:"red"}}>{curElem.name}</span></label>
                            <span className="card-author" style={{color:"blue"}}>{curElem.category}</span>
                            <span className="card-author" style={{color:"blue"}}>{curElem.price}</span>
                            <span className="card-description">{curElem.description}</span>
                            
                        </div>
                        <img src={curElem.image} alt="images" className="card-media"/>
                    </div>
                    
                </div>
            </div>)
        })}
        </section>
        </>
    )
}

export default SingleMenu
