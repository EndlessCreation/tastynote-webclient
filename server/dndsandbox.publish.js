'use strict'

Meteor.publish('dndsandbox', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  Counts.publish(this, 'numberOfDndsandbox', Dndsandbox.find(where), {noReady: true});
  return Dndsandbox.find(where, options);
});
