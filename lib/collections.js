Images = new Mongo.Collection('images');

// set up security
Images.allow({
	insert: function(userId, doc) {
		if (Meteor.user()) { // if user is logged in
			if (userId != doc.createdBy) {
				return false;
			}

			return true;
		} 

		return false;
	},
	remove: function(userId, doc) {
		return true;
	}
});