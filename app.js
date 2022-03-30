import express from 'express';
import mongoose from 'mongoose';
import store from './api/models/store.js';

const app = express()
const port = 5500

const mongoURL = "mongodb+srv://LucasPonti:Lip36345079@cluster0.b3q34.mongodb.net/tododatabase?retryWrites=true&w=majority"


mongoose.connect(mongoURL, {useNewUrlParser:true, useUnifiedTopology: true})

app.use(express.json({limit: "50mb"}))

app.post("/api/datos", (req, res)=> {
   let clientData = req.body
   let mongoRecords = []
   clientData.forEach(client => {
       mongoRecords.push({
           firsName: client.firsName,
           phone: client.phone,
           address: client.address
       })
   });
     
   

   store.create(mongoRecords,(err, records) => {
       if(err){
           res.status(500).send(err)
       }else{
           res.status(200).send(records)
       }
   })

})

app.get("/api/datos", (req, res) => {
    store.find({}, (err, docs) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(docs)
        }
    })
})

app.delete("/api/datos", (req, res) => {
    store.deleteMany({}, (err) => { 
        res.status(500).send(err)
    })
})

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})



