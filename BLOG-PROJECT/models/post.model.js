import { Schema, model } from "mongoose";

const schema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type:String,
        required: true
    },
    des: {
        type:String,
        required: true
    }
});
export default model.Posts || model("Post", schema);