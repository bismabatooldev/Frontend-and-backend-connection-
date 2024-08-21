import express from 'express'
import dotenv from 'dotenv'
import dbconnection from './config/dbConnection.js'
import cors from 'cors'
import product from './routes/product.js'
dotenv.config()
const app = express()
app.use(cors())
const port = process.env.PORT||4000
dbconnection();

app.use(express.json())
app.use('/', product)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}` )
})