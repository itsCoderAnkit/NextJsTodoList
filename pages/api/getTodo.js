
import Todo from '../../lib/model/todoList.js'

import mongoose from 'mongoose'
import { NextResponse } from 'next/server.js'

export default async function handler(req,res){
  if(req.method ==='GET'){
    
    await mongoose.connect("mongodb+srv://ankit:ankit@cluster0.wq5hkex.mongodb.net/TodoListDbName?retryWrites=true&w=majority")
   // await mongoose.connect("mongodb+srv://ankit:ankit@cluster0.wq5hkex.mongodb.net/")

      const result = await Todo.find()
  
     //console.log("result >>>>",result)
   
   return  res.status(201).json({mesage:"todo saved",result:result})
    //return NextResponse.json({result:true})
  }
}

