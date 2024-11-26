import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "A Mobile or email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "A password is must required"],
    },
    // mobilenumber: {
    //     type: Number,
    //     required: [true, "A Mobile or email is required"],
    // },
    verifyToken: String,
    verifyTokenExpiry: Date
})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User