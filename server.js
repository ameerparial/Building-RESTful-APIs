import express from 'express';
import myroute from './src/routes/homeroute';
import con_route from './src/routes/contactroute';
const app = express();
const PORT = 3000;

myroute(app);

con_route(app);

app.listen(PORT, ()=>{
    console.log('Server is listening at the port 3000');
});