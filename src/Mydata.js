import { useState, useEffect } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from "react";



const Mydata = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        //Make an HTTP request to fetch data
        const fetchList = async () => {
            const response = await fetch('http://localhost:3001/Mydata')
            const data = await response.json();
            setData(data);
        }; 
        fetchList();

},[]);


return (
    <div>
        <h2>List of item: </h2>
        <ul>
            {data.map(item => (
                <li key={item.vid}>{item.vid},{item.vts}</li>
            ))}
        </ul>
        <h3>Number of rows: {data.length}</h3>
        
        
    </div>
)

}
export default Mydata;