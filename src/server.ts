import express  from "express";

const app = express()

app.get('/', (req,res)=>{
  res.send('Hello World')
})

const port = 3000

app.listen(port, ()=>{
  console.log('App is listening on port 3000')
})