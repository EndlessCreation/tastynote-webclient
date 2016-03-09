Meteor.startup(function() {
  if(Notes.find().count() === 0) {
    var notes = [
      {
        'name': 'note 1'
      },
      {
        'name': 'note 2'
      }
    ];
    notes.forEach(function(note) {
      Notes.insert(note);
    });
  }
});