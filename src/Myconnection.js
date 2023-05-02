const sql = require('mssql');
const express = require('express');
const app = express();
const cors = require('cors');

const dbconfig = {
    user:'liuzihui',
    password:'P@ssword1993',
    server:'liuzihui.database.windows.net',
    database: 'contracts'
};

const pool = new sql.ConnectionPool(dbconfig);

// set up routes
app.get('/Mynewdata', cors(), (req, res) => {
    pool.connect((err) => {
        if(err) {
            console.log(err);
            return;
        }
        
        const request1 = new sql.Request(pool);
        request1.query("SELECT * FROM vship where vapp = 'TS Health Status'", (err, result1) => {
            if(err) {
                console.log(err);
                return res.status(500).send('Internal Server Error');
            }

        const request2 = new sql.Request(pool);
        request2.query("Select * From vship where vapp ='TS Hub'",(err, result2) => {
            if(err) {
                console.log(err);
                return res.status(500).send('Internal Server Error');
            }

            //combine
            const data ={
                query1:result1.recordset,
                query2:result2.recordset
            };
            res.send(data);
            pool.close()
        });   
        });
    })
})


const port = 3002;
app.listen(port, () => console.log(`Server running on port ${port}`));