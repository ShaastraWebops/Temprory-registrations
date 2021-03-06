'use strict';

var express = require('express');
var controller = require('./user.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/getCoords', controller.getCoords);
router.get('/getCores',controller.getCores);
router.get('/getSuperCoords',controller.getSuperCoords);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.put('/:id/updateProfile', auth.isAuthenticated(), controller.updateProfile);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/addDepartment', auth.hasRole('core'), controller.addDepartment);
router.post('/addSubDepartment', auth.hasRole('core'), controller.addSubDepartment);
router.post('/forgotPassword', controller.forgotPassword);
router.post('/resetPassword/:token', controller.resetPassword);
router.post('/', controller.create);

module.exports = router;
