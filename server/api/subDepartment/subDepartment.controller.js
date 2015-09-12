'use strict';

var _ = require('lodash');
var SubDepartment = require('./subDepartment.model');

// Get list of subDepartments
exports.index = function(req, res) {
  SubDepartment.find(function (err, subDepartments) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(subDepartments);
  });
};

// Get a single subDepartment
exports.show = function(req, res) {
  SubDepartment.findById(req.params.id, function (err, subDepartment) {
    if(err) { return handleError(res, err); }
    if(!subDepartment) { return res.status(404).send('Not Found'); }
    return res.json(subDepartment);
  });
};

// Creates a new subDepartment in the DB.
exports.create = function(req, res) {
  SubDepartment.create(req.body, function(err, subDepartment) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(subDepartment);
  });
};

// Updates an existing subDepartment in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  SubDepartment.findById(req.params.id, function (err, subDepartment) {
    if (err) { return handleError(res, err); }
    if(!subDepartment) { return res.status(404).send('Not Found'); }
    var updated = _.merge(subDepartment, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(subDepartment);
    });
  });
};

// Deletes a subDepartment from the DB.
exports.destroy = function(req, res) {
  SubDepartment.findById(req.params.id, function (err, subDepartment) {
    if(err) { return handleError(res, err); }
    if(!subDepartment) { return res.status(404).send('Not Found'); }
    subDepartment.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}