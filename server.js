import express from 'express';
import myroute from './src/routes/homeroute';
const app = express();
const PORT = 3000;

myroute(app);

app.listen(PORT, ()=>{
    console.log('Server is listening at the port 3000');
});