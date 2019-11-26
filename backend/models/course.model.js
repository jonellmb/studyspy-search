const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema;

const courseSchema = new mongoose.Schema({
    coursename: {
    type: String,
    trim: true
  },
  cdescription: { type: String,trim: true},
  entryreq: { type: String,trim: true},
  level: { type: Number},
  duration: { type: String,trim: true},
  d_tuitionfee: { type: Number,trim: true },
  i_tuitionfee: { type: Number,trim: true },
  provider: {  type: ObjectId, ref: 'Provider'}

}, {
  timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;