import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Display email and username fields
Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
});

Template.images.helpers({
    images: function() {
        if (Session.get("userFilter")) {
            return Images.find({createdBy: Session.get("userFilter")}, {
                sort: {
                    createdOn: -1,
                    rating: -1
                }
            })
        } else {
            return Images.find({}, {
                sort: {
                    createdOn: -1,
                    rating: -1
                }
            })
        }
    },
    getUser: function(user_id) {
        // Find user with this id in the database
        var user = Meteor.users.findOne({
            _id: user_id
        });
        // If user is found print his unsername
        if (user) {
            return user.username;
        } else {
            return "anon";
        }
    }
});

Template.body.helpers({
    username: function() {
        if (Meteor.user()) {
            return Meteor.user().username;
            // return Meteor.user().emails[0].address;    
        } else {
            return "anonymous internet user";
        }
    }
});

Template.images.events({
    'click .js-delete-image': function(event) {
        var image_id = this._id;
        console.log(image_id);
        $("#" + image_id).hide('slow', function() {
            Images.remove({
                "_id": image_id
            });
        });
    },
    'click .js-rate-image': function(event) {
        var rating = $(event.currentTarget).data("userrating");
        console.log(rating);
        var image_id = this.id;
        console.log(image_id);

        // Pass rating value into database and store it
        Images.update({ _id: image_id }, { $set: { rating: rating } });
    },
    'click .js-show-image-form': function(event) {
        $("#image_add_form").modal('show');
    },
    'click .js-set-image-filter': function(event) {
        Session.set("userFilter", this.createdBy);
    }
});

Template.images_sort.events({
    'click .js-sort-date': function(event) {
        console.log("date");
        Images.find({}, {
            sort: {
                createdOn: -1
            }
        })
    },
    'click .js-sort-rating': function(event) {
        console.log("rating");
        Images.find({}, {
            sort: {
                rating: -1
            }
        })
    }
});

Template.image_add_form.events({
    'submit .js-add-image': function(event) {
        var img_src, img_alt;
        img_src = event.target.img_src.value;
        img_alt = event.target.img_alt.value;
        console.log(img_src, img_alt);

        if (Meteor.user()) {
            Images.insert({
                img_src: img_src,
                img_alt: img_alt,
                createdOn: new Date(),
                createdBy: Meteor.user()._id
            });
        }

        // Dismiss the modal when image added
        $("#image_add_form").modal('hide');

        // false prevents browser from the default action
        return false;
    }
});
