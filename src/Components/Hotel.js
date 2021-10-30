import React from 'react';
import "./style.css";
import Backenddata from '../Backenddata';
import { useState } from 'react/cjs/react.development';
import SingleMenu from './SingleMenu';
function Hotel() {
    const [menudata,updateData]= useState(Backenddata);
    // console.log(menudata);
    // console.log(menudata.length+1+ " = "+ "this the length of data passed");
    return (
        <SingleMenu data={menudata}/>
    )
}

export default Hotel
