const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        lastName : { type: String, required: true, unique: true },
        username: { type: String, required: true, unique: true },
        email: { type: String, requred: true, unique: true },
        password: { type: String, required: true },
        isAdmin: {
            type: Boolean,
            default: false,

        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User",UserSchema);