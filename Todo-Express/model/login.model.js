import { Schema,model } from "mongoose";

const schema = new Schema({
    username: {
        type:String,
        required: true,
        unique : true
    },
    email:{
        type:String,
        required: true,
        unique: true

    },
    password:{
        type :String,
        required:true,
        unique: false
    }
});

// export default model.Todos || model("todo", schema);

export default model.Logins || model("login",schema);