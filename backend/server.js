const express = require('express')
const {MongoClient, ObjectID} = require('mongodb')
const assert = require('assert')
const bodyParser = require ('body-parser')

const app = express()

app.use(bodyParser.json())

const MongoURL="mongodb://localhost:27017"
const database='democontact'

MongoClient.connect(MongoURL,{ useNewUrlParser:true},(err,client)=>{
    assert.equal(err,null,'Connection to database Failed')
    const db=client.db(database)

   app.post("/add-contact",(req,res)=>{
       let newContact = req.body
       db.collection('contacts').insertOne(newContact,(err, data)=>{
           if(err) res.send('add contact failed')
           else res.send(data)
       })
   })

   //get all contacts
   app.get('/contacts', (req,res)=>{
    db.collection('contacts').find().toArray((err,data)=>{
        if (err) res.send('getting contacts failed')
         else res.send(data)
});
   });
   //get contact by id
   app.get("/contact/:id",(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('contacts').findOne({_id:id},(err,data)=>{
        if (err) res.send('Getting contact failed')
         else res.send(data)
});

   })
   
   //update contact
   app.put('/modify-contact/:id',(req,res)=>{
       let id=ObjectID(req.params.id)
       let reqUpdate=req.body
       db.collection('contacts').findOneAndUpdate({_id:id},{$set:{...reqUpdate}},(err,data)=>{
        if (err) res.send('Updating contacts failed')
         else res.send(data)
});
   })

   //delete contact
   app.delete('/delete-contact/:id', (req, res)=>{
    let id=ObjectID(req.params.id)
    db.collection('contacts').findOneAndDelete({_id:id},(err,data)=>{
        if (err) res.send('Deleting contacts failed')
         else res.send(data)
});
   })



})

app.listen(5001,(err)=>{
    assert.equal(err,null,'connection to server failed')
    console.log('server is runnin at _PORT 5001')
})