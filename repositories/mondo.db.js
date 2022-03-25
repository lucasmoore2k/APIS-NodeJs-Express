import mongoose from 'mongoose';

async function connect(){
    const uri = "mongodb+srv://lukmor:crazy123@cluster0.hqcru.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    return await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
}

export {
    connect
}