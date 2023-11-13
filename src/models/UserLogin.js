import mongoose from "mongoose";

var Schema = mongoose.Schema

var UserSchema = new Schema({
    user_email: { type: String, required: true, index: { unique: true } },
    user_pass: { type: String, required: true }
});

const UserLogin = mongoose.models.userlists || mongoose.model('userlists', UserSchema)

export default UserLogin;