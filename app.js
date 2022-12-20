const express = require('express');
const tasksRoutes = require('./routes/tasks');

const app = express();
const connectDB = require('./DB/connect');
require('dotenv/config');
const notFound = require('./middleware/not-found');


const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=> console.log(`Server listening on port ${port}...`));
        console.log('connected to DB...');
    }catch(err){
        console.log(err);
    }
}


//Middleware
app.use(express.static('public'));
app.use(express.json());

//ROUTES



app.use('/api/v1/tasks',tasksRoutes);
app.use(notFound);


const port = 3000;

start();

