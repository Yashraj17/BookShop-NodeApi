const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    pages:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:false
    },
    price:{
        type:Number,
        require:true
    }
})
const  bookModel= mongoose.model('Book',bookSchema);
module.exports = bookModel;