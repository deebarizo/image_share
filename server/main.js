import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	Images = new Mongo.Collection('images');

	console.log(Images.find().count());

	if (Images.find().count() == 0) {
		Images.insert(
			{
				img_src: 'red_bird.jpg',
				img_alt: 'red bird'
			}
		);

		Images.insert(
			{
				img_src: 'red_green_bird.jpg',
				img_alt: 'red green bird'
			}
		);

		Images.insert(
			{
				img_src: 'white_bird.jpg',
				img_alt: 'white bird'
			}
		);
	}
});

