if (Meteor.isClient) {
  var img_data = [
  {
    img_src: "Killua_and_Alluka.png",
    img_alt: "some picture"
  },
  {
    img_src: "Alluka_kissing_Killua_on_the_cheek.png",
    img_alt: "second picture"
  }
  ];

  Template.images.helpers({images:img_data});

  Template.images.events({
    'click .js-image': function(event) {
      console.log(event);
      $(event.target).css("width", "50%");
    } 
  });
}

if (Meteor.isServer) {

}
