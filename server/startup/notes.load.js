Meteor.startup(function() {
  if(Notes.find().count() === 0) {
    var notes = [
      {
        'name': 'note 1',
        'content': 'content 1',
        'createDate': '2016-03-09 11:11:00'
      },
      {
        'name': 'note 2',
        'content' : 'content 2',
        'createDate': '2016-03-09 22:22:00'
      }
    ];
    notes.forEach(function(note) {
      Notes.insert(note);
    });
  }
});