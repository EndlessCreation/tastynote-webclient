'use strict'

Meteor.publish('notes', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  Counts.publish(this, 'numberOfNotes', Notes.find(where), {noReady: true});
  return Notes.find(where, options);
});
