import { Schema,model } from "mongoose";

const schema = new Schema({
    text: {
        type:String,
        required: true,
        unique : false
    },
    completed:{
        type:Boolean,
        required: true
    }
});

export default model.Todos || model("todo", schema);