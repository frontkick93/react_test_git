import React from "react";
import { useState, useEffect } from 'react';

const Displayform1 = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchList = async () =>{
        const response = await fetch('https://sheet.best/api/sheets/bb18ba0f-c62c-4794-981d-488fa74f2c0f')
         const data = await response.json();
        setData(data);
        };
          fetchList();
        
    }, [])


    // form states
    //const [authors, setauthors] = useState([
    //    { id: 1, text: "Item 1" ,age: "Test" },
    //    { id: 2, text: "Item 2" }
    //]);

    // submit event



    return (
        <div>
            <h2>List of item: </h2>
            <ul>
                {data.map(item => (
                    <li key={item.ID}>{item.Age},{item.Designation}</li>
                ))}
            </ul>
        </div>
    )
}
export default Displayform1;