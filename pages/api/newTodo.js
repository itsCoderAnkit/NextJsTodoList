// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import {MongoClient} from 'mongodb'

// async function handler(req,res){
//   if(req.method ==='POST'){
//     const data = req.body

//     const client = await MongoClient.connect('mongodb+srv://todoList:HAyKsM9l941QjUtn@cluster0.0kjaind.mongodb.net')
//     const db = client.db()

//     const todoCollection = db.collection('todo')

//     const result = await todoCollection.insertOne(data)
  
//     console.log(result)
//     client.close()

//     res.status(201).json({mesage:"todo saved"})
  
//   }
// }

// export default handler


import Todo from '../../lib/model/todoList.js'

import mongoose from 'mongoose'

async function handler(req,res){
  if(req.method ==='POST'){
    const data = req.body
    console.log(data)

    await mongoose.connect("mongodb+srv://ankit:ankit@cluster0.wq5hkex.mongodb.net/TodoListDbName?retryWrites=true&w=majority")

     const result = await Todo.create(data)
  
    console.log("result >>>>",result)
   
    res.status(201).json({mesage:"todo saved",data:result})
  
  }
}

export default handler