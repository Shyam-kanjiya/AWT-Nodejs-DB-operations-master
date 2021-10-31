const express = require('express');
const app = express();
const exhbs = require('express-handlebars');
const mysql = require('mysql')
/*
//connect with mysql db
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'University'
});
connection.connect((err)=>{
    if(err) throw err;
    console.log("Connected successfully to MySql server")
});

//create db
app.get("/db-create", (req,res)=>{
    const dbquery="CREATE DATABASE IF NOT EXISTS University";

    connection.query(dbquery,(err,result)=>{
        if(err) throw err;
        console.log("Database created successfully",result)
    })
});*/




app.engine('hbs',exhbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render('dbop',{
        //pass data
        data:[{
            cid: 101,
            cname: 'awt',
            iname: 'cspit',
            dname: 'ce',
            sem: 5
        }]
    });
});

//create table
app.get("/db-table", (req,res)=>{
    const dbtable=`CREATE TABLE IF NOT EXISTS facultyInfo(
        cid number NOT NULL,
        cname varchar(50) NOT NULL,
        iname varchar(50) NOT NULL,
        dname varchar(15) NOT NULL,
        sem number NOT NULL`

        connection.query(dbtable,(err,result)=>{
            if(err) throw err;
            console.log("Table created successfully",result)
        });
});

//on submit insert values
app.get("/onSubmit", (req,res)=>{
    const dbInsert=`INSERT INTO studentInfo
    (cid,cname,iname,dname,sem)
    VALUES (101,'awt','cspit','ce',5)`;

    connection.query(dbInsert,(err,result)=>{
        if(err) throw err;
        console.log(`Total affected ROWS: ${result['affectedRows']}`)
    })
});

app.get("/db-display", (req,res)=>{
    const data = 'SELECT * FROM studentInfo';
    connection.query(sata, function(err, data){
	if (err) throw err;
	res.render('db-display',{data});
   });
});

app.listen(5500,()=>{
    console.log('listening on 5500');
});