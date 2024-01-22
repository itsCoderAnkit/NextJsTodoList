import Todo from '../../../lib/model/todoList.js'

import mongoose from 'mongoose'

async function handler(req,res){
  
    const data = req.body
    console.log("data>>>>",req.query.deleteTodo)

    await mongoose.connect("mongodb+srv://ankit:ankit@cluster0.wq5hkex.mongodb.net/TodoListDbName?retryWrites=true&w=majority")

     const result = await Todo.deleteOne({ _id: req.query.deleteTodo})
  
     console.log("result >>>>",result)
   
     res.status(201).json({mesage:"todo deleted",data:result})
  
  
}

export default handler