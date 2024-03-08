import express from 'express';
import cors from 'cors';
import fs from "node:fs"
const app = express();
const port = 3000;
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});
 
app.get("/data/db", (req , res) =>{
    res.setHeader("content-type" , "application/json;charset=UTF-8");
    fs.readFile("data/db.json" , function(err, data){
        res.send(data);
    });
});

app.get("/data/naruto", (req , res) =>{
    res.setHeader("content-type" , "application/json;charset=UTF-8");
    fs.readFile("data/naruto.json" , function(err, data){
        res.send(data);
    });
});

app.get("/data/onepiece", (req , res) =>{
    res.setHeader("content-type" , "application/json;charset=UTF-8");
    fs.readFile("data/onepiece.json" , function(err, data){
        res.send(data);
    });
});