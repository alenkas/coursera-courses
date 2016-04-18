Images = new Mongo.Collection("images");

Images.allow({
    insert: function(userId, doc) {
        console.log("testing security on image insert");
        // are they logged in
        if (Meteor.user()) {
            // User is messing around. Restrict his actions
            if (userId != doc.createdBy) {
                return false;
            } else {
                // the user is logged in, the image is correct
                return true;
            }
        } else {
            // user not logged in
            return false;
        }
    },
    remove: function(userId, doc) {
    	console.log(userId);
        return true;
    }
});
