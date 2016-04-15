import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.images.helpers({ 
	images: Images.find({}, {sort: {rating: -1}})
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
    'click .js-rate-image': function(event){
    	var rating = $(event.currentTarget).data("userrating");
    	console.log(rating);
    	var image_id = this.id;
    	console.log(image_id);

    	// Pass rating value into database and store it
    	Images.update(
    		{_id: image_id},
    		{$set: {rating: rating}}
    	);
    }
});
