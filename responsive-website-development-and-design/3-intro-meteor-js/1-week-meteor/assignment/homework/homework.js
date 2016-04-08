if (Meteor.isClient) {
  Template.time.helpers({
    'time': function() {
      return new Date();
    }
  });
}

if (Meteor.isServer) {

}
