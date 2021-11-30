const express=require('express');
const app=express();
require('dotenv').config();
const helmet=require('helmet')
const cors=require('cors');
const bodyParser=require('body-parser');


//middleware
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
//serve setting
app.get('/',(req,res)=>{

})


app.listen(process.env.HOST_PORT,()=>{
    console.log(`Listening .... ${process.env.HOST_PORT}`)
})