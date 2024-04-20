import { Schema, model } from "mongoose";
const schema = new Schema({
    text:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true
    }
});
export default model.Texts || model("Text",schema);