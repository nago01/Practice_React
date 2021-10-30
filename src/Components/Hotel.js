import React from 'react';
import "./style.css";
import Backenddata from '../Backenddata';
import { useState } from 'react/cjs/react.development';
import SingleMenu from './SingleMenu';
import Navbar from './Navbar';
function Hotel() {
    const [menudata,updateData]= useState(Backenddata);
    const uniqueList = [
        ...new Set(
         menudata.map((curElem) => {
            return curElem.category;
          })
        ),
        "All",
      ];
    
    const [newdata,setnewData]= useState(uniqueList);
    // console.log(menudata);
    // console.log(menudata.length+1+ " = "+ "this the length of data passed");
    const fliteritem = (catagory) => {
      if (catagory === "All") {
        updateData(Backenddata);
        return;
      }
             const newList = menudata.filter((curElem)=>{
                 return curElem.category === catagory;
             })
             updateData(newList);
    }

    
      console.log({uniqueList})
    return (
        <>
        <Navbar fliteritem={fliteritem} backend={Backenddata} mylist={newdata}/>
        <SingleMenu data={menudata}/>
        </>
    )
}

export default Hotel
