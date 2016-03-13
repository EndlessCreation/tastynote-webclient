Meteor.startup(function() {
  if(Dndsandbox.find().count() === 0) {
    var dndsandbox = [
      {
        'name': 'dndsandbox 1'
      },
      {
        'name': 'dndsandbox 2'
      }
    ];
    dndsandbox.forEach(function(dndsandbox) {
      Dndsandbox.insert(dndsandbox);
    });
  }
});