import mongoose from "mongoose";
import bcrypt from "bcrypt";
const SALT_WORK_FACTOR = 10;

const UserSignupSchema = new mongoose.Schema(
    {
        user_fname: {
            type: String,
            required: true
        },
        user_lname: {
            type: String,
            required: true
        },
        user_email: {
            type: String,
            required: true,
            index: { unique: true }
        },
        user_pass: {
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            default: Date.now()
        },
        updated_at: {
            type: Date,
            default: Date.now()
        },
        deleted_at: {
            type: Date,
            default: null
        }
    })
UserSignupSchema.pre('', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('user_pass')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.user_pass, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.user_pass = hash;
            next();
        });
    });
});

const UserSignup = mongoose.models.userLists || mongoose.model('userLists', UserSignupSchema)

export default UserSignup;