import {Schema, model} from "mongoose";

const schema = new Schema({
    name :{
        type:String
    },
    place:{
        type:String
    }
});

export default model.Tests || model("Test",schema);