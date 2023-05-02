import { useState, useEffect } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from "react";

import Button from '@mui/material/Button'


const Mynewdata = () => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(() => {

        //Make an HTTP request to fetch data
        const fetchList = async () => {
            const response = await fetch('http://localhost:3002/Mynewdata')
            const data = await response.json();
            setData(data.query1);
            
        }; 
        fetchList();

},[]);
useEffect(() => {

    //Make an HTTP request to fetch data
    const fetchList2 = async () => {
        const response2 = await fetch('http://localhost:3002/Mynewdata')
        const data2 = await response2.json();
        setData2(data2.query2);
        
    }; 
    fetchList2();

},[]);




return (
    <div>
        List of item1: {data.length}
    <p></p>
    List of item2: 
    <ul>
        {data2.map(item2 => (
            data2.length//<li key={item2.vid}>{item2.vid},{item2.vts}</li>
        ))}
    </ul>
    <h3>Number of rows: {data2.length}</h3>
    
</div>
)

}
export default Mynewdata;