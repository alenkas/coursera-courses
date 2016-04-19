Websites = new Mongo.Collection("websites");

Websites.allow({
    insert: function(userId, doc) {
    	if(Meteor.user()){
    		if(userId != doc.createdBy){
    			return false;
    		} else {
    			return true;
    		}
    	} else {
    		return false;
    	}
    },
    update: function(userId, doc){
    	if(Meteor.user()){
    		return true;
    	} else {
    		return false;
    	}
    },
    remove: function(userId, doc) {
    	if(Meteor.user()){
    		return true;
    	} else {
    		return false;
    	}
    }
});