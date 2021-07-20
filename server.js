import express from "express";
import path from "path";
import { dateTime, logger} from "./middleware.js";

const __dirname = path.resolve();

const PORT = 5000;
var server = express();


server.set('view engine', 'ejs');

// переназначили папку views --> templates
server.set('views', path.resolve(__dirname, 'ejs'));
console.log(server.get('views'));

// уже не надо так как перешли на ejs
//server.use(express.static(path.resolve(__dirname, "frontend")));
//подключение middleware
server.use(dateTime, logger);
// instead
//server.get('/features', (req, res)=>{res.sendFile(__dirname, 'frontend', 'features.html')});


server.get('/', (req, res)=>{
  res.render('indexx', {name: {haha : 22}});
});

server.get('/features', (req, res)=>{
  res.render('indexx', {name : {haha: 'features'}});
});

//Download index
server.get('/download', (req, res)=>{
  //использование middleware
  console.log(req.dateTime);
  
  res.download(path.resolve(__dirname, 'data','data.rar'));
 // req.logger();
});



server.listen(PORT, ()=>{
  console.log(`server has been started on port ${PORT}...`);
});