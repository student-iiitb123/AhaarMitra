import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["seeker", "vendor"],
    default: null,
  },
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  addresses: [
    {
      street: String,
      city: String,
      state: String,
      pincode: String,
      landmark: String,
      tag: {
        type: String,
        enum: ["Home", "Work", "Other"],
        default: "Home",
      },
    },
  ],
  registrationStep: {
    type: Number,
    default: 0,
  },
  registrationCompleted: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });