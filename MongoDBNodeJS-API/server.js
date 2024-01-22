const express=require('express')
const mongoose= require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const Apps = require('./models/App')
const User = require('./models/user')
const app = express() 
dotenv.config()
//console.log(process.env.uri)
//mongoose.connect('mongodb+srv://' + process.env.MONGO_USERNAME + ':' + process.env.MONGO_PASSWORD + '@cluster0.6bl1tzp.mongodb.net/' + process.env.DB +' ?retryWrites=true&w=majority');

uri='mongodb+srv://Eshwar:Sharada22@cluster0.6bl1tzp.mongodb.net/NodeAPI?retryWrites=true&w=majority'
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/users', require('./routes/userRoutes'));
//app.use('/api/app', require('./routes/appRoutes'));
app.get('/api', (req,res)=> {
    res.send(" atlas node / express js api")
})
app.get('/app', async(req,res) => {
    try{
        const app =await Apps.find({});
        res.status(200).json(app);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
app.post('/app', async(req,res)=>{
    try {const app = await Apps.create(req.body)
        res.status(200).json(app);
    }catch(error)
        { console.log(error.message);
          res.status(500).json({message:error.message})}}
    )
        
app.post('/user', async(req,res)=>{
    try {
        const appid= await Apps.find().select({ AppID: 1, _id: 0 });
        const AppllicatinAPPID = appid[0].AppID
        console.log(appid[0].AppID);
        if ( AppllicatinAPPID == req.body.AppID){
            //  const { AppID } = req.body
            const app = await User.create(req.body)
            res.status(200).json(User);
        } else {
             res.status(500).json("Invalid AppID in User Data")
          }

    }catch(error)
        { console.log(error.message);
            res.status(500).json({message:error.message})}}
    )
mongoose.connect(uri)
.then(()=> {
    console.log("connected to atlas mongodb")},
    app.listen(3000, ()=>{
    console.log('ATLAS NODE JS  on 3000')
    })
)
.catch((error)=>{console.log (error) 
})



// const getClient = require("mongodb-atlas-api-client");
// const {user, cluster} = getClient({
//   "publicKey": "some public key",
//   "privateKey": "some private key",
//   "baseUrl": "https://cloud.mongodb.com/api/atlas/v1.0",
//   "projectId": "some project/group id"
// });

// const options = {
//   "envelope": true,
//   "itemsPerPage": 10,
//   "pretty": true,
//   "httpOptions": { // This parameter will not be sent as querystring. This will be send to http request package `urllib`
//     "timeout": 5000
//   }
// }
function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'moderator' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }