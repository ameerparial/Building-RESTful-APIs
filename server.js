import express from 'express';
import mongoose from 'mongoose';
import myroute from './src/routes/homeroute';
import con_route from './src/routes/contactroute';
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
    useNewUrlParser: true,
}).then((res)=>{
    console.log("Connected");
}).catch((err)=>{
    console.log("Error");
});


myroute(app);

con_route(app);

app.listen(PORT, ()=>{
    console.log('Server is listening at the port 3000');
});