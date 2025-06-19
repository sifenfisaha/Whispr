import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Your Blog Requires A Title'],
    trim: true,
    unique: true,
  },
  slug: {
    type: String,
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    trim: true,
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  state: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
  read_count: {
    type: Number,
    default: 0,
  },
  reading_time: {
    type: String,
    default: 0,
  },
  tags: {
    type: [String],
  },
  body: {
    type: String,
    required: [true, 'Your blog must have a body!'],
  },
});


export default BlogSchema;
