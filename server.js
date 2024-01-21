import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Home page');
});

app.listen(PORT, ()=>{
    console.log('Server is listening at the port 3000');
});