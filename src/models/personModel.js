import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    firstName:{
        type: String,
        required: "First name is required."
    },
    lastName:{
        type: String,
        required: "Last name is required."
    },
    company:{
        type:String
    },
    created_on:{
        type:Date,
        default : Date.now
    },

});

export default schema;