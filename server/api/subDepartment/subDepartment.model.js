'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SubDepartmentSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('SubDepartment', SubDepartmentSchema);