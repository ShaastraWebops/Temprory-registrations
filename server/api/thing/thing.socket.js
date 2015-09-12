/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var thing = require('./thing.model');

exports.register = function(socket) {
  thing.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  thing.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  thing.populate(doc, {path:'parentid', select: 'name'}, function(err, thing) {
    socket.emit('thing:save', thing);
  });
}

function onRemove(socket, doc, cb) {
  socket.emit('thing:remove', doc);
}