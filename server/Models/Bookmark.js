const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookmarkSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  url: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  favicon: {
    type: String,
    default: '',
  },

  // summary: {
  //   type: String,
  //   default: '',
  // },

    tag: {
      type: String,
      enum: ['ai', 'ml', 'software development', 'job'], 
      required: true,
      lowercase: true,
      trim: true,
    },


  order: {
    type: Number,
    default: 0, 
  },

  createdAt: {
    type: Date,
    default: Date.now,
  }
});

BookmarkSchema.index({ tags: 1 });

const BookmarkModel = mongoose.model('bookmarks', BookmarkSchema);

module.exports = BookmarkModel;
