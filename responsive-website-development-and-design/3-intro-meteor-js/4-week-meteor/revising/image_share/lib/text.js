if(Meteor.isClient){
	console.log("hello from client");
}

if (Meteor.isServer){
	console.log("hello from server");
}

Images = new Mongo.Collection("images");
