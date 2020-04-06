const mongoose = require("mongoose");
const Preference = require("./Preference")
const Request = require("./Request")

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    name: { type: String },
    surname: { type: String },
    hashedPassword: { type: String },
    avatarImg: {
      type: String,
      default:
        "https://res.cloudinary.com/dalhi9ynf/image/upload/v1573857720/mclovin_kprr0f.jpg"
    },
    location: { type: String },
    prefrences: [ Preference ],
    requests: [ Request ]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
