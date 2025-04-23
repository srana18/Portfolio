import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use('/public', express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',         
    password: '12345',         
    database: 'portfolioconnect'
  });

  db.connect(err=>{
    if(err){
       throw err;
    }
    console.log('Connect to mysql');
  })

app.post('/send', (req,res)=>{
      const { Name, Email, Notes } = req.body;
      const sqlquery = 'INSERT INTO info (Name, Email, Notes) VALUES (?, ?, ?)';

db.query(sqlquery,[Name,Email,Notes],(err,result)=>{
    if(err){
        console.log('Error inserting the values in form');
        return res.status(500).send('Database error: ' + err.message);
    }
    res.send('form submitted');

})
})



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(port, () => {
  console.log(`Someone visited the website at ${port}`)
})