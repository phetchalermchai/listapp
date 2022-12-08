var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()

app.use(cors())

var jsonParser = bodyParser.json()

const mysql = require('mysql2');
const { json } = require('express')

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  //ชื่อฐานข้อมูล
  database: 'listapp'
});

app.post('/insert',jsonParser, function (req, res, next) {
    connection.execute(
      'INSERT INTO listapp (fname,lname,phone,email) VALUES (?,?,?,?)',
      [req.body.fname,req.body.lname,req.body.phone,req.body.email],
      function(err, results, fields) {
        switch(true){
          case !req.body.fname:
            return res.status(400).json({error:"error"})
            break;
          case !req.body.lname:
            return res.status(400).json({error:"error"})
            break;
          case !req.body.phone:
            return res.status(400).json({error:"error"})
            break;
          case !req.body.email:
            return res.status(400).json({error:"error"})
            break;    
        }
        if(err){
          res.json({status:"error",message:err})
        }
        res.json({status:"ok",fields})
      }
    );
})

app.get('/list',jsonParser, function (req, res, next) {
    connection.execute(
      'SELECT * FROM listapp',
      [],
      function(err, results, fields) {
        if(err){
          res.json({status:"error",message:err})
        }
        res.json({status:"ok",results})
      }
    );
})

app.post("/delete/",jsonParser,function(req,res){
  connection.execute(
    'DELETE FROM listapp WHERE id = ?',
    [req.body.id],
    function(err, results, fields) {
      if(err){
        res.json({status:"error",message:err})
      }
      res.json({status:"ok",fields})
    }
  );
})

app.post("/update",jsonParser,function(req,res){
  connection.execute(
    'UPDATE listapp SET fname=?,lname=?,phone=?,email=? WHERE id = ?',
    [req.body.fname,req.body.lname,req.body.phone,req.body.email,req.body.id],
    function(err, results, fields) {
      if(err){
        res.json({status:"error",message:err})
      }
      res.json({status:"ok",fields})
    }
  );
})

app.listen(3333, function () {
  console.log('CORS-enabled web server listening on port 3333')
})