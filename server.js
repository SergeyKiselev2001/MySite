
import express from "express";

const PORT = 5000;
var server = express();

server.get('/', (req, res)=>{

  res.end('Haha!');
});


server.listen(PORT, ()=>{
  console.log(`server has been started on port ${PORT}...`);
});