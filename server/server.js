const express =require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
require('./Models/db');
const AuthRouter = require('./Routes/AuthRouter');
const BookmarkRouter = require('./Routes/BookmarkRouter');
const insightRouter = require('./Routes/insightRouter');
const port = process.env.port ||  8080;
const errorHandler = require('./Middlewares/errorHandler');



app.get('/ping', (req,res)=>{
   res.send('PONG')
})

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('/auth',AuthRouter);
app.use('/bookmarks', BookmarkRouter);
app.use('/account/insights', insightRouter);

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

