import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import route from './routes/useRoute.js'
import bodyParser from 'body-parser'
import cors from 'cors'


const app = express()
dotenv.config()
app.use(bodyParser.json())
app.use(cors())
app.use('/api', route)

const port = process.env.PORT || 4000
const mongoURL = process.env.MONGOURL



app.get('/', (req, res) => {
    
    res.send('welcome to node server')
})



mongoose.connect(mongoURL)
    .then(() => {
        console.log("Database Connected");

        app.listen(port, () => {
            console.log(`server lister on ${port}`);

        })
    }).catch(erorr => console.log(erorr))





