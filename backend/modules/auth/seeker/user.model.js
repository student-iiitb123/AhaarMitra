import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
  {
    street: {
      type: String,
      trim: true,
      default: '',
    },
    city: {
      type: String,
      trim: true,
      default: '',
    },
    state: {
      type: String,
      trim: true,
      default: '',
    },
    pincode: {
      type: String,
      trim: true,
      default: '',
    },
    landmark: {
      type: String,
      trim: true,
      default: '',
    },
    tag: {
      type: String,
      enum: ['Home', 'Work', 'Other'],
      default: 'Home',
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  { _id: true },
);

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ['seeker', 'vendor'],
      default: null,
    },

    name: {
      type: String,
      trim: true,
      default: null,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: null,
      unique: true,
      sparse: true,
    },

    phone: {
      type: String,
      trim: true,
      default: null,
      unique: true,
      sparse: true,
    },

    password: {
      type: String,
      default: null,
      select: false,
    },

    addresses: {
      type: [addressSchema],
      default: [],
    },

    registrationStep: {
      type: Number,
      default: 0,
      min: 0,
      max: 4,
    },

    registrationCompleted: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;
