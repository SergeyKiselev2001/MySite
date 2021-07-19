
import express from "express";
import path from "path";

const __dirname = path.resolve();

const PORT = 5000;
var server = express();

//Main page
server.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'frontend','index.html'));
});


server.listen(PORT, ()=>{
  console.log(`server has been started on port ${PORT}...`);
});