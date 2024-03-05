import { Schema,model } from "mongoose";

const schema = new Schema({
    name: {
        type:String,
        required: true,
        unique : false
    },
    place:{
        type:String,
        required: true,
        unique: false
    },
    mark:{
        type:Number,
        required: true,
        unique: false
    }
});

export default model.Lists || model("list", schema);