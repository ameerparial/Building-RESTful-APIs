import {addNewPerson, deletePerson, getPerson, getPersons, updatePerson} from "../controller/personController";

const route = (app)=>{
    app.route('/contact')
    .get(getPersons)
    .post(addNewPerson);

    // app.get('/contact/:_id', getPerson)
    app.route('/contact/:_id')
    .get(getPerson)
    .put(updatePerson)
    .delete(deletePerson)
}

export default route;