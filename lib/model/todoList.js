import mongoose from 'mongoose'

const todoListSchema = new mongoose.Schema({
    task:{type:String},
    completed:{type:Boolean,default:false}
})


const Todo = mongoose.models.Todos || mongoose.model("Todos",todoListSchema)
export default Todo