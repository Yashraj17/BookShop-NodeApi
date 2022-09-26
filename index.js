const express = require('express')
const bodyParser = require('body-parser');
const connectDb = require('./Database/dbConnect');
const book = require('./Routes/Book');
const user = require('./Routes/User')
const errorHandler = require('./Middleware/Error');
const app = express();

const url = 'mongodb://localhost/bookshop';
connectDb(url)



const urlEncoded = bodyParser.urlencoded({extended:false});
app.use(urlEncoded)
app.use(express.static('./public/upload'))
app.use(express.json())
app.use('/api/v1',book);
app.use('/api/v1',user);

app.use(errorHandler)
app.listen(8081,()=>(
    console.log("server is running on Port8081")
));