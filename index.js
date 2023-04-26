const express=require("express")
const app=express()
const cors = require('cors')
const port=process.env.PORT || 5000;
const categories=require("./Data/Categories.json")
app.use(cors())
app.get("/",(req,res)=>{
res.send("The Dragon News portal is running")
})
app.get("/categories",(req,res)=>{
    res.send(categories)
})
app.listen(port,()=>{
    console.log(`The Dragon News API is running on port: ${port}`)
})