const express=require('express')
const mongoose= require('mongoose')
const User = require('./models/App.js/index.js')
const app = express() 
uri='mongodb+srv://Eshwar:Eshwar333@cluster0.6bl1tzp.mongodb.net/NodeAPI?retryWrites=true&w=majority'
//route
app.use(express.json())
app.get('/', (req,res)=> {
    res.send(" atlas node / express js app")
})

app.post('/user',async (req,res)=> 
    {
    console.log(req.body);
    res.send(req.body)
    //try{
        // const user= await User.create(req.body)
        // res.status(200).json(user);
        // } catch(error){
        //     console.log(error.message);
        //     res.status(500).json({message: error.message})
        // }
    //    }
    })
mongoose.connect(uri)
.then(()=> {
    console.log("connected to atlas mongodb")},
    app.listen(3000, ()=>{
    console.log('ATLAS NODE JS  on 3000')
    })
)
.catch((error)=>{console.log (error) 
})