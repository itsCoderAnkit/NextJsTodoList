import mongoose from 'mongoose'

const connectDb = handler => async (req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res)

        
    }
    await mongoose.connect('mongodb+srv://todoList:HAyKsM9l941QjUtn@cluster0.0kjaind.mongodb.net')
    return handler(req,res)

}

export default connectDb