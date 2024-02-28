import mongoose from "mongoose";

async function connect() {
    await mongoose.connect(process.env.DB_URI);
    console.log("database connected");
}

export default connect;