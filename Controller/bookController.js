
/// get all books

const bookModel = require("../Model/booksModel")
const CustomError = require("../utils/CustomError")

exports.getAllBooks = async(req,res,next)=>{
    try {
        const books = await bookModel.find({}) 
        if(books){
           return res.status(200).json({
                success:true,
                books
            })
        }
    } catch (error) {
        next(new CustomError(error.message, 400));
    }

}
///get single book

exports.getOneBook = async(req,res,next)=>{
    var book_Id = req.params.book_Id;
   try {
        let book = await bookModel.findById(book_Id)
        if(book){
            res.status(200).json({
                success:true,
                book
            })
        }
        else{
            next(new CustomError('No Book Found With this Id', 404));
        }
   } catch (error) {
    next(new CustomError(error.message, 400));
   }
}

exports.deleteBook = async(req,res,next)=>{
    var book_Id = req.params.book_Id;
   try {
        let book = await bookModel.findByIdAndDelete(book_Id)
        if(book){
            res.status(200).json({
                success:true,
                Message:'Book Deleted Successfully',
                book
            })
        }
        else{
           return next(new CustomError('No Book Found With this Id', 404));
        }
   } catch (error) {
    next(new CustomError(error.message, 400));
   }
}

exports.updateBook = async(req,res,next)=>{

    var book_Id = req.params.book_Id;
    try {
        let book = await bookModel.findById(book_Id)
        if (!book) {
            return next(new CustomError('No Book Found With this Id', 404));
        } else {
           const book = await bookModel.findByIdAndUpdate(book_Id,req.body,{new:true})
            res.status(200).json({
                success:true,
                message:"Update successfully",
                book
            })
        }
    } catch (error) {
        next(new CustomError(error.message, 400));
    }
}
exports.insertBook = async(req,res,next)=>{
    const {name,author,pages,price} = req.body
    try {
        if (!name || !author || !pages || !price) {
            return next(new CustomError('All Fields is Required', 400));
        } else {
            let book = await bookModel.create({
                name,
                author,
                pages,
                image:req.file.filename,
                price
            })
            res.status(200).json({
                success:true,
                book
            })
        }
    } catch (error) {
        next(new CustomError(error.message, 400));
    }
}