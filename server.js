import express from "express";
import path from "path";
import { dateTime } from "./middleware.js";

const __dirname = path.resolve();

const PORT = 5000;
var server = express();

server.use(express.static(path.resolve(__dirname, "frontend")));
 //подключение middleware
server.use(dateTime);
// instead
//server.get('/features', (req, res)=>{res.sendFile(__dirname, 'frontend', 'features.html')});


server.get('/', (req, res)=>{
  console.log('fafa');
  res.sendFile(path.resolve(__dirname, 'frontend','index.html'));
});

//Download index
server.get('/download', (req, res)=>{
  //использование middleware
  console.log(req.dateTime);
  res.download(path.resolve(__dirname, 'data','data.rar'));
});



server.listen(PORT, ()=>{
  console.log(`server has been started on port ${PORT}...`);
});