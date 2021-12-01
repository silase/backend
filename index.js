const express=require('express');
const app=express();
require('dotenv').config();
const helmet=require('helmet')
const cors=require('cors');
const bodyParser=require('body-parser');
const dbconn=require('./config/config-db');


//middleware
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())


//serve setting
app.get('/api',(req,res)=>{
    console.log(res);
   res.send({msg:"hello"});
});

app.listen(process.env.HOST_PORT,()=>{
    console.log(`Listening .... ${process.env.HOST_PORT}`)
})