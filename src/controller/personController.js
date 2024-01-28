import mongoose from "mongoose";
import PersonSchema from "../models/personModel";


const Person = mongoose.model('contact', PersonSchema);

export const addNewPerson = (req, res)=>{
    console.log(req.body);
    const person = new Person(req.body);

    person.save().then((result)=>{
        res.json(result);
    }).catch((err)=>{
        res.send(err);
    })
}

export const getPersons = (req, res)=>{
    const persons = Person.find({});
    persons.then((result)=>{
        res.json(result);
    }).catch(err=>{
        res.send(err);
    })
}

export const getPerson = (req, res)=>{
    Person.findById(req.params._id).then((result)=>{
        res.json(result);
    }).catch((err)=>{
        res.json(err);
    });

    // res.send(req.params._id);
}

export const updatePerson = (req, res)=>{
    Person.findOneAndUpdate({_id:req.params._id}, req.body, {new:true}).then((result)=>{
        res.json(result);
    }).catch((err)=>{
        res.send(err);
    });

}

export const deletePerson= (req, res)=>{
    Person.deleteOne({_id:req.params._id}).then(
        (result)=>res.send(result)
    ).catch(
        (err)=>res.send(err)
    )


}

