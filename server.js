const express=require('express');
const mongoose=require('mongoose')
const dotenv=require('dotenv');
const cors=require('cors');
const bodyParser=require('body-parser');
const route=require('./routes/route')
const app=express();
const PORT=3000

//mongoose connection
dotenv.config();
mongoose.connect(process.env.MONGO_URI).then(()=>console.log('database connected successfully')).catch((e)=>console.log(e))

//for middlewares
app.use(cors());
app.use(bodyParser.json())

//for routes
app.use('/api/v1',route)

app.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`)
})