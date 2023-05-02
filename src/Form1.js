import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

function Form1() {

    // form states
    const [id, setID] = useState('');
    const [age, setAge] = useState('');
    const [designation, setDesignation] = useState('');
    const [dob, setDob] = useState('');
    const [pic, setPic] = useState('');

    const [Apidata, setData] = useState([]);
    const [refresh, setRefresh] = useState([]);

    // submit event
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(id,age,designation,dob);
        const data = {
            ID: id,
            Age: age,
            Designation: designation,
            Dob: dob,
            Pic: pic
        }
        
        /*const HandleSubmit = (e) => {
            e.preventDefault();
            console.log(name,age,designation,dob);
            const data = {
                Name: name,
                Age: age,
                Designation: designation,
                Dob: dob,
                Pic: pic
            }
        */
        axios.post('https://sheet.best/api/sheets/bb18ba0f-c62c-4794-981d-488fa74f2c0f', data).then((response) => {
            console.log(response);

            // clearing form fields
            setID('');
            setAge('');
            setDesignation('');
            setDob('');
            setPic('');
        }).then((data) => {
            setRefresh(data);
        })  
    }
    useEffect(() => {

            fetch('https://sheet.best/api/sheets/bb18ba0f-c62c-4794-981d-488fa74f2c0f')
            .then((response) => response.json())
            .then((json) => setData(json));
    },[refresh])

    return (

        <div className="container1">

            <br></br>
            <h1> Testing Form 1</h1>
            <br></br>

            {/* form */}
            <form autoComplete="off" className="form-group" 
            onSubmit={HandleSubmit}>
                <label>ID</label>
                <input type='text' placeholder="Enter your ID" required className='form-control' onChange={(e) => setID(e.target.value)} value={id} />
                <br></br>
                <label>Age</label>
                <input type='text' placeholder="Enter your age" required className='form-control' onChange={(e) => setAge(e.target.value)} value={age} />
                <br></br>
                <label>Designation</label>
                <input type='text' placeholder="Enter your designation" required className='form-control' onChange={(e) => setDesignation(e.target.value)} value={designation} />
                <br></br>
                <label>Date of birth</label>
                <input type='date' placeholder="choose your date of bith" required className='form-control' onChange={(e) => setDob(e.target.value)} value={dob} />
                <br></br>
                <label>Image</label>
                <input type='file' placeholder="choose your picture" id="myFile" name="filename" className='form-control' onChange={(e) => setPic(e.target.value)} value={pic} />
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                    <button type="submit" className="btn btn-primary" class="btn-info" >Submit</button>
                </div>
            </form>

            <Table fixed style={{padding:20}}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Designation</Table.HeaderCell>
                        <Table.HeaderCell>Dob</Table.HeaderCell>
                        <Table.HeaderCell>Photo</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {Apidata.map(item => (
            
                        <Table.Row >
                        <Table.Cell>{item.ID}</Table.Cell>
                        <Table.Cell>{item.Age}</Table.Cell>
                        <Table.Cell>{item.Designation}</Table.Cell>
                        <Table.Cell>{item.Dob}</Table.Cell>
                        <Table.Cell>{item.Photo}</Table.Cell>
                        </Table.Row>
                   

                    ))}
                    {/*<Table.Row>
                        <Table.Cell>John</Table.Cell>
                        <Table.Cell>Approved</Table.Cell>
                        <Table.Cell>
                            John is an interesting boy but sometimes you don't really have enough
                            room to describe everything you'd like
                            
                        </Table.Cell>
                        <Table.Cell>
                            John is an interesting boy but sometimes you don't really have enough
                            room to describe everything you'd like
                        </Table.Cell>
                    </Table.Row>
                    */}
                </Table.Body>
            </Table>
        </div>
    )
}
export default Form1;