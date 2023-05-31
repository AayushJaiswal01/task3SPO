const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.get("/",cors(),(req,res)=>{

})
app.post("/",async(req,res)=>{
    const{email,password}=req.body


    try{
            
        const check=await collection.findOne({email:email})
        const check1=await collection.findOne({password:password})

        if(check && check1){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exists")
        }
        else{
            res.json("does not exist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8080,()=>{
    console.log("port connected");
})
