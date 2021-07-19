
import express from "express";

const PORT = 5000;
var server = express();

server.listen(PORT, ()=>{
  console.log(`server has been started on port ${PORT}...`);
});