const express = require('express');
const { getAllBooks, getOneBook, deleteBook, updateBook, insertBook } = require('../Controller/bookController');
const protect = require('../Middleware/authUser');
const upload = require('../Middleware/upload');
const router = express.Router();

router.get('/allbooks',protect,getAllBooks)
router.get('/singlebook/:book_Id',protect,getOneBook)
router.delete('/deletebook/:book_Id',protect,deleteBook)
router.put('/updatebook/:book_Id',protect,updateBook)
router.post('/addbook',protect,upload.single('image'),insertBook)

module.exports = router