import mongoose from "mongoose";
import PersonSchema from "../models/personModel";


const Person = mongoose.model('contact', PersonSchema);

export const addNewPerson = (req, res)=>{
    console.log(req.body);
    const person = new Person(req.body);

    person.save().then((result)=>{
        res.json(result);
    }).catch((err)=>{
        console.log(err)
    })
}



