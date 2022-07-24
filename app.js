// console.log('Task Manager App')
const express = require('express')
const tasks = require('./routes/tasks')
const app = express()
const connectDB = require('./db/connect.js')
require('dotenv').config()//
const notFound = require('./middleware/not-found')

//middleware 
app.use(express.static('./public'))
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send('Task Manager ')
// })

app.use('/api/v1/tasks',tasks)
app.use(notFound);

const port =4000;
const start =async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port ,()=>{
            console.log(`Server is Listening on port ${port}` )
            // as connectDB returns a promise we can use async await
        })// spinning the server only if connection to database is established

    } catch (error) {
        console.log(error)
    }
}
start() 
