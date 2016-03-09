Notes = new Mongo.Collection('notes');

Notes.allow({
  insert: function(userId, note) {
    return userId;
  },
  update: function(userId, note, fields, modifier) {
    return userId;
  },
  remove: function(userId, note) {
    return userId;
  }
});