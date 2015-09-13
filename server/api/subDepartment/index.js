'use strict';

var express = require('express');
var controller = require('./subDepartment.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('core'),controller.index);
router.get('/:id', controller.show);
router.post('/', auth.hasRole('core'),controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;