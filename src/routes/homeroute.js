
const route = (app)=>{

    app.route('/')
    .get((req, res)=>{
        res.send('Home route in another folder');
    })
    .post((req, res)=>{
        console.log(req.body);
        res.send('Data is received');
    });

}

export default route;