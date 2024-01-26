import {addNewPerson, getPerson, getPersons} from "../controller/personController";

const route = (app)=>{
    app.route('/contact')
    .get(getPersons)
    .post(addNewPerson);

    app.get('/contact/:_id', getPerson)
}

export default route;