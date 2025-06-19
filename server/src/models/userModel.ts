import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: [true, 'Please provide firstname'],
  },
  lastname: {
    type: String,
    required: [true, 'Please provide lastname'],
  },
  email: {
    type: String,
    required: [true, 'Please Provide Email Address'],
    unique: true,
    validate: [validator.isEmail, 'Please a valid email address'],
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please Provide A Password'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please Fill Password Field'],
    validate: function(el: string) {
      return el === this.password;
    },
    message: 'Password do not match.',
  },
  resetPasswordToken: String,
  resetTokenExpires: Date,
}, { timestamps: true });

export default UserSchema;
