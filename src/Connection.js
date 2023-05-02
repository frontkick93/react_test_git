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
app.get('/Mydata', cors(), (req, res) => {
    pool.connect((err) => {
        if(err) {
            console.log(err);
            return;
        }

        const request = new sql.Request(pool);
        request.query('SELECT * FROM vship_test', (err, result) => {
            if(err) {
                console.log(err);
                return;
            }

            res.send(result.recordset);
        })
    })
})


const port = 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
