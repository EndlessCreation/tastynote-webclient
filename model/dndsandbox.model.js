Dndsandbox = new Mongo.Collection('dndsandbox');

Dndsandbox.allow({
  insert: function(userId, dndsandbox) {
    return true;
  },
  update: function(userId, dndsandbox, fields, modifier) {
    return true;
  },
  remove: function(userId, dndsandbox) {
    return true;
  }
});