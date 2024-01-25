import {addNewPerson} from "../controller/personController";

const route = (app)=>{
    app.route('/contact')
    .get((req, res)=>{
        res.send('You are at contact page.');
    })
    .post(addNewPerson);

    app.get('/contact/:cid', (req, res)=>{
        res.send(req.params);
    });
}

export default route;