'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  date: { type: Date, default: Date.now },
  parentid: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

ThingSchema.statics = {
  loadRecent: function(cb) {
    this.find({})
      .populate({path:'parentid', select: 'name'})
      .sort('-date')
      .limit(20)
      .exec(cb);
  }
};



module.exports = mongoose.model('Thing', ThingSchema);