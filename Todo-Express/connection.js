import mongoose from "mongoose";

async function connect(){
    await mongoose.connect(process.env.DB_URI);
    console.log("DATABASE CONNECTED");
}

export default connect();